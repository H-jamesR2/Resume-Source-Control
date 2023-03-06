import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import Mainpage from "./Mainpage";

function Homepage(prop)
{
    return(    

        <div>Homepage
            <Link to="/mainpage">Main Page</Link>
        </div>
    );
}

export default Homepage;