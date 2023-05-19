import React, { Component, useEffect, useState } from "react";
import { configureAmplify, SetS3Config } from "../components/AmplifyConfigure";
import { Storage } from "aws-amplify";
import TopNav2 from "../components/TopNav2"
import TopNav3 from "../components/TopNav3";
import NavBar from "../components/Navbar";
import axios from 'axios'

const identityId = localStorage.getItem('my-key')
console.log(identityId)

const UploadToS3 = () => {
  const [resume, setResume] = useState({
  title: '',
  resume: null  
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('resume', resume.resume )
    const key = `protected/${identityId}/userFiles`
    const response = await axios.post('http://localhost:3008/api/v1/resume/upload', (formData), {
      headers: {
        "key" : key
      }
      })
    console.log(response)
  }
  return (
  <div>
    <TopNav2/>
    <div className="page-wrapper">
        <NavBar/>
        <div className="main-content">
        <div className="settings-dialog-box">
    <form onSubmit={handleSubmit}>
      <div>
      <input type="text"
      onChange={e => setResume({...resume, title: e.target.value})}/>
      </div>
      <div>
      <input type="file" name="file" accept=".txt, .pdf, .html"
      onChange={e => setResume({...resume, resume: e.target.files[0]})}/>
      </div>
      <div>
      <button className="button-partition">Upload</button>
      </div>
    </form>
</div>
</div>
    </div>
  </div>
  
)
}

export default UploadToS3;






