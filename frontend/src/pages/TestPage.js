import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import TopNav2 from "../components/TopNav2";
import NavBar from "../components/Navbar";
import SourceControl from "../components/SourceControl";


function TestPage(prop)
{
    return(                    
        <div>
            <TopNav2/>
            <div className="page-wrapper">
                <NavBar/>
                <SourceControl/>
                <div className="main-content">
                </div>
            </div>
        </div>
    );
}

export default TestPage;