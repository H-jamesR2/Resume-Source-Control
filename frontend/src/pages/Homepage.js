import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import Mainpage from "./Mainpage";
import TopNav from "../components/TopNav";

// require authentication in order to show USER-specfic page
function Homepage(prop)
{
    return(    
        
        <div>
            <TopNav/>
            Homepage
            <Link to="/mainpage">Main Page</Link>
        </div>
    );
}

export default Homepage;