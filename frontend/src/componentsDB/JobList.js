import React, {useContext, useEffect} from 'react';
import ResumeUrl from '../api/ResumeUrl';
import { UniContext } from '../context/UniContext';
import { useNavigate } from 'react-router-dom';


const JobList = (props) => {
  const {jobs, setJobs} = useContext(UniContext)
  let navigate = useNavigate();

  useEffect(()=>{
    const fetchData = async (props) => {
      try{
        const response = await ResumeUrl.get("/v1/jobs");
        setJobs(response.data.data.jobs)
        console.log('Jobs: ',response)
      }catch (err) {}
    }
    fetchData();
  },[])

  const handleDelete =  async (e, id) =>{
    
    try{
        const response = await ResumeUrl.delete( `/v1/jobs/${id}`)
        setJobs(jobs.filter(job=>{
            return job.id !== id
        }))
        console.log(response)
    }catch (err) {

    }
}
const handleEdit = (e, id) => {
  navigate(`/data/${id}/updateJob`);
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
        {jobs && 
                    jobs.map(job =>{
                    return(
                        <tr key={job.id}>
                        <td>{job.name}</td>
                        <td>{job.role}</td>
                        <td>{job.start_date}</td>
                        <td>{job.end_date}</td>
                        <td>{job.description}</td>
                        <td><button onClick={(e)=> handleEdit(e, job.id)}>Edit</button></td>
                        <td><button onClick={(e) => handleDelete(e, job.id)}>Delete</button></td>
                    </tr>

                    )
                    
                } )}
          
        </tbody>
      </table>
    </div>    
    
  )
}

export default JobList;
