import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faChevronRight, faBars } from '@fortawesome/free-solid-svg-icons'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import '../cssFiles/navbar.css';
import { Button, Input } from "antd";

  
function AppInfoSideBar(prop) {
    const [isOpen, setIsOpen] = useState(false);

    function OpenSideBar() {
        setIsOpen(true);
    }
    function CloseSideBar() {
        setIsOpen(false);
    }
  return(
    <div className="nav-wrapper">
            <div id="sidebar-wrapper" className={isOpen ? "open" : "close"}>
                
                {/* <FontAwesomeIcon icon={faBars} size="2xl" id="openButton" className={isOpen ? "close" : "open"} onClick={OpenSideBar}/> */}
                <FontAwesomeIcon icon={faChevronRight} size="2xl" id="openButton" className={isOpen ? "close" : "open"} onClick={OpenSideBar}/>
                <div id="sidebar-top" >
                    {/* <img src={backButton} onClick={CloseSideBar} className="icon" /> */}
                    <FontAwesomeIcon icon={faAngleLeft} size="lg" className="icon" onClick={CloseSideBar} />
                    <div className="sidebar-text">Application Status</div>
                </div>
                <nav className="sidebar-bottom">
                    <div classname="sidebar-bottom-text">
                        
                        <div className="sidebar-text">Company: </div>
                        <div className="sidebar-text">Status: </div>
                        <div className="sidebar-text">Date Applied: </div>
                    </div>
                </nav>
                <div id="sidebar-bottom2">
                    <div className="sidebar-text">Job Description Scanner</div>
                </div>
                <Input id="scanner" placeholder="Paste the job description"></Input>
                
            </div>
        </div>
);
}
  
export default AppInfoSideBar;