import React from 'react'
import Home from './components/Home/Home'
import JobList from './components/Job Board/JobList'
import HiringForm from './components/HiringForm/HiringForm'


const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <Home />
      <JobList />
      <HiringForm />
      
    </div>
  )
}

export default HomePage