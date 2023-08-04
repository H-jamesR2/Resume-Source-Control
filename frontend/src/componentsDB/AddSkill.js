import React, {useContext, useState} from 'react'
import ResumeUrl from '../api/ResumeUrl'
import { UniContext } from '../context/UniContext'
import "../cssFiles/input.css"


const AddSkill = () => {
    const{addSkills} = useContext(UniContext)
    const[hardSkills, setHardSkills] = useState("")
    const[softSkills, setSoftSkills] = useState("")
    const[technology, setTechnology] = useState("")
    const[languages, setLanguages] = useState("")
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await ResumeUrl.post("v1/skills", {
                hard_skills: hardSkills,
                soft_skills: softSkills,
                technology,
                languages,
                
            })
            addSkills(response.data.data.skill)
        }catch (err){}
    }
    
  return (
    <div>
        <form>
            <div className="textbox">  
                <div>
                    <input value={hardSkills} onChange={e=>setHardSkills(e.target.value)} type='text'
                    placeholder='hard skils'/>
                </div>
                
                <div>
                    <input value={softSkills} onChange={e=>setSoftSkills(e.target.value)} type='text'
                    placeholder='soft skills'/>
                </div>
                <div>
                    <input value={technology} onChange={e=>setTechnology(e.target.value)} type='text'
                    placeholder='technology'/>
                </div>

                <div>
                    <input value={languages} onChange={e=>setLanguages(e.target.value)} type='text'
                    placeholder='languages'/>
                </div>

                <button onClick={handleSubmit} type='submit'> Add</button>

                
            </div>
        </form>
      
    </div>
  )
}

export default AddSkill;
