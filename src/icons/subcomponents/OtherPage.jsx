import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { AiOutlineCalendar } from "react-icons/ai";


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://landing-page-c8e30-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const dates = ref(database, "Date")

const timeSlots = [
  { id: 1, label: '10:00', value: '0' },
  { id: 2, label: '10:30', value: '0' },
  { id: 3, label: '11:00', value: '0' },
  { id: 4, label: '11:30', value: '0' },
  { id: 5, label: '12:00', value: '0' },
  { id: 6, label: '12:30', value: '0' },
  { id: 7, label: '13:00', value: '0' },
  { id: 8, label: '13:30', value: '0' },
  { id: 9, label: '14:00', value: '0' },
  { id: 10, label: '14:30', value: '0'},
  { id: 11, label: '15:00', value: '0'},
  { id: 12, label: '15:30', value: '0'},
  { id: 13, label: '16:00', value: '0'},
  { id: 14, label: '16:30', value: '0'},
  { id: 15, label: '17:00', value: '0'},
  { id: 16, label: '17:30', value: '0'},
  { id: 17, label: '18:00', value: '0'},
  { id: 18, label: '18:30', value: '0'},
]

export default function OtherPage() {
  const [date, setDate] = useState('')
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [show, setShow] = useState(false)

  function formatDate(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    return `${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}`;
  }

  function handleSubmit(){
    const slots = timeSlots.map((slot) => ({ label: slot.label, value: slot.value }));
    const dataObject = {
      Date: date,
      Slots: slots,
    }
    push(dates, dataObject)
    setDate('')
  }

  
  function handleDateChange(date){
    const slots = timeSlots.map((slot) => ({ id:slot.id, label: slot.label, value: slot.value }));
    const dataObject = {
      Date: formatDate(date),
      Slots: slots,
    }
    push(dates, dataObject)
    setSelectedDate(formatDate(date))
  }

  function handleTimeChange(e){
    setDate(e.target.value)
  }

  function handleShow(){
    setShow(prev => !prev)
  }

  return (
    <div className='date-setter'>
      <div className='talk-time'>
            <input 
            id='time' 
            type='text' 
            placeholder='Select Time Slot'
            value={date}
            onChange={handleTimeChange}
            />
            <label htmlFor='time'>{<AiOutlineCalendar onClick={handleShow}/>}</label>
      </div>
      {show && <Calendar 
        style={{color: '#000'}}
        onChange={handleDateChange} 
        value={selectedDate}
        className='calendar-other'/>}

      <button onClick={handleSubmit}>Add Date</button>
  </div>
  )
}
