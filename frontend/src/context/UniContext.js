import React, { useState, createContext } from "react";

export const UniContext = createContext();

export const UniContextProvider = (props) => {
    //Contacts
    const [contacts, setContacts] = useState([]);

    
    const addContacts = (contact) => {
        setContacts([...contacts, contact])   
    }

    //Education
    const [education, setEducation] = useState([]);

    

    const addEducation = (educationCenter) => {
        setEducation([...education, educationCenter])
    }

    //Projects
    const [projects, setProjects] = useState([]);

    

    const addProjects = (project) => {
        setProjects([...projects, project])
    }

    //Jobs
    const [jobs, setJobs] = useState([]);

    

    const addJobs = (job) => {
        setJobs([...jobs, job])
    }

    //Extracurriculars
    const [extracurriculars, setExtracurriculars] = useState([]);

    

    const addExtracurriculars = (extracurricular) => {
        setExtracurriculars([...extracurriculars, extracurricular])
    }

    //Skills
    const [skills, setSkills] = useState([]);

    

    const addSkills = (skill) => {
        setSkills([...skills, skill])
    }

    //Resumes
    const [resumes, setResumes] = useState([]);

    

    const addResumes = (resume) => {
        setResumes([...resumes, resume])
    }



    return(
        <UniContext.Provider value={{
            contacts, 
            setContacts, 
            addContacts, 
           
            
            education, 
            setEducation, 
            addEducation, 
            
            
            projects, 
            setProjects, 
            addProjects, 
           
            
            jobs, 
            setJobs, 
            addJobs, 
            

            extracurriculars, 
            setExtracurriculars, 
            addExtracurriculars, 
            

            skills, 
            setSkills, 
            addSkills,

            resumes,
            setResumes,
            addResumes
            

            }}>
            {props.children}
        </UniContext.Provider>
    )
}