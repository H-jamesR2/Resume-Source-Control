import React, {useContext, useState} from 'react'
import ResumeUrl from '../api/ResumeUrl'
import { UniContext } from '../context/UniContext'


const AddFieldResume = () => {
    const{addFieldResumes} = useContext(UniContext)
    const[name, setName] = useState("")
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await ResumeUrl.post("v1/field_resumes", {
                name
            })
            addFieldResumes(response.data.data.field_resumes)
        }catch (err){}
    }
    
  return (
    <div>
        <form>
            <div> 
                <div>
                    <input value={name} onChange={e=>setName(e.target.value)} type='text'
                    placeholder='Field Resume'/>
                </div>
                
                <button onClick={handleSubmit} type='submit'> Add</button>
            </div>
        </form>
    
    </div>
  )
}

export default AddFieldResume;
