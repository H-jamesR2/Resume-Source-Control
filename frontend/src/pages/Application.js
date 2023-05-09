import React, {useContext, useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import TopNav2 from "../components/TopNav2";
import NavBar from "../components/Navbar";
import TopNav from "../components/TopNav";
import AppTable from "../components/AppTable";
import AppInfoSideBar from "../components/AppInfoSideBar";
import { Navigate } from "react-router-dom";
import { SessionContext } from "../components/UserContext";

function Application(prop) {

    const {getUserSession} = useContext(SessionContext);
  
    const[isLoggedIn, setIsLoggedIn] = useState(false);
  
  
    useEffect(()=>{
       getUserSession().then(()=>{setIsLoggedIn(true);
       });
  
     },[]);

    const dataSource = [
        {
           id: 1,
           position: 'Software Engineer',
           company: 'Google',
           submissionDate: '03/05/2023',
           status: 'Interviewing',
           resume: 'Software Engineer Resume',
        },
        {
            id: 2,
            position: 'Game Developer',
            company: 'Roblox',
            submissionDate: '03/06/2023',
            status: 'Interviewing',
            resume: 'Game Dev Resume',
         },
         {
            id: 3,
            position: 'Software Engineer',
            company: 'Facebook',
            submissionDate: '03/09/2023',
            status: 'No Offer',
            resume: 'Software Engineer Resume',
         }
    ];
    return (
        <div>
            {isLoggedIn &&
                <>
            <TopNav2 />
            <div className="page-wrapper">
                <NavBar />
                <div className="main-content">
                    {/* add page content here */}
                    Applications
                    <AppTable data={dataSource}/>
                </div>
            </div>
            </>
            }
        </div>
    );
}

export default Application;