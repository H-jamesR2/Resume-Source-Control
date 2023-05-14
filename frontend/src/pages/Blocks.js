import React, {useContext, useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import TopNav from "../components/TopNav";
import TopNav2 from "../components/TopNav2";
import NavBar from "../components/Navbar";
import { Navigate } from "react-router-dom";
import { SessionContext } from "../components/UserContext";
import Editor from "../components/BlockEditor"


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
                    <Editor />
                </div>
            </div>
            </>
            }
            { !isLoggedIn && (
            <div>   
                <TopNav/>
                <div className="page-wrapper">
                    <div className="main-content">
                    You are not logged in. Please log in or sign up to continue.
                    </div>
                </div>
            </div>
            )}
        </div>
    );
}

export default Blocks;