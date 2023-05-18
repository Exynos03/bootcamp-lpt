import React from 'react'
import student from '../assets/Ellipse.png'

export default function Testimonials(props) {
  return (
    <div className={props.color ? 'test blue' : 'test'}>
      <h1 className={props.color ? 'heading test-heading head-blue' : 'heading test-heading'}>{props.color ?  'Look at what we’ve done' : 
        props.text ?  props.text : 'Testimonials'}</h1>

      <h1 className={props.color ? 'heading test-heading test-visible head-blue' : 'heading test-heading test-visible'}>
        {props.color ? 'Look at what we’ve done' : 
        props.text ? 'Check what we’ve been upto' : 'What you’ll learn'}</h1>

      {props.text ? <h2 className={props.color ? 'test-v2 text-blue' : 'test-v2'}>Check out our Work in Progress ideas!</h2> : 
        <h2>Here’s what our students have to say!</h2>}

      <div className='test-section'>

        <section className='test-1'>
            <h3>It is a long established fact </h3>
            <div className='test-1_content'>
                <img src={student} alt='picture of a student'/>
                <div className='test-line'/>
                <p className='source-pro'>It is a long established fact that a reader will be 
                    distracted by the readable content of a page when 
                    looking at its layout.</p>
            </div>
            <p>Lora Smith </p>
        </section>

        <section className='test-2'>
            <h3>It is a long established fact </h3>
            <div className='test-2_content'>
                <img src={student} alt='picture of a student'/>
                <div className='test-line'/>
                <p className='source-pro'>It is a long established fact that a reader will be 
                    distracted by the readable content of a page when 
                    looking at its layout.</p>
            </div>
            <p>Lora Smith </p>
        </section>

        <section className='test-3'>
            <h3>It is a long established fact </h3>
            <div className='test-3_content'>
                <img src={student} alt='picture of a student'/>
                <div className='test-line'/>
                <p className='source-pro'>It is a long established fact that a reader will be 
                    distracted by the readable content of a page when 
                    looking at its layout.</p>
            </div>
            <p>Lora Smith </p>
        </section>

      </div>
      {props.text ? <p className={props.color ? 'test-para-v2 text-blue' : 'test-para-v2'}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit 
        officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p> : ''}
    </div>
  )
}
