import React, {useContext, useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router'
import { UniContext } from '../context/UniContext';
import ResumeUrl from '../api/ResumeUrl';
import "../cssFiles/input.css";

const UpdateEducation = (props) => {
  const {id} = useParams();
  let navigate = useNavigate();

  const {education} = useContext(UniContext);

  const[name, setName] = useState("")
  const[startDate, setStartDate] = useState("")
  const[endDate, setEndDate] = useState("")
  const[degree, setDegree] = useState("")
  const[relevantCoursework, setRelevantCoursework] = useState("")
    

    useEffect(()=>{
        const fetchData = async()=>{
            const response = await ResumeUrl.get(`/v1/education/${id}`);
            setName(response.data.data.education.name)
            setStartDate(response.data.data.education.start_date)
            setEndDate(response.data.data.education.end_date)
            setDegree(response.data.data.education.degree)
            setRelevantCoursework(response.data.data.education.relevant_coursework)
        }
        fetchData();

    }, [])

    const handleSubmit = async(e) => {
        e.preventDefault();
        const updatedEducation = await ResumeUrl.put(`/v1/education/${id}`, {
            name,
                start_date: startDate,
                end_date : endDate,
                degree,
                relevant_coursework: relevantCoursework
                
        });
        navigate('/blocks')

    }
  return (
    <div>
      <form className="textbox2">
        <div>
            <label htmlFor='name'>Name</label>
            <input value={name} onChange={(e)=> setName(e.target.value)} id="name" type="text"/>
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
            <label htmlFor='degree'>Degree</label>
            <input value={degree} onChange={(e)=> setDegree(e.target.value)} id="degree" type="text"/>
        </div>
        <div>
            <label htmlFor='relevant_coursework'>Relevant Coursework</label>
            <input value={relevantCoursework} onChange={(e)=> setRelevantCoursework(e.target.value)} id="relevant_coursework" type="text"/>
        </div>
        <button type = "submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default UpdateEducation;