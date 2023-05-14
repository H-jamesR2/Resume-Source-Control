import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faChevronRight, faBars } from '@fortawesome/free-solid-svg-icons'
import { Button, Input } from "antd";

import SidebarCollapseInfo from "./sidebarCollapseInfo";
import '../cssFiles/navbar.css';


function AppInfoSideBar(prop) {
    const [isOpen, setIsOpen] = useState(false);
    const dataSource = [
        {
            id: 1,
            position: 'Software Engineer',
            company: 'Google',
            submissionDate: '03/05/2023',
            status: 'Interviewing',
            resume: 'Software Engineer Resume',
        },
        {
            id: 2,
            position: 'Game Developer',
            company: 'Roblox',
            submissionDate: '03/06/2023',
            status: 'Interviewing',
            resume: 'Game Dev Resume',
        },
        {
            id: 3,
            position: 'Software Engineer',
            company: 'Facebook',
            submissionDate: '03/09/2023',
            status: 'No Offer',
            resume: 'Software Engineer Resume',
        }
    ];

    function OpenSideBar() {
        setIsOpen(true);
    }
    function CloseSideBar() {
        setIsOpen(false);
    }
    return (
        <div className="nav-wrapper">
            <div id="sidebar-wrapper" className={isOpen ? "open" : "close"}>

                {/* <FontAwesomeIcon icon={faBars} size="2xl" id="openButton" className={isOpen ? "close" : "open"} onClick={OpenSideBar}/> */}
                <FontAwesomeIcon icon={faChevronRight} size="2xl" id="openButton" className={isOpen ? "close" : "open"} onClick={OpenSideBar} />
                <div className="sidebar-tophalf">
                    <div id="sidebar-top" >
                        {/* <img src={backButton} onClick={CloseSideBar} className="icon" /> */}
                        <FontAwesomeIcon icon={faAngleLeft} size="lg" className="icon" onClick={CloseSideBar} />
                        <div className="sidebar-text">Application Status</div>
                    </div>
                    <div className="sidebar-bottom">
                        <div classname="sidebar-bottom-text">
                            <SidebarCollapseInfo data={dataSource[0]} />
                            <SidebarCollapseInfo data={dataSource[1]} />
                            <SidebarCollapseInfo data={dataSource[2]} />
                        </div>
                    </div>
                </div>
                <div className="sidebar-bottomhalf">
                    <div id="sidebar-bottom2">
                        <div className="sidebar-text">Job Description Scanner</div>
                    </div>
                    <Input className="sidebar-text" id="scanner" placeholder="Paste the job description"></Input>
                </div>
            </div>
        </div>
    );
}

export default AppInfoSideBar;