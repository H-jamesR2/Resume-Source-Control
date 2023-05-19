import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faBars, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
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
        <div className="nav-wrapper">
            <div id="sidebar-wrapper-right" className={isOpen ? "open" : "close"}>
                <FontAwesomeIcon icon={faChevronLeft} size="2xl" id="openButtonRight" className={isOpen ? "close" : "open"} onClick={OpenSideBar}/>
                {isOpen && <>
                <div id="sidebar-top-right" >
                
                    <FontAwesomeIcon icon={faAngleRight} size="lg" className="icon" onClick={CloseSideBar} />
                     <div className="sidebar-top-text-right">Versions</div> 
                    {/*  */}
                </div> </>}
                <nav className="sidebar-bottom-right">
                    {isOpen && <> <ResumeList/> </>}
                    
                </nav>
            </div>
        </div>
    );
}

export default VersionNavBar;

