import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import TopNav2 from "../components/TopNav2";
import NavBar from "../components/Navbar";
import Settings from "./Settings";


function Profile(prop)
{
    return(    
        <div>
            <TopNav2/>
            <div className="page-wrapper">
                <NavBar/>
                <div className="main-content">
                Profile Page
                </div>
            </div>
        </div>
    );
}

export default Profile;