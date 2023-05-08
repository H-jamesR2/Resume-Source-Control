import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faBars } from '@fortawesome/free-solid-svg-icons'

import '../cssFiles/SourceControl.css';

function SourceControl(prop) {
    const [isOpen, setIsOpen] = useState(false);

    function OpenSideBar() {
        setIsOpen(true);
    }
    function CloseSideBar() {
        setIsOpen(false);
    }

function SelectBranch(props) {
  return (
    <label className="version-control-container" for={props.name}>{props.display}                  
      <input type="radio" className="sidebar-sc-resume" id={props.name} name="branch" value="{props.value}"></input>
      <span className="custom-radio"></span><br/>
    </label>
  )
}

function SelectResume(props) {
  return (
    <label className="version-control-container" for={props.name}>{props.display}                  
      <input type="radio" className="sidebar-sc-branch" id={props.name} name="resume" value="{props.value}"></input>
      <span className="custom-radio-large"></span><br/>
    </label>
  )
}

    return (
        <div className="nav-wrapper">
            <div id="sidebar-sc-wrapper" className={isOpen ? "open" : "close"}>
                
                <FontAwesomeIcon icon={faBars} size="2xl" id="openButton" className={isOpen ? "close" : "open"} onClick={OpenSideBar}/>
                <div id="sidebar-sc-top" style={{display:"inline"}}>
                    {/* <img src={backButton} onClick={CloseSideBar} className="icon" /> */}
                    <span className="sidebar-sc-text">Source History</span>                    
                    <FontAwesomeIcon icon={faAngleRight} size="lg" className="icon" onClick={CloseSideBar} style={{marginLeft:"15px"}}/>
                </div>
                <nav className="sidebar-sc-bottom">
                    <SelectResume name="resume-1" value="resume-1" display="Software Engineer"/>
                    <div className="sidebar-sc-text" style={{marginBottom:"35px"}}>
                      <SelectBranch name="resume-1-s1" value="resume-1-branch-1" display="A software engineer takes it place"/>
                      <SelectBranch name="resume-1-s2" value="resume-1-branch-2" display="Another one, but this time, it more of frontend"/>
                    </div>
                    <SelectResume name="resume-2" value="resume-2" display="Resume 2"/>
                    <div className="sidebar-sc-text" style={{marginBottom:"35px"}}>
                      <SelectBranch name="resume-2-s1" value="resume-2-branch-1" display="Branch 1"/>
                      <SelectBranch name="resume-2-s2" value="resume-2-branch-2" display="Branch 2"/>
                      <SelectBranch name="resume-2-s3" value="resume-2-branch-3" display="Branch 3"/>
                      <SelectBranch name="resume-2-s4" value="resume-2-branch-4" display="Branch 4"/>                      
                      <SelectBranch name="resume-2-s5" value="resume-2-branch-4" display="Branch 5"/>                      
                      <SelectBranch name="resume-2-s6" value="resume-2-branch-4" display="Branch 6"/>
                    </div>
                    <SelectResume name="resume-3" value="resume-3" display="UI/UX Designer"/>
                    <div className="sidebar-sc-text" style={{marginBottom:"35px"}}>
                      <SelectBranch name="resume-3-s1" value="resume-3-branch-1" display="Junior UI/UX designer"/>
                      <SelectBranch name="resume-3-s2" value="resume-3-branch-2" display="Associate UI/UX designer"/>
                      <SelectBranch name="resume-3-s3" value="resume-3-branch-3" display="Associate UI/UX designer for Google"/>
                    </div>
                    <SelectResume name="resume-4" value="resume-4" display="Web Developer"/>
                    <div className="sidebar-sc-text" style={{marginBottom:"35px"}}>
                      <SelectBranch name="resume-4-s1" value="resume-4-branch-1" display="Junior web developer"/>
                      <SelectBranch name="resume-4-s2" value="resume-4-branch-2" display="Associate web developer"/>
                      <SelectBranch name="resume-4-s3" value="resume-4-branch-3" display="Associate web developer for Meta"/>
                    </div>
                </nav>

                <div style={{position:"fixed", bottom:"16px", display:"flex", flexDirection:"column", alignItems:"center", width:"inherit"}}>
                  <button className="sidebar-sc-text" style={{margin:"16px 8px 0 8px"}}>Use this version</button>
                  <button className="sidebar-sc-text" style={{margin:"16px 8px 0 8px"}}>Create new branch</button>                  
                  <button className="sidebar-sc-text" style={{margin:"16px 8px 0 8px"}}>Create new resume</button>
                </div>
            </div>
        </div>
    );
}

export default SourceControl;