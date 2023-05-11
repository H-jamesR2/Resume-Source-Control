import React from 'react'

const EducationCenters = ({educationCenters}) => {
    return (
        <div>
          <div>
            <table>
                <thead>
                    <tr>
                    <th>Name</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Degree</th>
                <th>Relevant Coursework</th>
                
                    </tr>
                </thead>
                <tbody>
            {
                educationCenters.map((educationCenter)=>{
                    return(
                        <tr key={educationCenter.id}>
                            
                                
                                <td>{educationCenter.name}</td>
                                <td>{educationCenter.start_date}</td>
                                <td>{educationCenter.end_date}</td>
                                <td>{educationCenter.degree}</td>
                                <td>{educationCenter.relevant_coursework}</td>
                            
                            
    
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

export default EducationCenters
