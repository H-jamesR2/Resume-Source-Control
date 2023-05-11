import React, {useContext, useEffect} from 'react'
import ResumeUrl from '../api/ResumeUrl'
import { UniContext } from '../context/UniContext'
import { useNavigate } from 'react-router-dom'





const FieldResumeList = () => {
    const {fieldResumes, setFieldResumes} = useContext(UniContext);
    let navigate = useNavigate();

    useEffect(()=>{
        const fetchData = async (props) => {
          try{
            const response = await ResumeUrl.get("/v1/field_resumes");
            setFieldResumes(response.data.data.field_resumes)
            console.log('Field Resumes: ',response.data.data.field_resumes)
          }catch (err) {}
        }
        fetchData();
      },[])

    
      const handleSelectFieldResume = (id) => {
        navigate(`/fieldResumes/${id}`)
      }

  return (
    <div>
        <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
        {fieldResumes && 
                    fieldResumes.map(field_resume =>{
                    return(
                        <tr onClick={()=> handleSelectFieldResume(field_resume.id)} key={field_resume.id}>
                        <td>{field_resume.name}</td>
                        <td>Edit</td>
                        <td>Delete</td>
                        {/* <td><button onClick={(e)=> handleEdit(e, contact.id)}>Edit</button></td>
                        <td><button onClick={(e) => handleDelete(e, contact.id)} >Delete</button></td> */}
                      </tr>

                    )
                    
                } )}
          
        </tbody>
      </table>

      
    </div>
  )
}

export default FieldResumeList
