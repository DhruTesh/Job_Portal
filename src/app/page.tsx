import React from 'react'
import Home from './components/Home/Home'
import JobList from './components/Job Board/JobList'


const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <Home />
      <JobList/>
      
    </div>
  )
}

export default HomePage