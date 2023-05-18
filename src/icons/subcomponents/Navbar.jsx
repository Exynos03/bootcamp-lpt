import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar(props) {
  return (
    <div className='navbar'>
      <h3 className='lpt'>The <span>Bootcamp</span> Platform</h3>
      {!props.burger ? '' : <GiHamburgerMenu className='burger'/>}
    </div>
  )
}
