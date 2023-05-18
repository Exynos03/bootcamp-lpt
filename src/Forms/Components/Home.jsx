import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
    <Link to='/QuickForm'><button>Quick Form</button></Link>
    <Link to='/FreeForm'><button>Free Form</button></Link>
    <Link to='/PaidForm'><button>Paid Form</button></Link>\
    <Link to='/ScholarshipForm'><button>Scholarship Form</button></Link>
    </div>
  )
}

export default Home
