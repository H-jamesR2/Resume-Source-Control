import React, { useContext, useEffect } from 'react';
import ResumeUrl from '../api/ResumeUrl';
import { UniContext } from '../context/UniContext';
import { useNavigate } from 'react-router-dom';
import '../cssFiles/blocks.css';

const ContactList = (props) => {
  const { contacts, setContacts } = useContext(UniContext)
  let navigate = useNavigate();

  useEffect(() => {
    const fetchData = async (props) => {
      try {
        const response = await ResumeUrl.get("/v1/contacts");
        setContacts(response.data.data.contacts)
        console.log('Contact: ', response)
      } catch (err) { }
    }
    fetchData();
  }, [])

  const handleDelete = async (e, id) => {
    try {
      const response = await ResumeUrl.delete(`/v1/contacts/${id}`)
      setContacts(contacts.filter(contact => {
        return contact.id !== id
      }))
      console.log(response)
    } catch (err) {

    }
  }
  const handleEdit = (e, id) => {
    navigate(`/data/${id}/updateContact`);
  }


  return (
    <div>
          {contacts &&
            contacts.map(contact => {
              return (
                <div key={contact.id}>
                  <div classname='block-div'>
                  <div className='block-name'>{contact.name}</div>
                  <div>{contact.email} | {contact.phone_number} | {contact.github} | {contact.portfolio_website}
                  <td><button onClick={(e) => handleEdit(e, contact.id)}>Edit</button></td>
                  <td><button onClick={(e) => handleDelete(e, contact.id)} >Delete</button></td></div>
                  </div>
                </div>

              )

            })}
    </div>

  )
}

export default ContactList;
