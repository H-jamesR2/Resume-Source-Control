import React from 'react'

const Extracurriculars = ({extracurriculars}) => {
    return (
        <div>
          <div>
            <table>
                <thead>
                    <tr>
                    <th>Name</th>
                <th>Role</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Description</th>
                
                    </tr>
                </thead>
                <tbody>
            {
                extracurriculars.map((extracurricular)=>{
                    return(
                        <tr key={extracurricular.id}>
                            
                                
                                <td>{extracurricular.name}</td>
                                <td>{extracurricular.role}</td>
                                <td>{extracurricular.start_date}</td>
                                <td>{extracurricular.end_date}</td>
                                <td>{extracurricular.description}</td>
                              
                            
    
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

export default Extracurriculars
