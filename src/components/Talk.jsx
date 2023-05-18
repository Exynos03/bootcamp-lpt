import React, { useEffect, useState, useRef } from 'react'
import advisor from '../assets/Ellipse.png'
import { AiOutlineCalendar } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";
import { MdCallEnd } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import moment from 'moment'


import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, update } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://landing-page-c8e30-default-rtdb.asia-southeast1.firebasedatabase.app/"
}



const app = initializeApp(appSettings)
const database = getDatabase(app)
const dates = ref(database, "Date")
const bookings = ref(database, "Bookings")
const config = ref(database, "Config")

let userTime = ''

export default function Talk(props) {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [userDate, setUserdate] = useState('')

  const [time, setTime] = useState([])
  const [selectedSlot, setSelectedSlot] = useState('')
  const[valueChange, setValueChange] = useState({})
  
  const [number, setNumber] = useState('')
  
  const [otp, setOtp] = useState(["", "", "", ""])
  const inputRefs = useRef([])

  const [validOtp, setValidOtp] = useState('')

  let otpValue = otp.join('')

  const[docId , setdocId] = useState('')

  const [path, setPath] = useState(0)

  
  const [show, setShow] = useState(0)
  const [buttonColor, setButtonColor] = useState('rgba(136, 136, 136, 0.5)')
  
  const [change, setChange] = useState(null)


  let arrangeDate = selectedSlot && `${formatDatetoString(userDate)} at  ${selectedSlot.label}`

  const maxDate = new Date()
  const minDate = new Date()
  maxDate.setDate(maxDate.getDate() + 4)

  
  function formatDatetoString(dateString) {
    const date = moment(dateString, 'DD-MM');
    const dayOfMonth = date.date();
    const suffix = getDayOfMonthSuffix(dayOfMonth);
    const monthName = date.format('MMMM');
  
    return `${dayOfMonth}${suffix} of ${monthName}`;
  }

  function getDayOfMonthSuffix(dayOfMonth) {
    const suffixes = ['th', 'st', 'nd', 'rd'];
    const relevantDigits = (dayOfMonth < 30) ? dayOfMonth % 20 : dayOfMonth % 30;
    const suffixIndex = (relevantDigits <= 3) ? relevantDigits : 0;
  
    return suffixes[suffixIndex];
  }


  function formatDate(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    return `${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}`;
  }
  
  function handleDateChange(date) {
    setSelectedDate(date)
    setUserdate(formatDate(date)) 
    setTimeout(() => {
      setShow(prev => prev+1)
    }, 250)
  }
  
  function calendar(){
    {show <= 2 && setShow(1)}
  }
  
  function handleTimeSlotClick(slot) {
    setButtonColor('#888888')
    time.length>0 && time.filter((item) => {
      if(slot && item.label === slot.label){
        setSelectedSlot(slot)
        setValueChange(slot)
        userTime = item.label
      }
    })

    setTimeout(() => {
      setShow(prev => prev+1)
    }, 500)
  }

  useEffect(() => {
    onValue(dates, function(snapshot){
      if(snapshot.exists()){
        let data = Object.entries(snapshot.val())
        data.filter((item) => {
          if(item[1].Date === userDate){
            setdocId(item[0])
            item[1].Slots.map((item) => {
            if(item.value === '0'){
              setTime(prev => [...prev, item])
            }
            })
          }
        })
      }
    })
  }, [selectedDate])


  function addphone(e){
    setButtonColor('#888888') 
    const input = e.target.value
    if(input.length <= 10){
      setNumber(e.target.value)
    }
  }

  function handleButtonClick(){
    setButtonColor('rgba(136, 136, 136, 0.5)')
    setShow(prev => prev+1)
  }
  
  
  function handleChange(e, index){
    const value = e.target.value;
    if (value.length > 1) {
        return;
    }

    setOtp((prevOtp) => {
        const newOtp = [...prevOtp];
        newOtp[index] = value;
        return newOtp
    })

    if (value && index < inputRefs.current.length - 1 && inputRefs.current[index + 1]) {
        inputRefs.current[index + 1].focus();
    }
  }

  function handleKeyDown(e,index){
      if (e.key === "Backspace" && !otp[index] && index > 0) {
          inputRefs.current[index - 1].focus();
      }
  }
  
  function confirm(){
    return(
      <div className='confirm'>
        <div className='confirm-content'>
          <h3>Consultation Confirmed!</h3>
          <p>Your OTP has been verified and an advisor will be contacting 
            you on the <span className='confirm-date'>
              {localStorage.getItem('date') ? localStorage.getItem('date') : arrangeDate}</span></p>
        </div>
        <FaCheckCircle className='confirm-check'/>
      </div>
    )
  }

  useEffect(() => {
    if(localStorage.getItem('id') === '1'){
      setChange(localStorage.getItem('id'))
    }
  
    else{    
      {(show === 6 && otpValue === validOtp) && 
        <div>
          {localStorage.setItem('id', '1')}
          {localStorage.setItem('date', arrangeDate)}
        </div>}
    }   
  }, [show])
  

  useEffect(() => {
    if (show === 6 && otpValue === validOtp){
      onValue(config, function(snapshot){
        if(snapshot.exists()){
          let data = Object.entries(snapshot.val())
          data.filter((item) => {
            if(selectedSlot.label && selectedSlot.label === item[0]){
              setPath(item[1])
              setShow(prev => prev+1)
            }
          })
        }
      }) 
    }
  }, [show])
  
  let address = 'Date/'+docId+'/Slots/'+path
  useEffect(() => {
    if(show === 7){
    
      onValue(ref(database, address), function(snapshot){
        if(snapshot.exists()){
          setValueChange(prev =>{
            return {
              ...prev,
              value: '1'
            }
          })           
        }
        setShow(prev => prev+1)
      }
      )  
    }
  }, [show])
  
  
  if(show === 8){
    update(ref(database, address), valueChange)
    setShow(prev => prev+1)
  }


  useEffect(() => {
    if (show === 6 && otpValue === validOtp) {
      let bookingData = {
        Date: userDate,
        Call_Time: selectedSlot.label,
        MobileNumber: number,
        TimeStamp: new Date().toLocaleTimeString(),
        Status: 'Open'
      }
      push(bookings, bookingData)
    } 
  }, [show])


  function generateRandomNumbers() {
    let numbers = '';
    for (let i = 0; i < 4; i++) {
      numbers += Math.floor(Math.random() * 10);
    }
    return numbers;
  }

  useEffect(() => {
    if(show === 4){
      const randomNumbers = generateRandomNumbers();
      setValidOtp(randomNumbers)
    }
  } , [show])

  const bp= 'Bootcamp Platform'

  useEffect(() => {
    if(show === 5){
      fetch('https://smsapi.edumarcsms.com/api/v1/sendsms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          apikey: 'clh7qacmj000cgdqx3uvyegfg',
          // apikey: 'cjlpehwde000tgdquc8avnz5l',
          senderId: 'EDUMRC',
          message: `Your ${bp} (Powered by Edumarc Technologies) OTP for verification is: ${validOtp}. Code is valid for 2 minutes. OTP is confidential, refrain from sharing it with anyone`,
          number: [`${number}`],
          templateId: '1707167291733893032'
        })
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
  }, [show, number])

  function goprev(){
    setShow(0)
    setTime([])
  }

  return (
    
    <div className={props.color ? 'talk blue-bg' : 'talk'}>
      <h1 className={props.color ? 'heading talk-heading head-blue' : 'heading talk-heading'}>Need to talk to someone?</h1>
      {!props.text ? <h2>Still not convinced? <span>Take a consultaion.</span></h2> : 
        <h2 className='doubts'>Have Doubts? <span>Talk to the instructor before joining!</span></h2>}

      <div className='talk-advisor'>
        <img src={advisor} alt='advisor picture'/>
        <p className='source-pro'>Talk to an advisor if you have any questions about the 
            bootcamp or the registration process!</p>
      </div>

      <div className='talk-section'>

        {show <= 3 && <p>Pick a time-slot for an advisor callback</p>}
        {show === 4 && <p>Enter your mobile number to reach you</p>}
        {show === 5 && <p>Enter your OTP</p>}

        {show === 6 && otpValue !== validOtp && 
          <div>
            {alert('Make sure to enter correct OTP')}
            {setShow(0)}
            {setTime([])}
            {setNumber('')}
            {setValidOtp('')}
            {setOtp(["", "", "", ""])}
          </div>}

        { show === 6 && otpValue === validOtp && 
        <div>
          {confirm()}
        </div>}

        {change === '1' && 
        <div>
          {confirm()}
        </div>}

      {change!== '1' && <div className='talk-time'>

        {/* INPUT TIME SLOT */}

        {show <= 3 && <input
        onChange={calendar}
        className='inp' 
        id='time' 
        type='calender' 
        placeholder='Select Time Slot'
        value={show === 3 ? arrangeDate || '' : ''}/>}

       

        {/* INPUT MOBILE NUMBER */}

        {show === 4 && <input 
        className='inp' 
        id='number' 
        type='text' 
        placeholder='Enter Mobile number'
        value={number}
        maxLength={10}
        onChange={addphone}/>}

        { show <= 4 && <label htmlFor='time'>{show === 4  ? <MdCallEnd className='call'/> : 
        <AiOutlineCalendar onClick={calendar} />}</label>}

        {/* OTP SECTION */}

        {show === 5 && <div className="otp">
          {otp.map((value, index) => (
            <input
              key={index}
              type="text"
              className="otp-input"
              maxLength={1}
              value={value}
              ref={(ref) => inputRefs.current.push(ref)}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          ))}
        </div>}

      </div>}

      {/* CALENDAR  */}
        
      {show === 1 && <Calendar
      onChange={handleDateChange} 
      value={selectedDate}
      maxDate={maxDate}
      minDate={minDate}
      className='calendar'/>}
      

      {/* TIME */}
        { show === 2 && <div className='times'>
          {time.length === 0 ? <h2>No slots available. Kindly select another date</h2> : <h2>Select Time</h2>}
          <div className="time-slots">
            {time.length>0 && time.map((slot) => (
              <button
                key={slot.id}
                value={slot.label}
                onClick={() => handleTimeSlotClick(slot)}
                className={selectedSlot && selectedSlot.id === slot.id ? 'active' : ''}
              >
                {slot.label}
            </button>
            ))}
          </div>
        </div>}

      {/* BUTTON SECTION  */}

        {change!== '1' && show <=3 && <button 
        className={props.color ? 'time-btn light-orange' : 'time-btn'} 
        style={{backgroundColor: buttonColor}}
        onClick={handleButtonClick}
        disabled={show<=2}>
          Continue
          </button>}

      {show === 4 && <button 
      className={props.color ? 'time-btn light-orange' : 'time-btn'} 
      style={{backgroundColor: buttonColor}}
      onClick={handleButtonClick}
      disabled={number.length!==10}>
        Get OTP
        </button>}

      {show === 5 && <button 
      className={props.color ? 'time-btn light-orange' : 'time-btn'} 
      style={{backgroundColor: buttonColor}}
      onClick={handleButtonClick}>
        Verify OTP
        </button>}

        <div id="sign-in-button"></div>
      </div>

      {show === 3 || show === 4 && <div className='prev-btn' onClick={goprev}>
        <GrFormPrevious />
        <p className='prev'>Go back</p>
      </div>}
    </div>
  )
}

