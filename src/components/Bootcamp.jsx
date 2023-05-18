import React from 'react'
import bootcamp from '../assets/jeshoots.jpg'

export default function Bootcamp(props) {
  return (
    <div className={props.color === 'blue' ? 'bootcamp blue' : 'bootcamp'}>
      <h1 className={props.color ? 'heading bootcamp-heading head-blue' : 'heading bootcamp-heading'}>Who is this bootcamp for?</h1>

      <div className='flex-box bootcamp-box'>
        <div className='bootcamp-content'>
          <h2>Is this Bootcamp for me?</h2>
          <img src={bootcamp} alt='A girl biting pen and focusing on laptop'/>
          
          <p className={props.color ? 'source-pro text-blue' : 'source-pro'}>Launch yourself into the startup world alongside experienced 
            entrepreneurs and ambitious teenagers like yourself! Connect 
            safely from home with your future co founders and join our workshops, 
            remote challenges and online activities.</p>

        </div>
        <img src={bootcamp} alt='A girl biting pen and focusing on laptop'/>
      </div>
    </div>
  )
}
