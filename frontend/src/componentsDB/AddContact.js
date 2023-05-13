import React, {useContext, useState} from 'react'
import ResumeUrl from '../api/ResumeUrl'
import { UniContext } from '../context/UniContext'


const AddContact = () => {
    const{addContacts} = useContext(UniContext)
    const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    const[phoneNumber, setPhoneNumber] = useState("")
    const[linkedIn, setLinkedIn] = useState("")
    const[github, setGithub] = useState("")
    const[portfolio, setPortfolio] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await ResumeUrl.post("v1/contacts", {
                name,
                email,
                phone_number: phoneNumber,
                linkedin : linkedIn,
                github,
                portfolio_website: portfolio
            })
            addContacts(response.data.data.contact)
        }catch (err){}
    }
    
  return (
    <div>
        <form action="">
            <div> 
                <div>
                    <input value={name} onChange={e=>setName(e.target.value)} type='text'
                    placeholder='name'/>
                </div>
                <div>
                    <input value={email} onChange={e=>setEmail(e.target.value)} type='text'
                    placeholder='email'/>
                </div>
                <div>
                    <input value={phoneNumber} onChange={e=>setPhoneNumber(e.target.value)} type='text'
                    placeholder='phone number'/>
                </div>
                <div>
                    <input value={linkedIn} onChange={e=>setLinkedIn(e.target.value)} type='text'
                    placeholder='linkedin'/>
                </div>
                <div>
                    <input value={github} onChange={e=>setGithub(e.target.value)} type='text'
                    placeholder='github'/>
                </div>
                <div>
                    <input value={portfolio} onChange={e=>setPortfolio(e.target.value)} type='text'
                    placeholder='portfolio'/>
                </div>
                <button onClick={handleSubmit} type='submit'> Add</button>
            </div>
        </form>
      
    </div>
  )
}

export default AddContact;
