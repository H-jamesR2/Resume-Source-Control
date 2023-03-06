import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import NavBar from "../components/Navbar";

function Resume(prop)
{
    return(    

        <div className="page-wrapper">
            <NavBar/>
            <div className="main-content">Resume</div>
        </div>
    );
}

export default Resume;