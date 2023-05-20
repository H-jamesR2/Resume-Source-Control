import React, {useContext, useEffect} from 'react';
import ResumeUrl from '../api/ResumeUrl';
import { UniContext } from '../context/UniContext';
import { useNavigate } from 'react-router-dom';

const SkillList = (props) => {
  const {skills, setSkills} = useContext(UniContext)
  let navigate = useNavigate();

  useEffect(()=>{
    const fetchData = async (props) => {
      try{
        const response = await ResumeUrl.get("/v1/skills");
        setSkills(response.data.data.skills)
        console.log('Skills: ',response)
      }catch (err) {}
    }
    fetchData();
  },[])


  const handleDelete =  async (e, id) =>{
    
    try{
        const response = await ResumeUrl.delete( `/v1/skills/${id}`)
        setSkills(skills.filter(skill=>{
            return skill.id !== id
        }))
        console.log(response)
    }catch (err) {

    }
}
const handleEdit = (e, id) => {
  
  navigate(`/blocks/${id}/updateSkill`);
}

  return (
    
    <div>
      <table>
        <thead>
          <tr>
              <th>Hard Skills</th>
              <th>Soft Skills</th>
              <th>Technology</th>
              <th>Languages</th>
              <th>Edit</th>
              <th>Delete</th>
          </tr>
        </thead>
        <tbody>
        {skills && 
                    skills.map(skill =>{
                    return(
                        <tr key={skill.id}>
                        <td>{skill.hard_skills}</td>
                        <td>{skill.soft_skills}</td>
                        <td>{skill.technology}</td>
                        <td>{skill.languages}</td>
                        <td><button onClick={(e)=> handleEdit(e, skill.id)}>Edit</button></td>
                        <td><button onClick={(e) => handleDelete(e, skill.id)}>Delete</button></td>
                    </tr>

                    )
                    
                } )}
          
        </tbody>
      </table>
    </div>
    
  )
}

export default SkillList