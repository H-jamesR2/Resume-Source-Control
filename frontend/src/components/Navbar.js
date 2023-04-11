import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faBars } from '@fortawesome/free-solid-svg-icons'

import '../cssFiles/navbar.css';

function NavBar(prop) {
    const [isOpen, setIsOpen] = useState(false);

    function OpenSideBar() {
        setIsOpen(true);
    }
    function CloseSideBar() {
        setIsOpen(false);
    }

    return (
        <div className="nav-wrapper">
            <div id="sidebar-wrapper" className={isOpen ? "open" : "close"}>
                
                <FontAwesomeIcon icon={faBars} size="2xl" id="openButton" className={isOpen ? "close" : "open"} onClick={OpenSideBar}/>
                <div id="sidebar-top" >
                    {/* <img src={backButton} onClick={CloseSideBar} className="icon" /> */}
                    <FontAwesomeIcon icon={faAngleLeft} size="lg" className="icon" onClick={CloseSideBar} />
                    <div className="sidebar-text">Menu</div>
                </div>
                <nav className="sidebar-bottom">
                    <li><Link to="/resume"><div className="sidebar-text">Resumes</div></Link></li>
                    <li><Link to="/blocks"><div className="sidebar-text">Block</div></Link></li>
                    <li><Link to="/applications"><div className="sidebar-text">Applications</div></Link></li>
                </nav>
            </div>
        </div>
    );
}

export default NavBar;