import React, {useContext, useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import TopNav from "../components/TopNav";
import TopNav3 from "../components/TopNav3";
import NavBar from "../components/Navbar";
import Settings from "./Settings";
import Person1 from "../images/Person-1.png";
import "../cssFiles/Profile.css";
import { Navigate } from "react-router-dom";
import { SessionContext } from "../components/UserContext";

function Profile(prop)
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
                  <div className="header-1">Edit your profile, username</div>                
                  <div className="header-2">Profile picture</div>
                  <div style={{display:"flex", flexDirection:"row"}}>
                    <img src={Person1} style={{width:"128px"}}></img>
                    <div style={{display:"flex", flexDirection:"column", width:"120px"}}>
                      <button className="small" style={{margin:"6px 0px 3px 10px"}}>Upload new</button>
                      <button className="smallnegative" style={{margin:"3px 0px 6px 10px"}}>Remove</button>
                    </div>
                  </div>
                  <div className="header-2">Other information</div>
                  <div className="name-split">
                  <input
                    className={"text"}
                    placeholder={"First Name"}
                  ></input>
                  <input
                    className={"text"}
                    placeholder={"Middle Name"}
                  ></input>
                  <input
                    className={"text"}
                    placeholder={"Last Name"}
                  ></input>
                  <select
                    placeholder={"Pronouns"} 
                  >                  
                    <option>Pronouns unset</option>
                    <option>No pronouns</option>
                    <option>Any pronouns</option>
                    <option>he/his/him</option>
                    <option>she/her</option>
                    <option>they/their/them</option>
                    <option>ze/zir</option>
                    <option>xe/xem</option>
                    <option>it/its</option>
                  </select>
                </div>                
                <div className="header-2">What are your career preferences?</div>
                <div>Career preferences are comma-separated</div>
                <textarea id="career-pref"></textarea>
                <div style={{display:"flex", justifyContent:"center"}}>
                  <button>Save changes</button>
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

export default Profile;