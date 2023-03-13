import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import NavBar from "../components/Navbar";
import '../cssFiles/Settings.css';


function Settings(prop)
{
    return(    
        
        <div className="page-wrapper">
            <NavBar/>
            <div className="main-content">
              <div className = "settings-dialog-box">
                <div className ="settings-partition">
                    <p className = "header-1" style={{textAlign:"center", margin:"0"}}>
                      Account settings
                    </p>
                  </div>
                <div className= "settings-partition" style={{padding:"0 0 5px 0"}}>
                    <span>Current username: USERNAME</span>
                    <br></br>
                    <span>Username cannot be changed</span>
                  </div>
                  <div className= "settings-partition" style={{padding:"0 0 5px 0"}}>
                    <span>Current email: EMAIL</span>
                      <input
                        class={"text"}
                        placeholder={"Email"}
                      ></input>
                  </div>
                  <div className= "settings-partition" style={{padding:"0 0 5px 0"}}>
                      <input
                        class={"text"}
                        placeholder={"Current password"}
                        type={"password"}
                      ></input>
                  </div>
                  <div className= "settings-partition" style={{padding:"0 0 5px 0"}}>
                      <input
                        class={"text"}
                        placeholder={"New password"}                        
                        type={"password"}
                      ></input>
                  </div>
                  <div className= "button-partition">
                    <button className = "affirmative" type="submit">Update Account</button>
                    <button className = "negative" type="submit" style={{margin:"0 0 0 10px"}}>Delete Account</button>
                  </div>
              </div>
            </div>
        </div>

    );
}

export default Settings;