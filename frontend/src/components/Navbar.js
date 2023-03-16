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
    }

    return (
        <div class="nav-wrapper">
            <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
            <div id="sidebar-wrapper" className={isOpen ? "open" : ""}>
                <div className="sidebar-top">
                    <img src={backButton} onClick={OpenSideBar} className="icon" />
                    <div>Menu</div>
                </div>
                <nav className="sidebar-bottom">
                    <li><Link to="/resume">Resumes</Link></li>
                    <li><Link to="/blocks">Blocks</Link></li>
                    <li><Link to="/applications">Applications</Link></li>
                </nav>
            </div>
        </div>
    );
}

export default NavBar;