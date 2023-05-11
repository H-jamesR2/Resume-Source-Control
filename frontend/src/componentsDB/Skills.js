import React from 'react'

const Skills = ({skills}) => {
    return (
        <div>
          <div>
            <table>
                <thead>
                    <tr>
                    <th>Hard Skills</th>
                <th>Soft Skills</th>
                <th>Technology</th>
                <th>Languages</th>
                
                
                    </tr>
                </thead>
                <tbody>
            {
                skills.map((skill)=>{
                    return(
                        <tr key={skill.id}>
                            
                                
                                <td>{skill.hard_skills}</td>
                                <td>{skill.soft_skills}</td>
                                <td>{skill.technology}</td>
                                <td>{skill.languages}</td>
                                
                              
                            
    
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

export default Skills
