import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import TopNav2 from "../components/TopNav2";
import NavBar from "../components/Navbar";
import TopNav from "../components/TopNav";
import AppTable from "../components/AppTable";

function Application(prop) {
    const dataSource = [
        {
           position: 'Software Engineer',
           company: 'Google',
           submissionDate: '03/05/2023',
           status: 'Scheduling Interview',
           resume: 'Software Engineer Resume',
        },
        {
            position: 'Game Developer',
            company: 'Roblox',
            submissionDate: '03/06/2023',
            status: 'Scheduling Interview',
            resume: 'Game Dev Resume',
         },
         {
            position: 'Software Engineer',
            company: 'Facebook',
            submissionDate: '03/09/2023',
            status: 'No Offer',
            resume: 'Software Engineer Resume',
         }
    ];
    return (
        <div>
            <TopNav2 />
            <div className="page-wrapper">
                <NavBar />
                <div className="main-content">
                    {/* add page content here */}
                    Applications
                    <AppTable data={dataSource}/>
                </div>
            </div>
        </div>
    );
}

export default Application;