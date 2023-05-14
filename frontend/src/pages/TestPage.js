import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import TopNav3 from "../components/TopNav3";
import NavBar from "../components/Navbar";
import SourceControl from "../components/SourceControl";


function TestPage(prop)
{
    return(                    
        <div>
            <TopNav3/>
            <div className="page-wrapper">
                <NavBar/>
                <div className="main-content">
                </div>                
                <SourceControl/>
            </div>
        </div>
    );
}

export default TestPage;