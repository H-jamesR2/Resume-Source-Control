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
                    <li><div className="sidebar-sc-text">Branch 1</div></li>
                      <li><div className="sidebar-sc-text" style={{fontSize:"70%",marginLeft:"12px"}}>Sub-Branch 1</div></li>
                      <li><div className="sidebar-sc-text" style={{fontSize:"70%",marginLeft:"12px"}}>Sub-Branch 2</div></li>
                    <li><div className="sidebar-sc-text">Branch 2</div></li>
                    <li><div className="sidebar-sc-text">Branch 3</div></li>
                      <li><div className="sidebar-sc-text" style={{fontSize:"70%",marginLeft:"12px"}}>Sub-Branch 1</div></li>
                </nav>
            </div>
        </div>
    );
}

export default SourceControl;