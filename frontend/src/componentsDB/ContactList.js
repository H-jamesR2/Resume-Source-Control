import React, {useContext, useEffect} from 'react';
import ResumeUrl from '../api/ResumeUrl';
import { UniContext } from '../context/UniContext';
import { useNavigate } from 'react-router-dom';
import ToggleSwitch from '../components/Toogle';

const ContactList = (props) => {
  const {contacts, setContacts} = useContext(UniContext)
  let navigate = useNavigate();

  useEffect(()=>{
    const fetchData = async (props) => {
      try{
        const response = await ResumeUrl.get("/v1/contacts");
        setContacts(response.data.data.contacts)
        console.log('Contact: ',response)
      }catch (err) {}
    }
    fetchData();
  },[])

  const handleDelete =  async (e, id) =>{
    try{
        const response = await ResumeUrl.delete( `/v1/contacts/${id}`)
        setContacts(contacts.filter(contact=>{
            return contact.id !== id
        }))
        console.log(response)
    }catch (err) {

    }
}
const handleEdit = (e, id) => {
  navigate(`/data/${id}/updateContact`);
}


  return (    
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone number</th>
            <th>LinkedIn</th>
            <th>Github</th>
            <th>Portfolio Website</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
        {contacts && 
                    contacts.map(contact =>{
                    return(
                        
                        <tr key={contact.id}>
                        <td><ToggleSwitch/></td>
                        <td>{contact.name}</td>
                        <td>{contact.email}</td>
                        <td>{contact.phone_number}</td>
                        <td>{contact.linkedin}</td>
                        <td>{contact.github}</td>
                        <td>{contact.portfolio_website}</td>
                        <td><button onClick={(e)=> handleEdit(e, contact.id)}>Edit</button></td>
                        <td><button onClick={(e) => handleDelete(e, contact.id)} >Delete</button></td>
                      </tr>

                    )
                    
                } )}
          
        </tbody>
      </table>
    </div>
    
  )
}

export default ContactList;
