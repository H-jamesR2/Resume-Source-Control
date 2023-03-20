import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import backButton from "../images/left-arrow.png"
import '../cssFiles/navbar.css';


function NavBar(prop) {
    const [isOpen, setIsOpen] = useState(false);

    function OpenSideBar() {
        setIsOpen(true);
    }
    function CloseSideBar() {
        setIsOpen(false);
        console.log(true);
    }

    return (
        <div class="nav-wrapper">
            <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
            <div id="sidebar-wrapper" className={isOpen ? "open" : "close"}>
                <button id="openButton" className={isOpen ? "close" : "open"} onClick={OpenSideBar}>Open</button>
                <div id="sidebar-top" >
                    <img src={backButton} onClick={CloseSideBar} className="icon" />
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