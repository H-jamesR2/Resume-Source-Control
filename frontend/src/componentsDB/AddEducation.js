import React, {useContext, useState} from 'react'
import ResumeUrl from '../api/ResumeUrl'
import { UniContext } from '../context/UniContext'
import "../cssFiles/input.css";


const AddEducation = () => {
    const{addEducation} = useContext(UniContext)
    const[name, setName] = useState("")
    const[startDate, setStartDate] = useState("")
    const[endDate, setEndDate] = useState("")
    const[degree, setDegree] = useState("")
    const[relevantCoursework, setRelevantCoursework] = useState("")
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await ResumeUrl.post("v1/education", {
                name,
                start_date: startDate,
                end_date : endDate,
                degree,
                relevant_coursework: relevantCoursework
                
            })
            addEducation(response.data.data.education)
        }catch (err){}
    }
    
  return (
    <div>
        <form>
            <div className="textbox"> 
                <div>
                    <input value={name} onChange={e=>setName(e.target.value)} type='text'
                    placeholder='name'/>
                </div>
                
                <div>
                    <input value={startDate} onChange={e=>setStartDate(e.target.value)} type='text'
                    placeholder='start date'/>
                </div>
                <div>
                    <input value={endDate} onChange={e=>setEndDate(e.target.value)} type='text'
                    placeholder='end date'/>
                </div>

                <div>
                    <input value={degree} onChange={e=>setDegree(e.target.value)} type='text'
                    placeholder='degree'/>
                </div>

                <div>
                    <input value={relevantCoursework} onChange={e=>setRelevantCoursework(e.target.value)} type='text'
                    placeholder='relevant coursework'/>
                </div>
                <button onClick={handleSubmit} type='submit'> Add</button>

                
            </div>
        </form>
      
    </div>
  )
}

export default AddEducation;
