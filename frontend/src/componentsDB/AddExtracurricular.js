import React, {useContext, useState} from 'react'
import ResumeUrl from '../api/ResumeUrl'
import { UniContext } from '../context/UniContext'
import "../cssFiles/input.css";


const AddExtracurricular = () => {
    const{addExtracurriculars} = useContext(UniContext)
    const[name, setName] = useState("")
    const[role, setRole] = useState("")
    const[startDate, setStartDate] = useState("")
    const[endDate, setEndDate] = useState("")
    const[description, setDescription] = useState("")
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await ResumeUrl.post("v1/extracurriculars", {
                name,
                role,
                start_date: startDate,
                end_date : endDate,
                description
                
            })
            addExtracurriculars(response.data.data.extracurricular)
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
                    <input value={role} onChange={e=>setRole(e.target.value)} type='text'
                    placeholder='role'/>
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
                    <input value={description} onChange={e=>setDescription(e.target.value)} type='text'
                    placeholder='description'/>
                </div>
                <button onClick={handleSubmit} type='submit'> Add</button>

                
            </div>
        </form>
      
    </div>
  )
}

export default AddExtracurricular;
