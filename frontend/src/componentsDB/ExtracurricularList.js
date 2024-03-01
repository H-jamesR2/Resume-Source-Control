import React, {useContext, useEffect} from 'react';
import ResumeUrl from '../api/ResumeUrl';
import { UniContext } from '../context/UniContext';
import { useNavigate } from 'react-router-dom';
import "../cssFiles/Login.css";

const ExtracurricularList = (props) => {
  const {extracurriculars, setExtracurriculars} = useContext(UniContext)
  let navigate = useNavigate();

  useEffect(()=>{
    const fetchData = async (props) => {
      try{
        const response = await ResumeUrl.get("/v1/extracurriculars");
        setExtracurriculars(response.data.data.extracurriculars)
        console.log('Extracurricular: ',response)
      }catch (err) {}
    }
    fetchData();
  },[])

  const handleDelete =  async (e, id) =>{
    try{
        const response = await ResumeUrl.delete( `/v1/extracurriculars/${id}`)
        setExtracurriculars(extracurriculars.filter(extracurricular=>{
            return extracurricular.id !== id
        }))
        console.log(response)
    }catch (err) {

    }
}

const handleEdit = (e, id) => {
  navigate(`/blocks/${id}/updateExtracurricular`);
}


  return (
    
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
        {extracurriculars && 
                    extracurriculars.map(extracurricular =>{
                    return(
                        <tr key={extracurricular.id}>
                        <td>{extracurricular.name}</td>
                        <td>{extracurricular.role}</td>
                        <td>{extracurricular.start_date}</td>
                        <td>{extracurricular.end_date}</td>
                        <td>{extracurricular.description}</td>
                        <td><button className="secondary" onClick={(e)=> handleEdit(e, extracurricular.id)}>Edit</button></td>
                        <td><button className="negative" onClick={(e) => handleDelete(e, extracurricular.id)}>Delete</button></td>
                        </tr>

                    )
                } )}
          
        </tbody>
      </table>
    </div>
    
  )
}

export default ExtracurricularList;