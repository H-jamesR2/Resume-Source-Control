import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, Link, NavLink } from "react-router-dom";
import '../cssFiles/Login.css';
import logo from '../images/Resume-source-app.png'


function TopNav(prop) {
    return (
        // Resume Logo [Icon] should go to About-page [Extra]
        // Once logged in, User should have different nav-bar such that it is able to click to a:
        // User Profile [Icon]
        <div>
            <div className="nav-bar">
                <ul className="nav-bar-left">
                    <li><img class={"resume-logo"} src={logo}></img></li>
                    <li className='nav-item'><Link className='no-decor' to="/">Home</Link></li>
                    {/* <li className='nav-item'><Link className='no-decor' to="/mainpage">Main</Link></li> */}
                </ul>
                <ul className="nav-bar-right">
                    <li className='nav-item'><Link className='no-decor' to="/login">Login</Link></li>
                    <li className='nav-item'><Link className='no-decor' to="/signup">Sign-Up</Link></li>
                </ul>
            </div>

            <Outlet />
        </div>
    );
}

export default TopNav;