import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import TopNav3 from "../components/TopNav3";
import NavBar from "../components/Navbar";
import JobParser from "../components/JobParser"

function JobParserPage(prop)
{
    return(                    
        <div>
          <TopNav3/>
            <div className="page-wrapper">
              <NavBar/>
              <div className="main-content">
              <JobParser></JobParser>
              </div>
            </div>
        </div>
    );
}


export default JobParserPage;