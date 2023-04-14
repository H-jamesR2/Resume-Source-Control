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

function SelectSubBranch(props) {
  return (
    <label className="version-control-container" for={props.name}>{props.display}                  
      <input type="radio" className="sidebar-sc-branch" id={props.name} name="subbranch" value="{props.value}"></input>
      <span className="custom-radio"></span><br/>
    </label>
  )
}

function SelectBranch(props) {
  return (
    <label className="version-control-container" for={props.name}>{props.display}                  
      <input type="radio" className="sidebar-sc-subbranch" id={props.name} name="branch" value="{props.value}"></input>
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
                    <SelectBranch name="branch-1" value="branch-1" display="Software Engineer"/>
                    <div className="sidebar-sc-text" style={{marginBottom:"35px"}}>
                      <SelectSubBranch name="branch-1-s1" value="branch-1-sub-branch-1" display="A software engineer takes it place"/>
                      <SelectSubBranch name="branch-1-s2" value="branch-1-sub-branch-2" display="Another one, but this time, it more of frontend"/>
                    </div>
                    <SelectBranch name="branch-2" value="branch-2" display="Branch 2"/>
                    <div className="sidebar-sc-text" style={{marginBottom:"35px"}}>
                      <SelectSubBranch name="branch-2-s1" value="branch-2-sub-branch-1" display="Sub-Branch 1"/>
                      <SelectSubBranch name="branch-2-s2" value="branch-2-sub-branch-2" display="Sub-Branch 2"/>
                      <SelectSubBranch name="branch-2-s3" value="branch-2-sub-branch-3" display="Sub-Branch 3"/>
                      <SelectSubBranch name="branch-2-s4" value="branch-2-sub-branch-4" display="Sub-Branch 4"/>                      
                      <SelectSubBranch name="branch-2-s5" value="branch-2-sub-branch-4" display="Sub-Branch 5"/>                      
                      <SelectSubBranch name="branch-2-s6" value="branch-2-sub-branch-4" display="Sub-Branch 6"/>
                    </div>
                    <SelectBranch name="branch-3" value="branch-3" display="UI/UX Designer"/>
                    <div className="sidebar-sc-text" style={{marginBottom:"35px"}}>
                      <SelectSubBranch name="branch-3-s1" value="branch-3-sub-branch-1" display="Junior UI/UX designer"/>
                      <SelectSubBranch name="branch-3-s2" value="branch-3-sub-branch-2" display="Associate UI/UX designer"/>
                      <SelectSubBranch name="branch-3-s3" value="branch-3-sub-branch-3" display="Associate UI/UX designer for Google"/>
                    </div>
                    <SelectBranch name="branch-1" value="branch-4" display="Web Developer"/>
                    <div className="sidebar-sc-text" style={{marginBottom:"35px"}}>
                      <SelectSubBranch name="branch-4-s1" value="branch-4-sub-branch-1" display="Junior web developer"/>
                      <SelectSubBranch name="branch-4-s2" value="branch-4-sub-branch-2" display="Associate web developer"/>
                      <SelectSubBranch name="branch-4-s3" value="branch-4-sub-branch-3" display="Associate web developer for Meta"/>
                    </div>
                </nav>

                <div style={{position:"fixed", bottom:"16px", display:"flex", flexDirection:"column", alignItems:"center", width:"inherit"}}>
                  <button className="sidebar-sc-text" style={{margin:"16px 8px 0 8px"}}>Use this version</button>
                  <button className="sidebar-sc-text" style={{margin:"16px 8px 0 8px"}}>Create new branch</button>
                </div>
            </div>
        </div>
    );
}

export default SourceControl;