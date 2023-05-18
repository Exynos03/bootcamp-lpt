import React from 'react'
import start from '../assets/start.png'
import vanessa from '../assets/vanessa.jpg'

export default function Start(props) {
  return (
    <div className={props.color ? 'start start-v2 blue' : 
      props.text ? 'start start-v2' : 'start'}>
      <h1 className={props.color ? 'heading start-heading head-blue' : 'heading start-heading'}>Where and when does it start?</h1>

      <div className={props.text ? 'flex-box sizing' : 'flex-box'}>
        <div className='start-content'>
          <h2 className={props.color ? 'text-blue' : ''}>Wherever you want to be!</h2>
          <img src={start} alt='woman working on laptop'/>

          <p className={props.color ? 'source-pro text-blue' :'source-pro'}>You will be able to participate from anywhere with 
            an <span>internet connection</span>, using your <span>computer or laptop</span>. 
            Throughout the program, and you will have the opportunity 
            to collaborate with other participants in virtual teams and 
            at the end of the bootcamp, we will organize an offline 
            presentation session, where you will have the opportunity to 
            showcase your product and pitch your startup idea</p>
          {props.text ? 
          <div className='date-flex date-flex-v2'>
            <div className='dates dates-v2'>
              <p className={props.color ? 'source-pro text-blue' : 'source-pro'}>Start Date:</p>
              <p className={props.color ? 'source-pro text-blue' : 'source-pro'}>End Date:</p>
              <p className={props.color ? 'source-pro text-blue' : 'source-pro'}>Duration:</p>
            </div>
            <div className='final-date final-date-v2'>
              <span className={props.color ? 'text-blue' : ''}>May 20, 2023</span>
              <span className={props.color ? 'june text-blue' : 'june'}>June 20, 2023</span>
              <span className={props.color ? 'text-blue' : ''}>4 Weeks</span>
            </div> 
          </div> : ''}
        </div>
          <img src={vanessa} alt='man working on laptop'/>
      </div>
    </div>
  )
}
