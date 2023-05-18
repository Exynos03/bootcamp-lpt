import React from 'react'
import learning from '../assets/5.png'

export default function Learn(props) {
  return (
    <div className={props.color ? 'knowledge blue-bg' : 'knowledge'}>
      <h1 className={props.color ? 'heading knowledge-heading head-blue' : 'heading knowledge-heading'}>What you’ll learn</h1>

      <div className='knowledge-content'>
        <div className='learn-content'>
          <h2>Learn more than just the fundamentals</h2>
          <img src={learning} alt='laptop pictures on a table'/>  
          <p className='source-pro'>The bootcamp may offer the opportunity to pitch your startup 
            idea to seed investors, who can potentially provide you with 
            funding of up to $250,000. The program will be providing you 
            with the guidance and support you will need in creating a strong 
            pitch deck that can effectively get your ideas and vision of the 
            product to your future investors.</p>
        </div>
        <div className='learn-img'>
          <img src={learning} alt='laptop pictures on a table'/>  
        </div>
      </div>

    </div>
  )
}

