import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import NavBar from "../components/Navbar";
import TopNav from "../components/TopNav";


function Mainpage(prop) {
    return (
        <div>
            <TopNav />
            <div className="page-wrapper">
                <NavBar />
                <div className="main-content">
                    {/* add page content here */}
                    Main page after login
                </div>
            </div>
        </div>

    );
}

export default Mainpage;