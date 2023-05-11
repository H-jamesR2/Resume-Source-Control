import React from 'react'
import TopNav2 from '../components/TopNav2'
import NavBar from '../components/Navbar'
import FieldResumeList from '../componentsDB/FieldResumeList'

const FieldResumes = () => {
  return (
    <div>
      <TopNav2/>
        <div className="page-wrapper">
            <NavBar/>
            <div className="main-content">
      
      <h1>Field Resumes...</h1>
      <FieldResumeList/>
        

      
      {/* <h1>Contact</h1>

      <h1>Education</h1>

      <h1>Projects</h1>

      <h1>Jobs</h1>

      <h1>Extracurriculars</h1>

      <h1>Skills</h1> */}

     
      </div>
      </div>
    </div>
  )
}

export default FieldResumes
