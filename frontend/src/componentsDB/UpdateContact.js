import React, {useContext, useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router'
import { UniContext } from '../context/UniContext';
import ResumeUrl from '../api/ResumeUrl';

const UpdateContact = (props) => {
  const {id} = useParams();
  let navigate = useNavigate();

  const {contacts} = useContext(UniContext);

  const[name, setName] = useState("")
  const[email, setEmail] = useState("")
  const[phoneNumber, setPhoneNumber] = useState("")
  const[linkedIn, setLinkedIn] = useState("")
  const[github, setGithub] = useState("")
  const[portfolio, setPortfolio] = useState("")

    useEffect(()=>{
        const fetchData = async()=>{
            const response = await ResumeUrl.get(`/v1/contacts/${id}`);
            setName(response.data.data.contact.name)
            setEmail(response.data.data.contact.email)
            setPhoneNumber(response.data.data.contact.phone_number)
            setLinkedIn(response.data.data.contact.linkedin)
            setGithub(response.data.data.contact.github)
            setPortfolio(response.data.data.contact.portfolio_website)
        }
        fetchData();

    }, [])

    const handleSubmit = async(e) => {
        e.preventDefault();
        const updatedContact = await ResumeUrl.put(`/v1/contacts/${id}`, {
            name,
                email,
                phone_number: phoneNumber,
                linkedin : linkedIn,
                github,
                portfolio_website: portfolio
        });
        
        navigate('/data')

    }

  
  return (
    <div>
      <form>
        <div >
            <label htmlFor='name'>Name</label>
            <input value={name} onChange={(e)=> setName(e.target.value)} id="name" type="text"/>
        </div>
        <div>
            <label htmlFor='email'>Email</label>
            <input value={email} onChange={(e)=> setEmail(e.target.value)} id="email" type="text"/>
        </div>
        <div>
            <label htmlFor='phone_number'>Phone Number</label>
            <input value={phoneNumber} onChange={(e)=> setPhoneNumber(e.target.value)} id="phone_number" type="text"/>
        </div>
        <div>
            <label htmlFor='linkedin'>LinkedIn</label>
            <input value={linkedIn} onChange={(e)=> setLinkedIn(e.target.value)} id="linkedin" type="text"/>
        </div>
        <div>
            <label htmlFor='github'>Github</label>
            <input value={github} onChange={(e)=> setGithub(e.target.value)} id="github" type="text"/>
        </div>
        <div>
            <label htmlFor='portfolio_website'>Portfolio Website</label>
            <input value={portfolio} onChange={(e)=> setPortfolio(e.target.value)} id="portfolio_website" type="text"/>
        </div>
        <button type = "submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default UpdateContact;
