import React, { Component, useContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, Link, NavLink } from "react-router-dom";
import '../cssFiles/topbar.css';
import { SessionContext } from "./UserContext";
import UserPool from "../UserPool";
import { useNavigate } from "react-router-dom";

//const {signout} = useContext(SessionContext);


// const [isLoggedIn, setisLoggedIn] = useState(false);
//     useEffect(()=>{
//         getUserSession().then(()=>{
//             setisLoggedIn(true);
            
//             //const temp = UserPool.getCurrentUser()      
//             //console.log(temp.getUsername());
//         });

//     },[getSession]);




class UserMenu extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }
  


  render() {
    
    //const navigate = useNavigate();

    const signout=()=>{
    const user = UserPool.getCurrentUser();
    if(user){
        user.signOut();
        console.log("Success: Signed Out")
        
        //const navigate = useNavigate();
        //navigate('/login')
    } 
    }

    return <div id="user-menu" class="popup-menu">
    <div>
      <li className="popup-menu-item"><Link className='no-decor' to="/profile">Profile</Link></li>
      <li className="popup-menu-item"><Link className='no-decor' to="/settings">Account Settings</Link></li>
      <li className="popup-menu-item" onClick={signout}><Link className='no-decor' to="/login">Log Out</Link></li>

      {/* <li className='popup-menu-item'>
        <button class='logout' onClick={signout}><Link className = "logout" to="/login">Sign Out</Link></button>
      </li> */}
    
    </div>
  </div>;
  }
}
  
export default UserMenu;