import React from 'react'
import work from '../assets/4.png'
import { HiLocationMarker } from "react-icons/hi";
import { Link } from 'react-router-dom';

export default function Work() {
  return (
    <div className='work'>
      <h1 className='heading work-heading'>How does it work?</h1>

      <div className='work-section-1'>
        <h2>Great! So how can i get started on this?</h2>
        <p>You can get started by following the registration instructions below</p>

        <div className='work-section'>

            <section className='work-1'>

                <div className='work-design'>
                    <div className='circle' />
                    <div className='line' />
                </div>

                <div className='work-content'>
                    <h1>Step 1</h1>
                    <img src={work} alt=''/>
                    <p className='source-pro' >Amet minim mollit non deserunt ullamco est sit 
                        aliqua dolor do amet sint. Velit officia consequat 
                        duis enim velit mollit. Exercitation veniam consequat.</p>
                </div>
            </section>

            <section className='work-2'>

                <div className='work-design'>
                    <div className='circle work-2_circle' />
                    <div className='line work-2_line' />
                </div>

                <div className='work-content'>
                    <h1 style={{color: '#FFFFFF'}}>Step 2</h1>
                    <img src={work} alt='' style={{backgroundColor: '#1E1E1E'}}/>
                    <p  className='source-pro' style={{color: '#FFFFFF'}}>Amet minim mollit non deserunt ullamco est sit 
                        aliqua dolor do amet sint. Velit officia consequat 
                        duis enim velit mollit. Exercitation veniam consequat.</p>
                </div>
            </section>

            <section className='work-3'>

                <div className='work-design'>
                    <div className='line work-3_line' />
                    <div className='circle work-3_circle' />
                </div>

                <div className='work-content'>
                    <h1>Step 3</h1>
                    <img src={work} alt=''/>
                    <p className='source-pro' >Amet minim mollit non deserunt ullamco est sit 
                        aliqua dolor do amet sint. Velit officia consequat 
                        duis enim velit mollit. Exercitation veniam consequat.</p>
                    <Link to='/QuickForm' className='work-btn-link'><h3 className='work-btn'>Apply Now</h3></Link>
                </div>
            </section>
        </div>
      </div>

      <div className='work-section-2'>
            <h2>Great! So how can i get started on this?</h2>
            <p>You can get started by following the registration instructions below</p>

            <div className='work-slider'>
                <section className='work-visible'>
                    <h1>Step 1</h1>

                    <div className='work-design work-design-first'>
                        <HiLocationMarker className='marker first-marker' />
                        <div className='line first-line' />
                    </div>

                    <img src={work} alt=''/>
                    <p className='source-pro' >Amet minim mollit non deserunt ullamco est sit 
                        aliqua dolor do amet sint. Velit officia consequat 
                        duis enim velit mollit. Exercitation veniam consequat.</p>
                </section>

                <section className='work-visible'>
                    <h1>Step 2</h1>

                    <div className='work-design'>
                        <HiLocationMarker className='marker middle-marker' />
                        <div className='line  middle-line' />
                    </div>

                    <img src={work} alt=''/>
                    <p className='source-pro' >Amet minim mollit non deserunt ullamco est sit 
                        aliqua dolor do amet sint. Velit officia consequat 
                        duis enim velit mollit. Exercitation veniam consequat.</p>
                </section>

                <section className='work-visible'>
                    <h1>Step 3</h1>

                    <div className='work-design work-design-last'>
                        <div className='line last-line' />
                        <HiLocationMarker className='marker last-marker' />
                    </div>

                    <img src={work} alt=''/>
                    <p className='source-pro' >Amet minim mollit non deserunt ullamco est sit 
                        aliqua dolor do amet sint. Velit officia consequat 
                        duis enim velit mollit. Exercitation veniam consequat.</p>
                </section>

            </div>
      </div>
    </div>
  )
}

