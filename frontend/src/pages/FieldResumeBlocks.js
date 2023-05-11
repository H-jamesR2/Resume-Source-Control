import React, {useContext, useEffect} from 'react'
import { useParams } from 'react-router'


//import TopNav from '../components/TopNav'
import TopNav2 from '../components/TopNav2'
import NavBar from '../components/Navbar'

import { UniContext } from '../context/UniContext'
import ResumeUrl from '../api/ResumeUrl'
import Contacts from '../componentsDB/Contacts';
import EducationCenters from '../componentsDB/EducationCenters'
import Projects from '../componentsDB/Projects'
import Jobs from '../componentsDB/Jobs'
import Extracurriculars from '../componentsDB/Extracurriculars'
import Skills from '../componentsDB/Skills'



const FieldResumeBlocks = () => {
const {id} = useParams();
const {selectedFieldResume, setSelectedFieldResume} = useContext(UniContext)

useEffect(()=>{
  const fetchData = async () => {
    try{
      const response = await ResumeUrl.get(`/v1/field_resumes/${id}`);
      setSelectedFieldResume(response.data.data)
      console.log("Contact: ", response.data.data.contacts)
      console.log("Education: ", response.data.data.educationCenters)
      console.log("Projects: ", response.data.data.projects)
      console.log("Jobs: ", response.data.data.jobs)
      console.log("Extracurriculars: ", response.data.data.extracurriculars)
      console.log("Skills: ", response.data.data.skills)

    }catch(err){}
  }
  fetchData();
},[])

  return (
    <div>
       <TopNav2/>
        <div className="page-wrapper">
            <NavBar/>
            <div>
        {selectedFieldResume && (
            <>
            <h1>{selectedFieldResume.field_resume.name}</h1>
            <h1>Contact</h1>
            {/* <div className="mt-3"><Reviews reviews={selectedRestaurant.reviews}/></div> */}
            <div><Contacts contacts={selectedFieldResume.contacts}/> </div>
            <h1>Education</h1>
            <div><EducationCenters educationCenters={selectedFieldResume.educationCenters}/> </div>
            <h1>Projects</h1>
            <div><Projects projects={selectedFieldResume.projects}/> </div>
            <h1>Jobs</h1>
            <div><Jobs jobs={selectedFieldResume.jobs}/> </div>
            <h1>Extracurricular</h1>
            <div><Extracurriculars extracurriculars={selectedFieldResume.extracurriculars}/> </div>
            <h1>Skills</h1>
            <div><Skills skills={selectedFieldResume.skills}/> </div>



            </>
        )}
    </div>

            </div>
    </div>
  )
}

export default FieldResumeBlocks
