import React from 'react'
import vikas from '../assets/3.png'

export default function Instructor(props) {
  return (
    <div className={props.color ? 'instructor blue' : 'instructor'}>
      <h1 className={props.color ? 'heading instruct-heading head-blue' :'heading instruct-heading'}>Meet your Instructors</h1>

      <div className={props.text ? 'instruct-flex direction' : 'instruct-flex'}>
        <div className='instruct-section'>
          <h2 className={props.color ? 'text-blue' : ''}>Vikas Meena</h2>
          <img src={vikas} alt='picture of Vikas Meena'/>
          <p className={props.color ? 'source-pro text-blue' : 'source-pro'}>Launch yourself into the startup world alongside 
          experienced entrepreneurs and ambitious teenagers like yourself! Connect safely 
          from home with your future co founders and join our workshops, remote challenges 
          and online activities.</p>
        </div>
        <img src={vikas} alt='picture of Vikas Meena'/>
      </div>
    </div>
  )
}
