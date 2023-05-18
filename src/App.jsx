import React from "react"
import {Header, Apart, Learn, Start, Consider, Bootcamp, 
  Work, Concept, Getting, Instructor, StartingDate, Fee,
  Talk, Testimonials, Question, Footer, HeaderV2, Caution} from './index'

import OtherPage from "./subcomponents/OtherPage"

import { Routes, Route } from "react-router-dom"
import Bookings from "./subcomponents/Bookings"
import Slot from "./subcomponents/Slot"
import FreeForm from "./Forms/Components/FreeForm"
import ScholarshipForm from "./Forms/Components/ScholarshipForm"
import QuickForm from "./Forms/Components/QuickForm"
import PaidForm from "./Forms/Components/PaidForm"

  function AllComponents(){
    return (
      <div className="container">
        <Header />
        <Apart />
        <Learn />
        <Start />
        <Consider />
        <Bootcamp />
        <Work />
        <Concept />
        <Getting />
        <Instructor />
        <StartingDate />
        <Fee />
        <Talk />
        <Testimonials />
        <Question />
        <Footer />
      </div>
    )
  }

  function Version2(){
    return (
      <div className="container">
        <HeaderV2 />
        <Apart text='Who should join?'/>
        <Caution />
        <Bootcamp />
        <Learn />
        <Concept text='Syllabus'/>
        <Getting text='getting'/>
        <Start text='date'/>
        <StartingDate text='Hooray! First 20 seats are free!'/>
        <Instructor text='Instructor'/>
        <Talk text='talk'/>
        <Testimonials text='Check what we’ve been upto'/>
        <Question />
        <Footer text='home'/>
        {/* <Consider />
        <Work />
        <Fee /> */}
      </div>
    )
  }

  function Version3(){
    return (
      <div className="container">
        <HeaderV2 color='blue'/>
        <Apart text='Who should join?' color='blue'/>
        <Caution color='blue'/>
        <Bootcamp color='blue'/>
        <Learn color='blue'/>
        <Concept text='Syllabus' color='blue'/>
        <Getting text='getting' color='blue'/>
        <Start text='date' color='blue'/>
        <StartingDate text='Hooray! First 20 seats are free!' color='blue'/>
        <Instructor text='Instructor' color='blue'/>
        <Talk text='talk' color='blue'/>
        <Testimonials text='Check what we’ve been upto' color='blue'/>
        <Question color='blue'/>
        <Footer text='home' color='blue'/>
        {/* <Consider />
        <Work />
        <Fee /> */}
      </div>
    )
  }

function App() {

  return (
      <Routes>
        <Route path='/' element={<AllComponents />}/>
        <Route path='/ds' element={<OtherPage />}/>
        <Route path='/v2' element={<Version2 />}/>
        <Route path='/v3' element={<Version3 />}/>
        <Route path='/bookings' element={<Bookings />}/>
        <Route path='/slots' element={<Slot />}/>
        <Route path='/QuickForm' element={<QuickForm />}/>
        <Route path='/FreeForm' element={<FreeForm />}/>
        <Route path='/PaidForm' element={<PaidForm />}/>
        <Route path='/ScholarshipForm' element={<ScholarshipForm />}/>
      </Routes>
  )
}

export default App
