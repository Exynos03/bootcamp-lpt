import React from 'react'
import NavbarV2 from '../subcomponents/NavbarV2'


export default function HeaderV2(props) {
  return (
    <div className={props.color === 'blue' ? 'header header-v2 header-v30' : 'header header-v2'} id='home'>
      <NavbarV2 burger='burger'/>
      <h1 className='head-title head-v2'>Get your <span className={props.color === 'blue' ? 'orange' : ''}>start-up off</span> the ground before college</h1>
    </div>
  )
}
