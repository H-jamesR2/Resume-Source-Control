import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import Mainpage from "./Mainpage";
import TopNav from "../components/TopNav";
import Illustration from "../images/illustration.png"
import "../cssFiles/homepage.css";

// require authentication in order to show USER-specfic page
function Homepage(prop) {
    return (
        <div>
            <TopNav />
            <div className="page-wrapper">
                <div className="main-content">
                    {/* add page content here */}
                    <div className="text-wrap">
                        <div className="headline-wrapper">
                            <div className="home-brandname">Resume Source <br />Control</div>
                            <div className="home-illu" ><img src={Illustration}/></div>
                        </div>
                        <div className="home-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                        <div className="button-wrapper">Get Started</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;