import React from 'react'

const Contacts = ({contacts}) => {
  return (
    <div>
      <div>
        <table>
            <thead>
                <tr>
                <th>Name</th>
            <th>Email</th>
            <th>Phone number</th>
            <th>LinkedIn</th>
            <th>Github</th>
            <th>Portfolio Website</th>
                </tr>
            </thead>
            <tbody>
        {
            contacts.map((contact)=>{
                return(
                    <tr key={contact.id}>
                        
                            
                            <td>{contact.name}</td>
                            <td>{contact.email}</td>
                            <td>{contact.phone_number}</td>
                            <td>{contact.linkedin}</td>
                            <td>{contact.github}</td>
                            <td>{contact.portfolio_website}</td>
                        

                    </tr>
                )
            })
        }
        </tbody>
        </table>
      </div>
    </div>
  )
}

export default Contacts;
