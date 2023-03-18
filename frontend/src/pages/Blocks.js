import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import TopNav2 from "../components/TopNav2";
import NavBar from "../components/Navbar";

function Blocks(prop)
{
    return(    
        <div>
        <TopNav2/>
        <div className="page-wrapper">
            <NavBar/>
            <div className="main-content">Blocks</div>
        </div>
        </div>
    );
}

export default Blocks;