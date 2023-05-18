import React from 'react'
import starting from '../assets/4.png'
import { Link } from 'react-router-dom'

export default function StartingDate(props) {
  return (
    <div className={props.color ? 'starting blue-bg' :'starting'}>
      <h1 className={props.color ? 'heading starting-heading head-blue' : 'heading starting-heading'}>When is this starting?</h1>

      <div className={props.text ? 'starting-flex appear' : 'starting-flex'}>
        <div className={props.text ? 'starting-section appear-1' : 'starting-section'}>

          { props.color ? <h2>We have a Early bird discount available for you!</h2> :
            props.text ? <h2>Hooray! <span>First 20 seats are <span className='free-v2'>FREE</span></span></h2> : <h2>On the 20th of May! <span>We might even have some free seats for you!</span></h2>}

          {props.color ? <h2 className='starting-v2 starting-v3'><div>MRP: <strike>RS 21,000</strike><span className='text-red'>-76%</span></div><span className='free-v20'>RS 5,000</span></h2> :
          props.text? <h2 className='starting-v2'><div>MRP: <strike>RS 21,000</strike></div><span className='free-v20'>FREE</span></h2> : ''}
          <img src={starting} alt='picture of a handshake'/>
          {!props.text ? 
          <div className='date-flex'>
            <div className='dates'>
              <p className='source-pro'>Start Date:</p>
              <p className='source-pro'>End Date:</p>
              <p className='source-pro'>Duration:</p>
            </div>
            <div className='final-date'>
              <span>May 20, 2023</span>
              <span className='june'>June 20, 2023</span>
              <span>4 Weeks</span>
            </div> 
          </div>
           : 
            props.color ? (<Link to='/PaidForm'><button className='starting-btn-v2 orange-btn'>APPLY NOW!</button></Link>) :
            (<Link to='/FreeForm'><button className='starting-btn-v2'>APPLY NOW!</button></Link>)}

          {props.text ? <h2>See you on the 20th of May!</h2> : ''}
        </div>
        <img src={starting} alt='picture of a handshake'/>
      </div>
    </div>
  )
}
