import React, {useContext, useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router'
import { UniContext } from '../context/UniContext';
import ResumeUrl from '../api/ResumeUrl';

const UpdateJob = (props) => {
  const {id} = useParams();
  let navigate = useNavigate();

  const {jobs} = useContext(UniContext);

  const[name, setName] = useState("")
  const[role, setRole] = useState("")
  const[startDate, setStartDate] = useState("")
  const[endDate, setEndDate] = useState("")
  const[description, setDescription] = useState("")
    
    

    useEffect(()=>{
        const fetchData = async()=>{
            const response = await ResumeUrl.get(`/v1/jobs/${id}`);
            setName(response.data.data.job.name)
            setRole(response.data.data.job.role)
            setStartDate(response.data.data.job.start_date)
            setEndDate(response.data.data.job.end_date)
            setDescription(response.data.data.job.description)
            
        }
        fetchData();

    }, [])

    const handleSubmit = async(e) => {
        e.preventDefault();
        const updatedJob = await ResumeUrl.put(`/v1/jobs/${id}`, {
            name,
            role,
                start_date: startDate,
                end_date : endDate,
                description,
                
                
        });
        navigate('/data')
    }
  return (
    <div>
      <form>
        <div>
            <label htmlFor='name'>Name</label>
            <input value={name} onChange={(e)=> setName(e.target.value)} id="name" type="text"/>
        </div>
        <div>
            <label htmlFor='role'>Role</label>
            <input value={role} onChange={(e)=> setRole(e.target.value)} id="role" type="text"/>
        </div>
        <div>
            <label htmlFor='start_date'>Start Date</label>
            <input value={startDate} onChange={(e)=> setStartDate(e.target.value)} id="start_date" type="text"/>
        </div>
        <div>
            <label htmlFor='end_date'>End Date</label>
            <input value={endDate} onChange={(e)=> setEndDate(e.target.value)} id="end_date" type="text"/>
        </div>
        <div>
            <label htmlFor='degree'>Description</label>
            <input value={description} onChange={(e)=> setDescription(e.target.value)} id="description" type="text"/>
        </div>
        <button type = "submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default UpdateJob;