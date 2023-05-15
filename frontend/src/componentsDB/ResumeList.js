import React, {useContext, useEffect} from 'react'
import ResumeUrl from '../api/ResumeUrl';
import { UniContext } from '../context/UniContext';
import TopNav2 from '../components/TopNav2';
import NavBar from '../components/Navbar';
import VersionNavBar from '../components/VersionSideBar';
import { useNavigate } from 'react-router-dom';
import '../cssFiles/versionbar.css';

const identityId = localStorage.getItem('my-key')
console.log(identityId)

const ResumeList = (props) => {
  //const identityId= 'us-east-2:a8dcd4f1-9b03-4eec-a2a2-73ea8ec71440'
  const {resumes, setResumes} = useContext(UniContext)
  let navigate = useNavigate();

  useEffect(()=>{
    const fetchData = async (props) => {
      try{
        const response = await ResumeUrl.get("/v1/resumes");
        setResumes(response.data.data.resumes)
        console.log('Resumes: ',response)
      }catch (err) {}
    }
    fetchData();
  },[])

  const openPreview = (url) =>{
    const w = 800
    const h = 600
    const size = `width=${w}, height=${h}, resizable=yes, scrollbars=yes, status=yes`
    window.open(url, 'PopUp', size); 
  }

  const handlePreview =  async (e, name, version) =>{
    e.preventDefault()
    try{
      const temp = `protected/${identityId}/userFiles/${name}` 
      //const version = version_id
      console.log(name)
      console.log(version)
      const response = await ResumeUrl.get( '/v1/resumeurl', {
          headers:{
            "name" : temp,
            "version" : version
          }
        })
        console.log(response.data.url)
        const link = response.data.url
        openPreview(link)
    }catch (err) {

    }
}

const handleSelectVersion = (e, name, version) => {
  handlePreview(e, name, version)
}


  return (
    <nav className="sidebar-bottom-right">
          {resumes && resumes.map(resume =>{
            return(
              <li onClick={(e)=> handleSelectVersion(e, resume.name, resume.version_id)} key={resume.id}>
              <span><div className="sidebar-text-right">{resume.name}</div></span>
              {/* <td>{resume.version_id}</td> */}
              {/* <td>{resume.submission_date}</td> */}
              {/* <span><button onClick={(e)=> handlePreview(e, resume.name, resume.version_id)}>Preview</button></span> */}
              </li>
              )})}
    </nav>
  )
}

export default ResumeList


// import React, {useContext, useEffect} from 'react'
// import ResumeUrl from '../api/ResumeUrl';
// import { UniContext } from '../context/UniContext';
// import TopNav2 from '../components/TopNav2';
// import NavBar from '../components/Navbar';
// import VersionNavBar from '../components/VersionSideBar';
// import { useNavigate } from 'react-router-dom';


// const identityId = localStorage.getItem('my-key')
// console.log(identityId)

// const ResumeList = (props) => {
//   //const identityId= 'us-east-2:a8dcd4f1-9b03-4eec-a2a2-73ea8ec71440'
//   const {resumes, setResumes} = useContext(UniContext)
//   let navigate = useNavigate();

//   useEffect(()=>{
//     const fetchData = async (props) => {
//       try{
//         const response = await ResumeUrl.get("/v1/resumes");
//         setResumes(response.data.data.resumes)
//         console.log('Resumes: ',response)
//       }catch (err) {}
//     }
//     fetchData();
//   },[])

//   const openPreview = (url) =>{
//     const w = 800
//     const h = 600
//     const size = `width=${w}, height=${h}, resizable=yes, scrollbars=yes, status=yes`
//     window.open(url, 'PopUp', size); 
//   }

//   const handlePreview =  async (e, name, version) =>{
//     e.preventDefault()
//     try{
//       const temp = `protected/${identityId}/userFiles/${name}` 
//       //const version = version_id
//       console.log(name)
//       console.log(version)
//       const response = await ResumeUrl.get( '/v1/resumeurl', {
//           headers:{
//             "name" : temp,
//             "version" : version
//           }
//         })
//         console.log(response.data.url)
//         const link = response.data.url
//         openPreview(link)
//     }catch (err) {

//     }
// }

//   return (
//     <div>
//     <TopNav2/>
//     <div className="page-wrapper">
//       <VersionNavBar/>
//       <ul>
        
        
//           {resumes && resumes.map(resume =>{
//             return(
//               <li key={resume.id}>
//               <span>{resume.name}</span>
//               {/* <td>{resume.version_id}</td> */}
//               {/* <td>{resume.submission_date}</td> */}
//               <span><button onClick={(e)=> handlePreview(e, resume.name, resume.version_id)}>Preview</button></span>
//               </li>
//               )})}
        
//       </ul>
//     </div>
//   </div>



//   // <div>
//   //   <TopNav2/>
//   //   <div className="page-wrapper">
//   //     <VersionNavBar/>
//   //     <table>
//   //       <thead>
//   //         <tr>
//   //           <th>Name</th>
//   //           <th>Preview</th>
//   //         </tr>
//   //       </thead>
//   //       <tbody>
//   //         {resumes && resumes.map(resume =>{
//   //           return(
//   //             <tr key={resume.id}>
//   //             <td>{resume.name}</td>
//   //             {/* <td>{resume.version_id}</td> */}
//   //             {/* <td>{resume.submission_date}</td> */}
//   //             <td><button onClick={(e)=> handlePreview(e, resume.name, resume.version_id)}>Preview</button></td>
//   //             </tr>
//   //             )})}
//   //       </tbody>
//   //     </table>
//   //   </div>
//   // </div>
//   )
// }

// export default ResumeList