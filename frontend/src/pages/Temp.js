import React, { Component, useEffect, useState } from "react";
import { configureAmplify, SetS3Config } from "../components/AmplifyConfigure";
import { Storage } from "aws-amplify";
import TopNav2 from "../components/TopNav2";
import NavBar from "../components/Navbar";

// UploadToS3 is a reusable component

// Temp.js is a temporary file just to verify that uploadResume function works


class UploadToS3 extends Component {
  state = {
    resumeName: "",
    resumeFile: "",
    response: ""
  };

  uploadResume = () => {
    SetS3Config("resumeapps3", "protected");
    Storage.put(`userFiles/${this.upload.files[0].name}`,
                this.upload.files[0],
                { contentType: this.upload.files[0].type })
      .then(result => {
        this.upload = null;
        alert('Resume uploaded to S3')
        window.location.reload();
        // this.setState({ response: "Success uploading file!" });
      })
      .catch(err => {
        alert(err);
        window.location.reload();
      });
  };

  render() {
    return (
      <div>
        <TopNav2/>
        <div className="page-wrapper">
        <NavBar/>
        <div className="main-content">
          <div className="settings-dialog-box">
        <h2>Upload Resume</h2>
        <input
          type="file"
          accept=".txt, .pdf"
          style={{ display: "none" }}
          ref={ref => (this.upload = ref)}
          onChange={e =>
            this.setState({
              resumeFile: this.upload.files[0],
              resumeName: this.upload.files[0].name
            })
          }
        />
        <input className="settings-partition" value={this.state.resumeName} placeholder="Choose file" />
        <br></br>
        <br></br>
        <button className="button-partition"
          onClick={e => {
            this.upload.value = null;
            this.upload.click();
          }}
          loading={this.state.uploading}
        >
          Browse
        </button>
        <br></br>
        <button 
        className="button-partition" onClick={this.uploadResume}> Upload file </button>

        {!!this.state.response && <div>{this.state.response}</div>}
        </div>
        </div>
        </div>
      </div>
    );
  }
}


configureAmplify();

export default UploadToS3;