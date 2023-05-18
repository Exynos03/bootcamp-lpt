import React from 'react'
import CountdownTimer from '../subcomponents/Timer'
import { Link } from 'react-router-dom'


export default function Caution(props) {
  return (
    <div className='caution-main'>
      <p className='caution caution-v2'>⚠️Applications closing soon⚠️ <span>Limited Seats</span></p>
      <p className='caution caution-v2 caution-visible'>⚠️ Limited to 20 seats ⚠️ <span>Applications for free seats are closing in</span></p>
      <CountdownTimer targetDate='2023-05-21T12:00:00Z'/>
      <Link to='/QuickForm'>
        <button className={props.color === 'blue' ? 'apply-btn apply-btn-v2 orange-btn' :'apply-btn apply-btn-v2'}>Apply Now</button>
      </Link>
    </div>
  )
}