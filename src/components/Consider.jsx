import React from 'react'
import gossip from '../assets/7.png'
import reading from '../assets/2.png'
import austin from '../assets/austin.jpg'

export default function Consider() {
  return (
    <div className='consider'>
      <h1 className='heading consider-heading'>Why should I consider this bootcamp?</h1>

      <div className='consider-content'>
        <h2>So what can I expect from the course?</h2>

        <section className='consider-section-1'>
          <img src={gossip} alt='picture of beer,books and laptop on table'/>

          <p className='source-pro'>The bootcamp aims to build an entrepreneurial mindset by 
              providing you with the knowledge, skills, and resources to 
              navigate the challenges of entrepreneurship. </p>
        </section>

        <section className='consider-section-2'>
          <img src={reading} alt='picture of a man reading multiple flowcharts'/>

          <p className='source-pro'>Through the activities, mentorship, and networking opportunities, 
              you will learn to think creatively, identify opportunities, and 
              develop a growth-oriented mindset. </p>
        </section>
      </div>

      <div className='consider-content-2'>

        <div className='consider-1'>
          <div>
            <h2 className='consider-1-h2'>So what can I expect from the course?</h2>
            <p className='source-pro consider-1-p'>The bootcamp aims to build an entrepreneurial mindset by 
                providing you with the knowledge, skills, and resources to 
                navigate the challenges of entrepreneurship. </p>
          </div>

          <section className='consider-section-1'>
            <img src={gossip} alt='picture of beer,books and laptop on table'/>

            <p className='source-pro'>The bootcamp aims to build an entrepreneurial mindset by 
                providing you with the knowledge, skills, and resources to 
                navigate the challenges of entrepreneurship. </p>
          </section>
        </div>

        <div className='consider-2'>
          <section className='consider-section-2'>
            <img src={austin} alt='picture of a man reading multiple flowcharts' className='austin'/>

            <p className='source-pro'>Through the activities, mentorship, and networking opportunities, 
                you will learn to think creatively, identify opportunities, and 
                develop a growth-oriented mindset. </p>
          </section>
        </div>

      </div>

    </div>
  )
}
