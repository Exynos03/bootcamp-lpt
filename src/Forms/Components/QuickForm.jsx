import React from 'react';
import { useState , useEffect } from 'react';
import { auth , quickForm } from '../config/firebase';
import { RecaptchaVerifier , signInWithPhoneNumber } from "firebase/auth";
import { addDoc } from 'firebase/firestore';
import { useNavigate } from "react-router-dom";
import '../StyleSheets/QuickForm.css';
import RightTick from '../formAssets/RightTick.svg';
import User from '../formAssets/User.svg';
import Email from '../formAssets/Email.svg';
import Phone from '../formAssets/phone.svg';
import Arrow from '../formAssets/arrow.svg';
import Hero from './Hero';

const QuickForm = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [section,setSection] = useState(0);
    const [c1, setC1] = useState('');
    const [otpError,setOtpError] = useState(false);
    const [captcha,setCaptcha] = useState(false);
    const navigate = useNavigate();

    const OTP = c1;

    useEffect(() => {
        if(localStorage.getItem('quick-form') === '1'){
            setSection(2);
        }
        else{    
            {(section === 2) && 
                <div>
                    {localStorage.setItem('quick-form', '1')}
                </div>
            }
        }
    },[section])
    
    const configCaptcha = () => {
        setCaptcha(true);
        window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
              // reCAPTCHA solved, allow signInWithPhoneNumber.
              setCaptcha(false);
              setSection(1);
              onSignInSubmit();
              console.log("Captcha Solved");
            },
            defaultCountry: "IN"
          }, auth);
          
    }

    const onSignInSubmit = (e) => {
        e.preventDefault();
        configCaptcha();
        const phoneNumber = `+91${phone}`;  
        console.log(phoneNumber);
        const appVerifier = window.recaptchaVerifier;

        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
            .then((confirmationResult) => {
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            window.confirmationResult = confirmationResult;
            console.log("SMS Sent");
            }).catch((error) => {
            // Error; SMS not sent
            console.log(error);
            });
        
    }

    const handleVerify = (e) => {
        e.preventDefault();
        const code = OTP;
        console.log(code);
        window.confirmationResult.confirm(code).then((result) => {
        // User signed in successfully.
            addDoc(quickForm, {
                name: name,
                age: age,
                email: email,
                phone: phone
            }).then(() => {
                setSection(2);
                console.log("Document successfully written!");
                
            }).catch((error) => {
                console.error("Error writing document: ", error);
            });
        }).catch((error) => {
        // User couldn't sign in (bad verification code?)
        setOtpError(true);
        
        });
    }
    

  return (
    <div className='App'>
      <Hero />
      <section className='form-section'>
      <main>
        
        { (section === 2)
        ? 
        <>
            <h1 className='form-head-3'>Congrats! Your application has been submitted!</h1>
            <div className='align'>
                <img src={RightTick} alt='pica' className='response-image' />
                <h4 className='txt-res'>Our experts will be contacting you soon</h4>
            </div>
            <button 
                    type="submit"
                    style={{backgroundColor:'#535353'}}
                    className='btn-home'
                    onClick={ () => navigate('/') }
                >
            Home</button>
        </>
        :
        <>
        <h4>Application Form</h4>
        <h1 className='form-head'>But first, Lets get to know you a little more!</h1>
        <div id="sign-in-button"></div>                

        { (section === 1)
        ?
        <form onSubmit={ (e) => handleVerify(e)} className='otp-form'>
        <label htmlFor="otp">Enter your OTP
                    <input 
                        className='inpt-otp'
                        type="text" 
                        name="otp" 
                        id="otp" 
                        placeholder="######"
                        onChange={ (e) => setC1(e.target.value) }
                    />
            </label>
            {
                (c1.length === 6)
                ?
                <button 
                    type="submit"
                    style={{backgroundColor:'#535353'}}
                    className='btn-vrfy'
                >Verify OTP</button>
                :
                <button 
                    type="submit"
                    style={{backgroundColor:'#888888'}} 
                    disabled={true}
                    className='btn-vrfy'
                >Verify OTP</button>
            }
            { otpError && <h1 className='form-head-2'>OTP is invalid. Please enter correct OTP</h1> }
        </form>
        :
        <form onSubmit={ (e) => onSignInSubmit(e)}>
            <label htmlFor="name">Name
                <div className='div'>
                    <span><img src={User} alt='icon-user' className='icon' /></span>
                    <input 
                        className='inpt'
                        type="text" 
                        name="name" 
                        id="name" 
                        placeholder="Enter name of applicant"
                        onChange={ (e) => setName(e.target.value) }
                    />
                </div>
            </label>
            <label htmlFor="age">Age
                <div className='div'>
                    <span><img src={User} alt='icon-user' className='icon' /></span>
                    <input 
                        className='inpt'
                        type="number" 
                        name="age" 
                        id="age" 
                        placeholder="Enter age of applicant"
                        onChange={ (e) => setAge(e.target.value) }
                    />
                </div>
            </label>    
            <label htmlFor="email">Email ID
                <div className='div'>
                <span><img src={Email} alt='icon-user' className='icon'/></span>
                    <input 
                        className='inpt'
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Enter your Email" 
                        onChange={ (e) => setEmail(e.target.value) }
                    />
                </div>    
            </label>
            <label htmlFor="phone">Phone number
                <div className='div'>
                <span><img src={Phone} alt='icon-user' className='icon' /></span>
                    <input 
                        className='inpt'
                        type="tel" 
                        name="phone" 
                        id="phone" 
                        placeholder="Enter your phone number" 
                        onChange={ (e) => setPhone(e.target.value) }
                    />
                </div>
            </label>
            {
              captcha && <p className='txt-btm'>Verifying Captcha...</p>
            }
          
            {
                ( name && email && phone && phone.length === 10)
                ?
                <button 
                    type="submit"
                    style={{backgroundColor:'#535353'}}
                    className='btn-sbmt'
                >Submit
                 <span><img src={Arrow} alt='arrow-logo' className='btn-icon'/></span>
                </button>
                :
                <>
                <p className='txt-btm'>All fields are mandatory</p>
                <button 
                    type="submit"
                    style={{backgroundColor:'#888888'}} 
                    disabled={true}
                    className='btn-sbmt'
                >Submit
                 <span><img src={Arrow} alt='arrow-logo' className='btn-icon' /></span>
                </button>
                </>
            }
        </form>    
        }
        </>
        }
    
    </main>
    </section>
    </div>
  )
}

export default QuickForm
