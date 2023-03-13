import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import NavBar from "../components/Navbar";

function Application(prop)
{
    return(    

        <div className="page-wrapper">
            <NavBar/>
            <div className="main-content">Applications</div>
        </div>
    );
}

export default Application;