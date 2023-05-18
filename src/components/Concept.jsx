import React, {useState, useEffect, useRef} from 'react'
import networking from '../icons/networking.svg'
import analysis from '../icons/analysis.svg'
import brainstorming from '../icons/brainstorming.svg'
import presentation from '../icons/presentation.svg'
import nocode from '../icons/nocode.svg'
import roadmap from '../icons/roadmap.svg'
import problemsolving from '../icons/problemsolving.svg'
import solution from '../icons/solution.svg'
import writing from '../icons/writing.svg'
import pitch from '../icons/pitch.svg'
import placeholder from '../assets/ImagePlaceholder.png'

export default function Concept(props) {

  return (
    <div className={props.color ? 'concept concept-v2 blue' : 
        props.text ? 'concept concept-v2' : 'concept'}>

      <h1 className={props.color ? 'heading concept-heading head-blue' : 'heading concept-heading'}>{props.text ? props.text : 'Who is this bootcamp for?'}</h1>
      <h2 className={props.color ? 'text-blue' : ''}>What’re we learning at this bootcamp?</h2>

      <div className='concept-section'>

        <section className='concept-1'>
            <div className='concept-design-visible'>
                <div className='concept-circle'/>   
                <div className='concept-line'/>
            </div>
            <div className={props.text ? 'c-1 white' : 'c-1'}>
                <h1 className={props.color ? 'text-blue' : ''}>Phase 1 <span>Introduction</span></h1>
                <div className='concept-design'>
                    <div className='concept-circle'/>   
                    <div className='concept-line'/>
                </div>
                <h3 className={props.color ? 'text-blue' : ''}>Duration : 1 week</h3>
                <p className={props.color ? 'text-blue' : ''}>Key Skills :</p>

                <div className='skills'>
                    <div className={props.color ? 'skill-1 blue-bg' : 'skill-1'}>
                        <img src={networking}/>
                        <p>Networking</p>
                    </div>

                    <div className={props.color ? 'skill-2 blue-bg' : 'skill-2'}>
                        <img src={pitch}/>
                        <p>Elevator Pitch</p>
                    </div>
                </div>

                <p className={props.color ? 'concept-para source-pro text-blue' : 'concept-para source-pro'}>Amet minim mollit non deserunt ullamco est sit aliqua dolor 
                    do amet sint. Velit officia consequat duis enim velit mollit. 
                    Exercitation veniam consequat sunt nostrud amet. Est sit aliqua 
                    dolor do amet sint.</p>
            </div>
            <img src={placeholder} className='c-1-img'/>
        </section>

        <section className='concept-2'>
            <div className='concept-design-visible'>
                <div className='concept-circle'/>   
                <div className='concept-line concept-2_line'/>
            </div>
            <div className={props.text ? 'c-2 white' : 'c-2'}>
                <h1 className={props.color ? 'text-blue' : ''}>Phase 2 <span>Concept Building</span></h1>
                <div className='concept-design'>
                    <div className='concept-circle'/>   
                    <div className='concept-line concept-2_line'/>
                </div>
                <h3 className={props.color ? 'text-blue' : ''}>Duration : 1 week</h3>
                <p className={props.color ? 'text-blue' : ''}>Key Skills :</p>

                <div className='skills'>
                    <div className={props.color ? 'skill-1 blue-bg' : 'skill-1'}>
                        <img src={analysis}/>
                        <p>Data Analysis</p>
                    </div>

                    <div className={props.color ? 'skill-2 blue-bg' : 'skill-2'}>
                        <img src={presentation}/>
                        <p>Presentation</p>
                    </div>

                    <div className={props.color ? 'skill-3 blue-bg' : 'skill-3'}>
                        <img src={writing}/>
                        <p>Art of Writing</p>
                    </div>
                </div>

                <p className={props.color ? 'concept-para source-pro text-blue' : 'concept-para source-pro'}>Amet minim mollit non deserunt ullamco est sit aliqua dolor 
                    do amet sint. Velit officia consequat duis enim velit mollit. 
                    Exercitation veniam consequat sunt nostrud amet. Est sit aliqua 
                    dolor do amet sint.</p>
            </div>
            <img src={placeholder} className='c-2-img'/>
        </section>

        <section className='concept-3'>
            <div className='concept-design-visible'>
                <div className='concept-circle'/>   
                <div className='concept-line concept-3_line'/>
            </div>
            <div className={props.text ? 'c-3 white' : 'c-3'}>
                <h1 className={props.color ? 'text-blue' : ''}>Phase 3 <span>Opportunity Identification & Execution</span></h1>
                <div className='concept-design'>
                    <div className='concept-circle'/>   
                    <div className='concept-line concept-3_line'/>
                </div>
                <h3 className={props.color ? 'text-blue' : ''}>Duration : 1 week</h3>
                <p className={props.color ? 'text-blue' : ''}>Key Skills :</p>

                <div className='skills'>
                    <div className={props.color ? 'skill-1 blue-bg' : 'skill-1'}>
                        <img src={problemsolving}/>
                        <p>Problem Identification</p>
                    </div>

                    <div className={props.color ? 'skill-2 blue-bg' : 'skill-2'}>
                        <img src={brainstorming}/>
                        <p>Brainstorming</p>
                    </div>

                    <div className={props.color ? 'skill-3 blue-bg' : 'skill-3'}>
                        <img src={solution}/>
                        <p>Solutioning</p>
                    </div>
                </div>

                <p className={props.color ? 'concept-para source-pro text-blue' : 'concept-para source-pro'}>Amet minim mollit non deserunt ullamco est sit aliqua dolor 
                    do amet sint. Velit officia consequat duis enim velit mollit. 
                    Exercitation veniam consequat sunt nostrud amet. Est sit aliqua 
                    dolor do amet sint.</p>
            </div>
            <img src={placeholder} className='c-3-img'/>
        </section>

        <section className='concept-4'>
            <div className='concept-design-visible'>
                <div className='concept-line concept-4_line'/>
                <div className='concept-circle'/>   
            </div>
            <div className={props.text ? 'c-4 white' : 'c-4'}>
                <h1 className={props.color ? 'text-blue' : ''}>Phase 4 <span>Hands on Training on No Code Tools</span></h1>
                <div className='concept-design'>
                    <div className='concept-line concept-4_line'/>
                    <div className='concept-circle'/>   
                </div>
                <h3 className={props.color ? 'text-blue' : ''}>Duration : 1 week</h3>
                <p className={props.color ? 'text-blue' : ''}>Key Skills :</p>

                <div className='skills'>
                    <div className={props.color ? 'skill-1 blue-bg' : 'skill-1'}>
                        <img src={roadmap}/>
                        <p>Product Roadmap</p>
                    </div>

                    <div className={props.color ? 'skill-2 blue-bg' : 'skill-2'}>
                        <img src={nocode}/>
                        <p>No Code Tools</p>
                    </div>
                </div>

                <p className={props.color ? 'concept-para source-pro text-blue' : 'concept-para source-pro'}>Amet minim mollit non deserunt ullamco est sit aliqua dolor 
                    do amet sint. Velit officia consequat duis enim velit mollit. 
                    Exercitation veniam consequat sunt nostrud amet. Est sit aliqua 
                    dolor do amet sint.</p>
            </div>
            <img src={placeholder} className='c-4-img'/>
        </section>

      </div>
    </div>
  )
}
