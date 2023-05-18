import React, {useState, useEffect, useCallback} from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
// import { RxCross2 } from "react-icons/rx"
import { BiPlus } from "react-icons/bi"


export default function Navbar(props) {
  const [toggle, setToggle] = useState(false)

  useEffect(() => {

    const primaryHeader = document.querySelector('.nav-v2')
    const scrollWatcher = document.createElement('div')
  
    scrollWatcher.setAttribute('data-scroll-watcher', '')
    if(primaryHeader){
      primaryHeader.before(scrollWatcher)
    }

    const navObserver = new IntersectionObserver((entries) => {
      primaryHeader.classList.toggle('sticking', !entries[0].isIntersecting)
    })

    navObserver.observe(scrollWatcher)
  } , [])


    
  function handleChange(){
    setToggle(prev => !prev)
    
  }

  const slide ={
    inset: !toggle ? '1% 0 68% 100%' : '1% 0.5% 68% 70%',
  }

  useEffect(() => {
    if (toggle) {
      document.documentElement.classList.add('black-bg')
    } else {
      document.documentElement.classList.remove('black-bg')
    }
  }, [toggle])



  return (
    <div className={props.text ? 'navbar' : 'navbar nav-v2'}>
        <h3 className='lpt-v2'>The <span>Bootcamp</span> Platform</h3>
        <div className='nav-items'>
              <ul className='list-items' style={slide}>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Pricing</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Contact</a></li>
              </ul>
        </div>

        {!props.burger ? '' : 
          !toggle ? <GiHamburgerMenu className='burger' onClick={() => handleChange()}/> : 
          <BiPlus className='open-up' style={{color: '#000000'}} onClick={() => handleChange()}/>}
    </div>
    
  )
}
