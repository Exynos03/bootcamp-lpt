import React from 'react'
import { useState , useEffect } from 'react';
import '../Stylesheets/Form2.css';
import { auth } from '../config/firebase';
import { RecaptchaVerifier , signInWithPhoneNumber } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import '../Stylesheets/QuickForm.css';
import RightTick from '../formAssets/RightTick.svg';
import User from '../formAssets/User.svg';
import Email from '../formAssets/Email.svg';
import Phone from '../formAssets/phone.svg';
import Arrow from '../formAssets/arrow.svg';
import PinLocation from '../formAssets/PinLocation.svg';
import Fill from '../formAssets/Fill Rec.svg';
import Empty from '../formAssets/Empty Rec.svg';
import calendar from '../formAssets/Calender.svg';
import Hero from './Hero';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format, set } from 'date-fns';
import '../Stylesheets/Index.css';
import { ref, uploadBytes , getDownloadURL } from 'firebase/storage';
import { addDoc } from 'firebase/firestore';
import { storage , paidForm } from '../config/firebase';
import { v4 } from 'uuid';
import { UilArrowLeft } from '@iconscout/react-unicons';


const PaidForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [section,setSection] = useState(0);
  const [dateOfBirth,setDateOfBirth] = useState('');
  const [gender,setGender] = useState('');
  const [city,setCity] = useState('');
  const [photo,setPhoto] = useState(null);
  const [grade,setGrade] = useState('');
  const [institution,setInstitution] = useState('');
  const [marks,setMarks] = useState('');
  const [branch,setBranch] = useState('');
  const [idea,setIdea] = useState('');
  const [whyEntrepreneur, setWhyEntrepreneur] = useState('');
  const [thoughBehindIdea, setThoughBehindIdea] = useState('');
  const [differentFromOthers, setDifferentFromOthers] = useState('');
  const [c1, setC1] = useState('');
  const [show,setShow] = useState(0);
  const [selectedDate,setSelectedDate] = useState('');
  const [otpError,setOtpError] = useState(false);
  const [captcha,setCaptcha] = useState(false);
  const navigate = useNavigate();
 

  const OTP = c1;
  
  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
  ];

  const gradeOptions = [
    { value: 'School - Class 11th', label: 'School - Class 11th' },
    { value: 'School - Class 12th', label: 'School - Class 12th' },
    { value: 'College First Year', label: 'College First Year' },
    { value: 'College Second Year', label: 'College Second Year' },
    { value: 'College Pre final year', label: 'College Pre final year' },
    { value: 'College Final Year', label: 'College Final Year' },
    { value: 'Masters', label: 'Masters' },
    { value: 'Others', label: 'Others' }
  ]; 

  useEffect(() => {
    if(localStorage.getItem('paid-form') === '1'){
        setSection(5);
    }
    else{    
        {(section === 5) && 
            <div>
                {localStorage.setItem('paid-form', '1')}
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
        setSection(1);
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
    setSection(2);
    
    }).catch((error) => {
    // User couldn't sign in (bad verification code?)
    setOtpError(true);
    
    });
}
  

  const handlePersonalDetails = (e) => {
    e.preventDefault();
    console.log(photo,city,gender,dateOfBirth);
    setSection(3);
  }

  const handleEducationalDetails = (e) => {
    e.preventDefault();
    setSection(4);
  }

  function handleDOB() {
    setShow (1) 
}

  function dateSetter(date) {
    setSelectedDate(date);
    const inputDate = new Date(date);
    const formattedDate = format(inputDate, "do MMM yyyy");
    setDateOfBirth(formattedDate);
    setShow(0);
  }


  const handleStartupDetails = async (e) => {
    e.preventDefault();
    
    
    const imageRef = ref(storage, `paidFormImages/${photo.name+v4()}`);

    try {
      await uploadBytes(imageRef, photo); 
      const url = await getDownloadURL(imageRef);

      const docRef = await addDoc(paidForm, {
        name: name,
        email: email,
        phone: phone,
        dateOfBirth: dateOfBirth,
        gender: gender,
        city: city,
        photo: url,
        course: grade,
        institution: institution,
        marks: marks,
        branch: branch,
        idea: idea,
        whyEntrepreneur: whyEntrepreneur,
        thoughBehindIdea: thoughBehindIdea,
        differentFromOthers: differentFromOthers
      });
      setSection(5);
      console.log("Document written with ID: ", docRef.id );
    }catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  
  return (
    <div className='App'>
    
    <Hero />
    <section className='form-section'>
    <main>
  {
    (section === 5)
  ?
    <>
    <h1 className='form-head-3'>Congrats! Your application has been submitted!</h1>
            <div className='align'>
                <img src={RightTick} alt='pica' className='response-image' />
                <h4 className='txt-res'>Our experts will be reviewing your application and will be getting in touch with you soon!</h4>
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
  {
    (section === 4)
  ?
    <>
      <div className='div-head'> 
        <button className='btn-back' onClick={ () => setSection(section-1)}>
          <UilArrowLeft color="#FFFFFF" size="39"/>
        </button>
        <h4>Startup Details</h4>
        <button className='btn-invisible' disabled={true}>
          <UilArrowLeft color="#151417" size="39"/>
        </button>
      </div>
      <div className='progress-bar'>
        <img src={Fill} alt='Fill-img' className='bar'/>
        <img src={Fill} alt='Fill-img' className='bar'/>
        <img src={Fill} alt='Fill-img' className='bar'/>
        <img src={Fill} alt='Fill-img' className='bar'/>
        <img src={Fill} alt='Fill-img' className='bar'/>
        <img src={Empty} alt='Empty-img' className='bar'/>
      </div>
      <h1 className='form-head-1'>Hi {name.split(" ")[0]}</h1>
      <h1 className='form-head'>Let's see your entrepreneurial spirit</h1>
      <form onSubmit={ (e) => handleStartupDetails(e)}>
            <label htmlFor="why-entrepreneur">Why do you wanna become an entrepreneur?
                <div className='div'>
                    <textarea 
                        className='inpt-txtearea'
                        type="text"
                        name="why-entrepreneur" 
                        id="why-entrepreneur" 
                        placeholder='Explain in a couple of sentences'
                        onChange={ (e) => setWhyEntrepreneur(e.target.value) }
                    ></textarea>
                </div>
                <p className='txt-btm'>In a few sentences let us know why </p>
            </label> 
            <label htmlFor="idea">Do you have an idea in mind?
                <div className='div'>
                    <textarea 
                        className='inpt-txtearea'
                        type="text"
                        name="idea" 
                        id="idea" 
                        placeholder='Explain in a couple of sentences'
                        onChange={ (e) => setIdea(e.target.value) }
                    ></textarea>
                </div>
                <p className='txt-btm'>Give short brief on what you have in mind</p>
            </label>
            <label htmlFor="though-behind-idea">How did you come up with this idea?
                <div className='div'>
                    <textarea 
                        className='inpt-txtearea'
                        type="text"
                        name="though-behind-idea" 
                        id="though-behind-idea" 
                        placeholder='Explain in a couple of sentences'
                        onChange={ (e) => setThoughBehindIdea(e.target.value) }
                    ></textarea>
                </div>
                <p className='txt-btm'>Was there anything specific that made you come up with this?</p>
            </label>
            <label htmlFor="different-from-others">What sets you apart from others?
                <div className='div'>
                    <textarea 
                        className='inpt-txtearea'
                        type="text"
                        name="different-from-others" 
                        id="different-from-others" 
                        placeholder='Explain in a couple of sentences'
                        onChange={ (e) => setDifferentFromOthers(e.target.value) }
                    ></textarea>
                </div>
                <p className='txt-btm'>What makes you different from the others?</p>
            </label>
            {
              (differentFromOthers && thoughBehindIdea && idea && whyEntrepreneur)
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
              <span><img src={Arrow} alt='arrow-logo' className='btn-icon'/></span>
              </button>
            </>  
            }
      </form>
    </>
  :
  <>
  {
    (section === 3)
  ?
    <>
    <div className='div-head'> 
      <button className='btn-back' onClick={ () => setSection(section-1)}>
        <UilArrowLeft color="#FFFFFF" size="39"/>
      </button>
      <h4>Educational Details</h4>
      <button className='btn-invisible' disabled={true}>
        <UilArrowLeft color="#151417" size="39"/>
      </button>
    </div>
    <div className='progress-bar'>
      <img src={Fill} alt='Fill-img' className='bar'/>
      <img src={Fill} alt='Fill-img' className='bar'/>
      <img src={Fill} alt='Fill-img' className='bar'/>
      <img src={Fill} alt='Fill-img' className='bar'/>
      <img src={Empty} alt='Empty-img' className='bar'/>
      <img src={Empty} alt='Empty-img' className='bar'/>
    </div>
    <h1 className='form-head-1'>Hi {name.split(" ")[0]}</h1>
    <h1 className='form-head'>Lets get to know you a little better</h1>
    <form onSubmit={ (e) => handleEducationalDetails(e)}>
    <label htmlFor="grade-select">Course
                <select
                  id="grade-select"
                  className='inpt-select'
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                >
                  <option value="">Enter your Course name</option>
                  {gradeOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                
                <p className='txt-btm'>What are you studying right now?</p>
            </label>
            <label htmlFor="institution">Institution
                <div className='div'>
                    
                    <input 
                        className='inpt-2'
                        type="text"
                        name="institution" 
                        id="institution" 
                        placeholder='Institution name'
                        onChange={ (e) => setInstitution(e.target.value) }
                    />
                </div>
                <p className='txt-btm'>Where are you studying?</p>
            </label> 
            <label htmlFor="marks">Marks
                <div className='div'>
                    <input 
                        className='inpt-2'
                        type="text"
                        name="marks" 
                        id="marks" 
                        placeholder='Enter your last years grade'
                        onChange={ (e) => setMarks(e.target.value) }
                    />
                </div>
                <p className='txt-btm'>What's your CGPA or %?</p>
            </label>
            <label htmlFor="branch">Branch/Stream
                <div className='div'>
                    <input 
                        className='inpt-2'
                        type="text"
                        name="branch" 
                        id="branch" 
                        placeholder='Enter your Branch/Strem name'
                        onChange={ (e) => setBranch(e.target.value) }
                    />
                </div>
                <p className='txt-btm'>What branch/stream are you studying in?</p>
            </label> 
            {
              (grade && institution && marks && branch)
            ? 
              <button 
                    type="submit"
                    style={{backgroundColor:'#535353'}}
                    className='btn-sbmt'
              >Continue
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
              >Continue
              <span><img src={Arrow} alt='arrow-logo' className='btn-icon'/></span>
              </button> 
            </>  
            }
    </form>
    </>
  :
    <>
    {
    (section === 2)
  ?
    <>
    <h4>Personal Details</h4>
    <div className='progress-bar'>
      <img src={Fill} alt='Fill-img' className='bar'/>
      <img src={Fill} alt='Fill-img' className='bar'/>
      <img src={Fill} alt='Fill-img' className='bar'/>
      <img src={Empty} alt='Empty-img' className='bar'/>
      <img src={Empty} alt='Empty-img' className='bar'/>
      <img src={Empty} alt='Empty-img' className='bar'/>
    </div>
    <h1 className='form-head-1'>Hi {name.split(" ")[0]}</h1>
    <h1 className='form-head'>Lets get to know you a little better</h1>
    <form onSubmit={ (e) => handlePersonalDetails(e)}>
            <label >Date of Birth
                <div className='inpt-date'>
                    { dateOfBirth ? <p className='txt-date'>{dateOfBirth}</p> : <p className='txt-date'>Select Date of Birth</p>}
                    <span><img src={calendar} alt='icon-user' className='icon-date' onClick={handleDOB} /></span>
                </div>
                
                <p className='txt-btm'>Enter your DOB</p>
                {show === 1 && <Calendar onChange={dateSetter} value={selectedDate} />}
            </label>
            <label htmlFor="gender-select">Gender
                <select
                  id="gender-select"
                  className='inpt-select'
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="" >Select your Gender</option>
                  {genderOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                
                <p className='txt-btm'>What's your gender</p>
            </label> 
            <label htmlFor="city">City
                    <input 
                        className='inpt-2'
                        type="text" 
                        name="city" 
                        id="city" 
                        placeholder='Enter your City'
                        onChange={ (e) => setCity(e.target.value) }
                    />
                <p className='txt-btm'>Which City are you from?</p>
            </label> 
            <label htmlFor="photo">Upload Photo
                <div className='div-file'>
                    { photo ? <p className='txt-date'>{photo.name}</p> : <p className='txt-date'>Upload Image here</p>}
                    <span><img src={PinLocation} alt='icon-user' className='icon-file' /></span>
                    <input 
                        className='inpt-file'
                        type="file" 
                        accept="image/*"
                        name="photo" 
                        id="photo" 
                        placeholder='Upload your Image here'
                        onChange={ (e) => setPhoto(e.target.files[0]) }
                    />
                </div>
                <p className='txt-btm'>Upload your passport size photo</p>
            </label>  
            {
              (dateOfBirth && gender && city && photo)
            ? 
              <button 
                    type="submit"
                    style={{backgroundColor:'#535353'}}
                    className='btn-sbmt'
              >Continue
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
              >Continue
              <span><img src={Arrow} alt='arrow-logo' className='btn-icon'/></span>
              </button> 
            </>  
            }
    </form>
    </>
  :
  <>
  <h4>Application Form</h4>
  <div id="sign-in-button"></div> 
    {
      (section === 1)
    ?
    <>
    <div className='progress-bar'>
      <img src={Fill} alt='Fill-img' className='bar'/>
      <img src={Fill} alt='Fill-img' className='bar'/>
      <img src={Empty} alt='Empty-img'  className='bar'/>
      <img src={Empty} alt='Empty-img' className='bar'/>
      <img src={Empty} alt='Empty-img' className='bar'/>
      <img src={Empty} alt='Empty-img' className='bar'/>
    </div>
    <h1 className='form-head'>Enter the OTP you received on your mobile</h1>
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
    </>
    :
    <>
    <div className='progress-bar'>
      <img src={Fill} alt='Fill-img' className='bar'/>
      <img src={Empty} alt='Empty-img' className='bar' />
      <img src={Empty} alt='Empty-img'  className='bar'/>
      <img src={Empty} alt='Empty-img' className='bar'/>
      <img src={Empty} alt='Empty-img' className='bar'/>
      <img src={Empty} alt='Empty-img' className='bar'/>
    </div>
    <h1 className='form-head'>Hey! Lets get started with your application.</h1>
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
                    ></input>
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
              (name && email && phone.length===10)
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
              <span><img src={Arrow} alt='arrow-logo' className='btn-icon'/></span>
              </button>
            </>
            }
    </form>  
    </>
    }
  </>
  }   
    </>  
  }

  </>  
  }
  </>  
  }
  </main>
  </section>
  </div>
  )
}

export default PaidForm;
