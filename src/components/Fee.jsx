import React from 'react'
import { TiTick } from "react-icons/ti"
import { BsDot } from "react-icons/bs"
import { Link } from 'react-router-dom';

export default function Fee() {
  return (
    <div className='fee'>
       <h1 className='heading fee-heading'>Fee and Scholarships</h1>
       <h2>Your Journey Starts here!</h2>

        <div className='fee-section'>

            <section className='free'>
                    <h3>First Launch Offer</h3>

                    <div className='money'>
                        <h4><strike>₹21,000</strike><span>Free</span></h4>
                    </div>

                    <div className='free-content'>
                        <TiTick className='tick'/>
                        <p>Apply now and get a chance to 100% fee off by clearing an Interview.</p>
                    </div>
                    <div className='free-content'>
                        <TiTick className='tick'/>
                        <p>Applicable only for the first 30 Sign ups</p>
                    </div>

                    <Link to='/FreeForm'><button className='free-btn'>Apply for free seat</button></Link>
            </section>

            <section className='scholarship'>
                    <h3>Scholarship</h3>

                    <div className='money scholarship-money'>
                        <h4>Up to <span>100%</span></h4>
                    </div>

                    <div className='scholarship-content'>
                        <TiTick className='tick'/>
                        <p>This is a merit cum means scholarship focused on 
                            nurturing the bright talent.</p>
                    </div>
                    <div className='scholarship-content'>                      
                        <TiTick className='tick'/>
                        <p>Applicable for those with great academic record and 
                            belong to economically weaker section.</p>
                    </div>

                    <Link to='/ScholarshipForm'><button className='scholarship-btn'>Apply for Scholarship</button></Link>
            </section>

            <section className='paid'>
                    <h3>Standard</h3>

                    <div className='paid-money'>
                        <h4><strike>₹21,000</strike></h4>
                        <p>-76% OFF</p>
                    </div>
                    <h4>₹5,000</h4>

                    <div className='paid-content'>
                        <TiTick className='tick'/>
                        <p>This is a one time offer of 76% discount.</p>
                    </div>
                    <div className='paid-content'>
                        <TiTick className='tick'/>
                        <p>Lifetime membership to the The Bootcamp Community</p>
                    </div>
                    <div className='paid-content'>
                        <TiTick className='tick'/>
                        <p>Give your entrepreneurial dreams the wings to fly by applying today!</p>
                    </div>

                    <Link to='/PaidForm'><button className='paid-btn'>Apply Now</button></Link>
            </section>
        </div>

    </div>
  )
}
