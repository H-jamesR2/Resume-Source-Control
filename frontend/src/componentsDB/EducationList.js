import React, {useContext, useEffect} from 'react';
import ResumeUrl from '../api/ResumeUrl';
import { UniContext } from '../context/UniContext';
import { useNavigate } from 'react-router-dom';


const EducationList = (props) => {
  const {education, setEducation} = useContext(UniContext)
  let navigate = useNavigate();

  useEffect(()=>{
    const fetchData = async (props) => {
      try{
        const response = await ResumeUrl.get("/v1/education");
        setEducation(response.data.data.education)
        console.log('Education: ',response)
      }catch (err) {}
    }
    fetchData();
  },[])

  const handleDelete =  async (e, id) =>{
    try{
        const response = await ResumeUrl.delete( `/v1/education/${id}`)
        setEducation(education.filter(educationCenter=>{
            return educationCenter.id !== id
        }))
        console.log(response)
    }catch (err) {

    }
}

const handleEdit = (e, id) => {
  navigate(`/data/${id}/updateEducation`);
}
  

  return (
    
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Degree</th>
            <th>Relevant Coursework</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
        {education && 
                    education.map(educationCenter =>{
                    return(
                        <tr key={educationCenter.id}>
                        <td>{educationCenter.name}</td>
                        <td>{educationCenter.start_date}</td>
                        <td>{educationCenter.end_date}</td>
                        <td>{educationCenter.degree}</td>
                        <td>{educationCenter.relevant_coursework}</td>
                        <td><button onClick={(e)=> handleEdit(e, educationCenter.id)}>Edit</button></td>
                        <td><button onClick={(e) => handleDelete(e, educationCenter.id)}>Delete</button></td>
                    </tr>
                    )             
                } )}
        </tbody>
      </table>
    </div>
    
  )
}

export default EducationList;
