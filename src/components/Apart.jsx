import React from 'react'
import graduate from '../assets/6.png'
import action from '../assets/7.png'
import coding from '../assets/8.png'
import rizwan from '../assets/rizwan.jpg'

export default function Apart(props) {
  return (
    <div className={props.color === 'blue' ? 'apart apart-v2 blue' : 
      props.text ? 'apart apart-v2' : 'apart'}>

      <h2 className={props.color === 'blue' ? 'heading apart-heading head-blue' : 'heading apart-heading'}>
        {props.text ? props.text: 'What sets us apart?'}
      </h2>

      <div className='apart-section'>

        <section className={props.color === 'blue' ? 'section-1 blue-bg' : 'section-1'}>
          <p className='highschool'>I just
          &nbsp; {props.text ? <span className='v2-green'>finished highschool,</span> : 'finished highschool,'} 
          {!props.text? <>&nbsp;</> : ''} Is this for me? <span>Absolutely!</span></p>

          <img src={props.text ? rizwan : graduate} alt='graduate'/>
        </section>

        <section className={props.color === 'blue' ? 'section-2 blue-bg' : 'section-2'}>
        <p className='learn'>Learn by {props.text ? <span className='v2-purple'>Action,</span> : 'Action,'}<span>Not by Listening</span> </p>
            <img src={action} alt='action'/>
        </section>

        <section className={props.color === 'blue' ? 'section-3 blue-bg' : 'section-3'}>
            <p className='code'>Coding isn't your thing? <span>Not a problem</span></p>
            <img src={coding} alt='coding'/>
        </section>

      </div>
    </div>
  )
}
