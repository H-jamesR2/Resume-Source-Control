import React, {useContext, useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink, useNavigate } from "react-router-dom";
import TopNav from "../components/TopNav";
import TopNav3 from "../components/TopNav3";
import NavBar from "../components/Navbar";
import '../cssFiles/Settings.css';
import UserPool from "../UserPool";
import { SessionContext } from "../components/UserContext";
import { Navigate } from "react-router-dom";

//const temp = UserPool.getCurrentUser();
//temp.getUserAttributes


function Settings(prop)
{   
  const {getUserSession} = useContext(SessionContext);

  const[isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(()=>{
    getUserSession().then(()=>{setIsLoggedIn(true);
    });

},[]);
  
    return(    
        <div>
          {isLoggedIn &&
            <>
            <TopNav3/>
            <div className="page-wrapper">
              <NavBar/>
                <div className="main-content">
                  <div className = "settings-dialog-box">
                    <div className ="settings-partition">
                      <h1 style={{textAlign:"center", margin:"0"}}>
                        Account settings
                      </h1>

                      <br></br>
                      

                    </div>
                    <div className= "button-partition">

                      <button className = "affirmative" type="submit"><Link className='no-decor-button' to="/changepassword">Change Password</Link></button>

                    </div>

                    <br></br>

                    <div className="button-partition">

                      <button className = "affirmative" type="submit"><Link className='no-decor-button' to="/changeemail">Change Email</Link></button>
                      
                      {/* <button className = "negative" type="submit" style={{margin:"0 0 0 10px"}}>Delete Account</button> */}
                    </div>
                    </div>
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

export default Settings;