import React, {useContext, useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import TopNav2 from "../components/TopNav2";
import NavBar from "../components/Navbar";
import TopNav from "../components/TopNav";
import { Navigate } from "react-router-dom";
import { SessionContext } from "../components/UserContext";

function Blocks(prop) {
    const {getUserSession} = useContext(SessionContext)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    useEffect(()=>{
        getUserSession().then(()=>{setIsLoggedIn(true)})
    },[])
    return (
        <div>
            {isLoggedIn &&
                <>
            <TopNav2 />
            <div className="page-wrapper">
                <NavBar />
                <div className="main-content">
                    {/* add page content here */}
                    Blocks
                </div>
            </div>
            </>
            }
        </div>
    );
}

export default Blocks;