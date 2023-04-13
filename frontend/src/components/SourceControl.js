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
      <input type="radio" className="sidebar-sc-branch" id={props.name} checked={props.default} name="branch" value="{props.value}"></input>
      <span className="custom-radio"></span><br/>
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
                    <li><div className="sidebar-sc-text">Software Engineering</div></li>
                    <div className="sidebar-sc-text" style={{marginBottom:"15px"}}>
                      <SelectBranch name="branch-1-s1" value="branch-1-sub-branch-1" display="A software engineer takes it place"/>
                      <SelectBranch name="branch-1-s2" value="branch-1-sub-branch-2" default="checked" display="Another one, but this time, it more of frontend"/>
                    </div>
                    <li><div className="sidebar-sc-text">Branch 2</div></li>
                    <div className="sidebar-sc-text" style={{marginBottom:"15px"}}>
                      <SelectBranch name="branch-2-s1" value="branch-2-sub-branch-1" display="Sub-Branch 1"/>
                      <SelectBranch name="branch-2-s2" value="branch-2-sub-branch-2" display="Sub-Branch 2"/>
                      <SelectBranch name="branch-2-s3" value="branch-2-sub-branch-3" display="Sub-Branch 3"/>
                      <SelectBranch name="branch-2-s4" value="branch-2-sub-branch-4" display="Sub-Branch 4"/>
                    </div>
                    <li><div className="sidebar-sc-text">Branch 3</div></li>
                    <div className="sidebar-sc-text" style={{marginBottom:"15px"}}>
                      <SelectBranch name="branch-3-s1" value="branch-3-sub-branch-1" display="Sub-Branch 1"/>
                    </div>
                </nav>

                <div className="sidebar-sc-text">
                  <button className="small">Use this version</button>
                  <button className="small">Create new branch</button>
                </div>
            </div>
        </div>
    );
}

export default SourceControl;