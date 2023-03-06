import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import NavBar from "../components/Navbar";

function Blocks(prop)
{
    return(    

        <div className="page-wrapper">
            <NavBar/>
            <div className="main-content">Blocks</div>
        </div>
    );
}

export default Blocks;