import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import NavBar from "../components/Navbar";
import Settings from "./Settings";


function Mainpage(prop)
{
    return(    
        
        <div className="page-wrapper">
            <NavBar/>
            <div className="main-content">
                {/* add page content here */}
                Main page after login
                <br></br>                
                <Link to="/settings">Account Settings</Link>
            </div>
        </div>

    );
}

export default Mainpage;