import React, {useContext, useEffect} from 'react'
import ResumeUrl from '../api/ResumeUrl';
import { UniContext } from '../context/UniContext';
import TopNav2 from '../components/TopNav2';
import NavBar from '../components/Navbar';
import VersionNavBar from '../components/VersionSideBar';
import { useNavigate } from 'react-router-dom';
import '../cssFiles/versionbar.css';
import '../cssFiles/styles.css';
import CopyButton from '../images/Copy-paste blue button.png';

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

const handleDelete = async (e, id) =>{
  e.stopPropagation()
  try{
    const response = await ResumeUrl.delete( `v1/resumes/${id}`)
    setResumes(resumes.filter(resume=>{
        return resume.id !== id
    }))
    console.log(response)
}catch (err) {

}
}

  function ResumeItem(props) {
    return (
      <div style={{marginBottom:"10px"}}>
        <div className="sidebar-text-right">{props.title}</div>
        <div className="sidebar-text-right" style={{fontSize:"11px", fontFamily:"Lekton", color:"var(--gray-3)"}}>{props.date}</div>
      </div>
    )
  }

  function ResumeLatestItem(props) {
    return (
      <div style={{marginBottom:"10px",display:"grid"}}>
        <div className="sidebar-text-right" style={{gridRow:"1/2"}}>{props.title}</div>
        <div className="sidebar-text-right" style={{fontSize:"11px", fontFamily:"Lekton", color:"var(--gray-3)", gridRow:"2/3"}}>{props.date}</div>
        <div className="sidebar-text-right" style={{gridColumn:"5/6"}}>
          <img src={CopyButton} style={{width:"32px"}}></img>
        </div>
      </div>
    )
  }


  return (
    <nav className="sidebar-bottom-right">      
      <ResumeLatestItem title="Anthony Regner - Software Engineer v2.1" date="1/19/24"></ResumeLatestItem>
      <ResumeItem title="Anthony Regner - Software Engineer v2" date="12/19/23"></ResumeItem>
      <ResumeItem title="Anthony Regner - Software Engineer v1.1" date="11/17/23"></ResumeItem>
      <ResumeItem title="Anthony Regner - Software Engineer v1" date="11/15/23"></ResumeItem>

          {/* {resumes && resumes.map(resume =>{ */}
            {/* // return( */}
              {/* // <li onClick={(e)=> handleSelectVersion(e, resume.name, resume.version_id)} key={resume.id}> */}
              {/* <span> */}
                {/* <div className="sidebar-text-right">{resume.name}</div> */}
                {/* <div className="sidebar-text-right">Date: {resume.submission_date}</div> */}
              {/* </span>               */}
              {/* <span><button onClick={(e) => handleDelete(e, resume.id, resume.name, resume.version_id)}>Delete</button></span> */}
              {/* { <td>{resume.version_id}</td> } */}
              {/* { <td>{resume.submission_date}</td> } */}
              {/* <span><button onClick={(e)=> handlePreview(e, resume.name, resume.version_id)}>Preview</button></span> */}
              {/* </li> */}
              {/* )})} */}
          
    </nav>
  )
}

export default ResumeList

