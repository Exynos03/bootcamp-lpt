import React from 'react'
import { AiFillGithub,AiFillLinkedin } from "react-icons/ai";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { IoIosWifi } from "react-icons/io";

export default function Footer(props) {
  return (
    <div className='footer'>
      <div className='small-footer'>
        <a className='lpt-link' href='#home'><h1 className='footer-heading lpt'>The <span>Bootcamp</span> Platform</h1></a>

        {/* {props.text ? <div className='footer-info'>
          <h3>Home</h3>
          <h3>About Us</h3>
        </div> : ''} */}

        <p className='footer-mail'>Contact Us: <span>contact@thebootcampplatform.com</span></p>

        <div className='footer-icons'>
          <AiFillGithub className={props.color ? 'icons icon-blue' : 'icons'}/>
          <BsFacebook className={props.color ? 'icons icon-blue' : 'icons'}/>
          <AiOutlineTwitter className={props.color ? 'icons icon-blue' : 'icons'}/>
          <BsYoutube className={props.color ? 'icons icon-blue' : 'icons'}/>
          <AiFillLinkedin className={props.color ? 'icons icon-blue' : 'icons'}/>
          <IoIosWifi className={props.color ? 'icons wifi icon-blue' : 'icons'}/>
        </div>

        <p className='copyright'>© Copyright 2023 The Bootcamp Platform</p>
      </div>

      <div className='big-footer'>

        <div className='footer-flex'>
          <a className='lpt-link' href='#home'><h1 className='footer-heading lpt'>The <span>Bootcamp</span> Platform</h1></a>
          <div className='footer-icons'>
            <AiFillGithub className='icons'/>
            <BsFacebook className='icons'/>
            <AiOutlineTwitter className='icons'/>
            <BsYoutube className='icons'/>
            <AiFillLinkedin className='icons'/>
            <IoIosWifi className='icons wifi'/>
          </div>
        </div>

        <p className='footer-mail'>Contact Us: <span>contact@thebootcampplatform.com</span></p>
        <div className='footer-line'></div>
        <p className='copyright'>© Copyright 2023 The Bootcamp Platform</p>
      </div>
    </div>
  )
}
