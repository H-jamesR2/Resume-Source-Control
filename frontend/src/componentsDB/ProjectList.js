import React, {useContext, useEffect} from 'react';
import ResumeUrl from '../api/ResumeUrl';
import { UniContext } from '../context/UniContext';
import { useNavigate } from 'react-router-dom';

const ProjectList = (props) => {
  const {projects, setProjects} = useContext(UniContext)
  let navigate = useNavigate();

  useEffect(()=>{
    const fetchData = async (props) => {
      try{
        const response = await ResumeUrl.get("/v1/projects");
        setProjects(response.data.data.projects)
        console.log('Projects: ',response)
      }catch (err) {}
    }
    fetchData();
  },[])

  const handleDelete =  async (e, id) =>{
    try{
        const response = await ResumeUrl.delete( `/v1/projects/${id}`)
        setProjects(projects.filter(project=>{
            return project.id !== id
        }))
        console.log(response)
    }catch (err) {

    }
}

const handleUpdate = (e, id) => {
  navigate(`/data/${id}/updateProject`);
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
        {projects && 
                    projects.map(project =>{
                    return(
                        <tr key={project.id}>
                        <td>{project.name}</td>
                        <td>{project.role}</td>
                        <td>{project.start_date}</td>
                        <td>{project.end_date}</td>
                        <td>{project.description}</td>
                        <td><button onClick={(e)=> handleUpdate(e, project.id)}>Update</button></td>
                        <td><button onClick={(e) => handleDelete(e, project.id)}>Delete</button></td>
                        </tr>

                    )
                    
                } )}
          
        </tbody>
      </table>
    </div>
    
  )
}

export default ProjectList;