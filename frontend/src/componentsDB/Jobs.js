import React from 'react'

const Jobs = ({jobs}) => {
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
                jobs.map((job)=>{
                    return(
                        <tr key={job.id}>
                            
                                
                                <td>{job.name}</td>
                                <td>{job.role}</td>
                                <td>{job.start_date}</td>
                                <td>{job.end_date}</td>
                                <td>{job.description}</td>
                              
                            
    
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

export default Jobs
