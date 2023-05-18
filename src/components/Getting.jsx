import React from 'react'
import project from '../assets/7.png'
import austin from '../assets/austin.jpg'
import seed from '../assets/5.png'

export default function Getting(props) {
  return (
    <div className={props.color ? 'getting getting-v2 blue-bg' : 
      props.text ? 'getting getting-v2' : 'getting'}>
      <h1 className={props.color ? 'heading getting-heading text-grey' : 'heading getting-heading'}>What else are you getting?</h1>
      <h2 className={props.color ? 'text-grey' : ''}>So what can I expect from the course?</h2>

      <section className={props.text ? 'getting-1 getting-mobile' : 'getting-1'}>
        <img src={project} alt=''/>
        <div className={props.text ? 'getting-1_content black' : 'getting-1_content'}>
            <h3 className={props.color ? 'text-grey' : ''}>Projects for you to work on</h3>
            <p className={props.color ? 'source-pro text-grey' : 'source-pro'}>The bootcamp teaches participants how 
                to use online tools to create a no-code 
                alternative for building and growing their 
                startup idea efficiently and also automating 
                aspects of the business.</p>
        </div>
      </section>

      <section className={props.text ? 'getting-2 getting-mobile' : 'getting-2'}>
        <img src={austin} alt=''/>
        <div className={props.text ? 'getting-2_content black' : 'getting-2_content'}>
            <h3 className={props.color ? 'text-grey' : ''}>Activities</h3>
            <p className={props.color ? 'source-pro text-grey' : 'source-pro'}>The bootcamp will involve various activities 
                such as Elevator Pitch where you will practice 
                succinctly presenting your idea. Group discussions 
                where you will collaborate and learn from your peers. 
                On-ground user interviews and online surveys for market 
                research. Essay writing and reflective assignments to 
                refine your understanding and learning. You will also 
                have opportunities to find a co-founder and present your 
                idea in front of investors.</p>
        </div>
      </section>

      <section className={props.text ? 'getting-3 getting-mobile' : 'getting-3'}>
        <img src={project} alt=''/>
        <div className={props.text ? 'getting-3_content black' : 'getting-3_content'}>
            <h3 className={props.color ? 'text-grey' : ''}>Opportunities</h3>
            <p className={props.color ? 'source-pro text-grey' : 'source-pro'}>The bootcamp offers various opportunities such as one-on-one 
              mentoring to receive personalized guidance, networking to 
              connect with other entrepreneurs and investors, and access 
              to a community of like-minded individuals. You will also have 
              the chance to find potential co-founders for your startup idea. 
              These opportunities can help you build valuable connections and 
              receive support throughout your entrepreneurial journey.</p>
        </div>
      </section>

      <div className={props.color ? 'getting-footer blue-bg' :'getting-footer'}>
        <h2>And that’s not all!</h2>
        <h2 className='getting-h2-visible'>Seed Funding</h2>

        <section className='getting-footer_section'>
        <img src={seed} alt=''/>
        <div className='getting-footer_content'>
            <h3>Get your startup the seed fund it requires!</h3>
            <h3 className='getting-footer-visible'>And that’s not all!</h3>
            <p className='source-pro'>Amet minim mollit non deserunt ullamco est sit aliqua 
              dolor do amet sint. Velit officia consequat duis enim 
              velit mollit. Exercitation veniam consequat sunt nostrud amet. 
              Est sit aliqua dolor do amet sint.</p>
        </div>
      </section>
      </div>
    </div>
  )
}
