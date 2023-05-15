import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faChevronRight, faBars } from '@fortawesome/free-solid-svg-icons'
import { Button, Input } from "antd";

import EditableBlocks from "./editableBlocks";
import '../cssFiles/navbar.css';


function BlockSideBar(prop) {
    const [isOpen, setIsOpen] = useState(false);
    const dataSource = [
        {
            id: "2",
            name: "GoDaddy",
            role: "Software Engineer Intern",
            start_date: "1/1/2022",
            description: "test",
            end_date: "1/1/2023"
        },
        {
            id: "3",
            name: "Duolinguo",
            role: "Software Engineer Intern",
            start_date: "1/1/2020",
            description: "test",
            end_date: "1/1/2021"
        },
        {
            id: "1",
            name: "Computer Science Club",
            role: "Team Captain",
            start_date: "1/1/2017",
            description: "test",
            end_date: "1/1/2018"
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
                        {/* <img src={backButton} onClick={CloseSideBar} className="icon" />
                        <FontAwesomeIcon icon={faAngleLeft} size="lg" className="icon" onClick={CloseSideBar} /> */}
                        <div className="sidebar-text">Blocks</div>
                    </div>
                    <div className="sidebar-bottom">
                        <div classname="sidebar-bottom-text">
                            <div className="label-text">Jobs</div> <hr className="label-text" />
                            <EditableBlocks data={dataSource[0]} />
                            <EditableBlocks data={dataSource[1]} />
                            <div className="label-text">Extracurriculars</div> <hr className="label-text" />
                            <EditableBlocks data={dataSource[2]} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default BlockSideBar;