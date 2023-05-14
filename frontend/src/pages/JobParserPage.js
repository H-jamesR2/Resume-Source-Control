import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import TopNav2 from "../components/TopNav2";
import NavBar from "../components/Navbar";
import JobParser from "../components/JobParser"

function JobParserPage(prop)
{
    return(                    
        <div>
          <TopNav2/>
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