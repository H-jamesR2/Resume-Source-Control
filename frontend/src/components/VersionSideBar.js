import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faBars } from '@fortawesome/free-solid-svg-icons'
import ResumeList from "../componentsDB/ResumeList";
import '../cssFiles/versionbar.css';

function VersionNavBar(prop) {
    const [isOpen, setIsOpen] = useState(false);

    function OpenSideBar() {
        setIsOpen(true);
    }
    function CloseSideBar() {
        setIsOpen(false);
    }

    return (
        <div className="nav-wrapper-right">
            <div id="sidebar-wrapper-right" className={isOpen ? "open" : "close"}>
                <FontAwesomeIcon icon={faBars} size="2xl" id="openButtonRight" className={isOpen ? "close" : "open"} onClick={OpenSideBar}/>
                <div id="sidebar-top-right" >
                    <FontAwesomeIcon icon={faAngleRight} size="lg" className="icon" onClick={CloseSideBar} />
                    <div className="sidebar-top-text-right">Versions</div>
                </div>
                <nav className="sidebar-bottom-right">
                    <ResumeList/>
                </nav>
            </div>
        </div>
    );
}

export default VersionNavBar;

