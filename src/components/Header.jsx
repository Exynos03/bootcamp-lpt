import React from 'react'
import Navbar from '../subcomponents/Navbar'
import CountdownTimer from '../subcomponents/Timer'
import { Link } from 'react-router-dom'
import '../App.css';

export default function Header() {
  return (
    <div className='header' id='home'>
      <Navbar />
      <h1 className='head-title'>Get your start-up off 
      the ground before you graduate</h1>
      <p className='caution'>⚠️Limited to 30 seats⚠️ <span>Applications for free seats are closing in</span></p>
      <CountdownTimer targetDate='2023-05-23T12:00:00Z'/>
      <Link to='/QuickForm'><button className='apply-btn'>Apply Now</button></Link>
    </div>
  )
}
