import React, { useState } from 'react'
import { BiPlus } from "react-icons/bi";

export default function Question(props) {

    const[show, setShow] = useState(false)
    const[show2, setShow2] = useState(false)
    const[show3, setShow3] = useState(false)

    const bg ={
        backgroundColor: show ? '#CAC9EE' : '#FAF6FF',
        height: show ? '220px' : '130.6px',
        transition: 'all 0.6s ease'
    }

    const bg2 ={
        backgroundColor: show2 ? '#CAC9EE' : '#FAF6FF',
        height: show2 ? '220px' : '130.6px',
        transition: 'all 0.6s ease'
    }

    const bg3 ={
        backgroundColor: show3 ? '#CAC9EE' : '#FAF6FF',
        height: show3 ? '220px' : '130.6px',
        transition: 'all 0.6s ease'
    }

    function handleShow(){
        setShow(prev => !prev)
    }

    function handleShow2(){
        setShow2(prev => !prev)
    }

    function handleShow3(){
        setShow3(prev => !prev)
    }
  return (
    <div className={props.color ? 'qs blue' : 'qs'}>
      <h1 className={props.color ? 'heading qs-heading head-blue' : 'heading qs-heading'}>Frequently Asked Questions</h1>
      <h2 className={props.color ? 'text-blue' : ''}>Got any doubts?</h2>
      <h2 className='qs-visible'>Got any more doubts?</h2>

      <div className='doubts-section'>

        <section className='qs-1' style={bg}>
            <h3>01</h3>
            <div className='qs-1_content'>
                <h3>01</h3>
                <p>How can I get started?</p>

                <p className='qs-1-para'>I don't need a brand strategist but I need help executing an upcoming 
                campaign. Can we still work together?</p>

                {!show ? <BiPlus className='plus' onClick={handleShow}/> : 
                    <BiPlus className='cross' onClick={handleShow}/>}

            </div>
            {show && <p className='qs-1_para source-pro'>As a creative agency we work with 
            you to develop solutions to address your brand needs. That includes 
            various aspects of brand planning and strategy, marketing and design.</p>}
        </section>

        <section className='qs-2' style={bg2}>
            <h3>02</h3>
            <div className='qs-2_content'>
                <h3>02</h3>
                <p>How can I get started?</p>

                <p className='qs-2-para'>I don't need a brand strategist but I need help executing an upcoming 
                campaign. Can we still work together?</p>

                {!show2 ? <BiPlus className='plus' onClick={handleShow2}/> : 
                    <BiPlus className='cross' onClick={handleShow2}/>}

            </div>
            {show2 && <p className='qs-2_para source-pro'>As a creative agency we work with 
            you to develop solutions to address your brand needs. That includes 
            various aspects of brand planning and strategy, marketing and design.</p>}
        </section>

        <section className='qs-3' style={bg3}>
            <h3>03</h3>
            <div className='qs-3_content'>
                <h3>03</h3>
                <p>How can I get started?</p>

                <p className='qs-3-para'>I don't need a brand strategist but I need help executing an upcoming 
                campaign. Can we still work together?</p>

                {!show3 ? <BiPlus className='plus' onClick={handleShow3}/> : 
                    <BiPlus className='cross' onClick={handleShow3}/>}

            </div>
            {show3 && <p className='qs-3_para source-pro'>As a creative agency we work with 
            you to develop solutions to address your brand needs. That includes 
            various aspects of brand planning and strategy, marketing and design.</p>}
        </section>

      </div>
    </div>
  )
}
