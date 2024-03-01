import React, {useContext, useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router'
import { UniContext } from '../context/UniContext';
import ResumeUrl from '../api/ResumeUrl';
import "../cssFiles/input.css";

const UpdateSkill = (props) => {
  const {id} = useParams();
  let navigate = useNavigate();

  const {skills} = useContext(UniContext);

  const[hardSkills, setHardSkills] = useState("")
  const[softSkills, setSoftSkills] = useState("")
  const[technology, setTechnology] = useState("")
  const[languages, setLanguages] = useState("")

    useEffect(()=>{
        const fetchData = async()=>{
            const response = await ResumeUrl.get(`/v1/skills/${id}`);
            setHardSkills(response.data.data.skill.hard_skills)
            setSoftSkills(response.data.data.skill.soft_skills)
            setTechnology(response.data.data.skill.technology)
            setLanguages(response.data.data.skill.languages)
        }
        fetchData();

    }, [])

    const handleSubmit = async(e) => {
        e.preventDefault();
        const updatedContact = await ResumeUrl.put(`/v1/skills/${id}`, {
          hard_skills: hardSkills,
          soft_skills: softSkills,
          technology,
          languages,
        });
        navigate('/blocks')
    }
  return (
    <div>
      <form className="textbox2">
        <div >
            <label htmlFor='hard_skills'>Hard Skills</label>
            <input value={hardSkills} onChange={(e)=> setHardSkills(e.target.value)} id="hard_skills" type="text"/>
        </div>
        <div>
            <label htmlFor='soft_skills'>Soft Skills</label>
            <input value={softSkills} onChange={(e)=> setSoftSkills(e.target.value)} id="soft_skills" type="text"/>
        </div>
        <div>
            <label htmlFor='technology'>Technology</label>
            <input value={technology} onChange={(e)=> setTechnology(e.target.value)} id="technology" type="text"/>
        </div>
        <div>
            <label htmlFor='languages'>Languages</label>
            <input value={languages} onChange={(e)=> setLanguages(e.target.value)} id="languages" type="text"/>
        </div>

        <button type = "submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default UpdateSkill;
