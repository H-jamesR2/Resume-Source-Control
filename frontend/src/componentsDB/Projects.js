import React from 'react'

const Projects = ({projects}) => {
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
                projects.map((project)=>{
                    return(
                        <tr key={project.id}>
                            
                                
                                <td>{project.name}</td>
                                <td>{project.role}</td>
                                <td>{project.start_date}</td>
                                <td>{project.end_date}</td>
                                <td>{project.description}</td>
                              
                            
    
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

export default Projects
