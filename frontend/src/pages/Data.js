import React from 'react'
import ContactList from '../componentsDB/ContactList'
import EducationList from '../componentsDB/EducationList'
import ProjectList from '../componentsDB/ProjectList'
import JobList from '../componentsDB/JobList'
import ExtracurricularList from '../componentsDB/ExtracurricularList'
import TopNav2 from '../components/TopNav2'
import NavBar from '../components/Navbar'
import SkillList from '../componentsDB/SkillLlist'
import AddContact from '../componentsDB/AddContact'
import AddProject from '../componentsDB/AddProject'
import AddJob from '../componentsDB/AddJob'
import AddExtracurricular from '../componentsDB/AddExtracurricular'
import AddEducation from '../componentsDB/AddEducation'
import AddSkill from '../componentsDB/AddSkill'
import AddFieldResume from '../componentsDB/AddFieldResume'

const Data = () => {
  return (
    <div>
        <TopNav2/>
        <div className="page-wrapper">
            <NavBar/>
            <div className="main-content">
      
      <h1>Blocks...</h1>
      
      <h1>Contact</h1>
      <ContactList/>
      <AddContact/>

      <h1>Education</h1>
      <EducationList/>
      <AddEducation/>
      
      <h1>Projects</h1>
      <ProjectList/>
      <AddProject/>

      <h1>Jobs</h1>
      <JobList/>
      <AddJob/>

      
      <h1>Extracurriculars</h1>
      <ExtracurricularList/>
      <AddExtracurricular/>


      <h1>Skills</h1>
      <SkillList/>
      <AddSkill/>

      <h1>Field Resumes</h1>
      {/* <SkillList/> */}
      <AddFieldResume/>

      </div>
      </div>
      

    </div>
  )
}

export default Data;
