import React, {useContext, useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import TopNav2 from "../components/TopNav2";
import NavBar from "../components/Navbar";
import Settings from "./Settings";
import JobParser from "../components/JobParser";
import { SessionContext } from "../components/UserContext";
import { Navigate } from "react-router-dom";


function Mainpage()
{
    const {getUserSession} = useContext(SessionContext);
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    useEffect(()=>{
        getUserSession().then(()=>{setIsLoggedIn(true)})
    },[]);
    
    return(    
        <div>
            {isLoggedIn && (
            <div>   
                <TopNav2/>
                <div className="page-wrapper">
                    <NavBar/>
                    <div className="main-content">
                        {/* add page content here */}
                        Main page after login
                        <br></br>
                        
                        <Link to="/mainpage/textEditorMCE"> TextEditMCE-placeholder-button </Link> 
                        <br></br>
                                                  
                        <Link to="/settings">Account Settings</Link>
                        <JobParser></JobParser>
                        
                       
                    </div>
                </div>
            </div>
            )}
        </div>
    );
};

export default Mainpage;