import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, Link, NavLink } from "react-router-dom";
import '../cssFiles/Login.css';
import logo from '../images/Resume-source-app.png'
import AddItems from "./AddContent";
import UserMenu from "./UserMenu";
import Person1 from '../images/Person-1.png'

import UserPool from "../UserPool";
import Person1 from '../images/Person-1.png'

import { useNavigate } from "react-router-dom";

// should pull Username once authenticated here ...
/* 
*/

//const {add_items, user_settings} = this.state;

//const [{getUserSession, signout}] = useContext(SessionContext);


<<<<<<< HEAD
=======
// should pull Username once authenticated here ...
/* 
*/
const Username = "Anthony";
>>>>>>> 3c34647345a71b33b5ebffbd378117fec898f8e8


//const [{getUserSession, signout}] = useContext(SessionContext);


<<<<<<< HEAD


function TopNav2(props) {
  const temp = UserPool.getCurrentUser();

const navigate = useNavigate();
const signout=()=>{
  const user = UserPool.getCurrentUser();
  if(user){
      user.signOut();
      console.log("Success: Signed Out")
      alert("Signed out")

      navigate('/login')
  } 
}

  
  //const {getUserSession, signout} = useContext(SessionContext)

    return (
        // Resume Logo [Icon] should go to About-page [Extra]
        // Once logged in, User should have different nav-bar such that it is able to click to a:
        // User Profile [Icon]
        <div>
            <div className="nav-bar">
                <ul className="nav-bar-left">
                    <li><img className={"resume-logo"} src={logo}></img></li>
                    <li className='nav-item'><Link className='no-decor' to="/">Home</Link></li>                    
                    <li className='nav-item'>
                        <b>+ ADD</b>
                    <div id="add-items" class="popup-menu">
                        <div>
                        <li className="popup-menu-item">Upload Resume</li>
                        <li className="popup-menu-item">Create Resume</li>
                        </div>
                    </div>
                    </li>
                </ul>
                <ul className="nav-bar-right">
                    <li 
                        className='nav-item-right'>
                        <img id={"profile-picture-w"} src={Person1} ></img> Hi, {temp.getUsername()}
                    <div id="user-menu" class="popup-menu">
                        <div>
                            <li className="popup-menu-item"><Link className='no-decor' to="/profile">Profile</Link></li>
                            <li className="popup-menu-item"><Link className='no-decor' to="/settings">Account Settings</Link></li>
                            <li className="popup-menu-item" onClick={signout}>Log Out</li>
                        </div>
                    </div>
                    </li>
                    
                </ul>
            </div>
            <Outlet />
        </div>
    );
=======
//function TopNav2(props) {
    
class TopNav2 extends Component {
    constructor() {
        super();
        this.state = {
            name: "React",
            add_items: false,
            user_settings: false
        };
        this.hideComponent = this.hideComponent.bind(this);
    }

    hideComponent(varname) {
        console.log(varname);
        switch (varname) {
            case "add_items":
                this.setState({ add_items: !this.state.add_items });
                break;
            case "user_settings":
                this.setState({ user_settings: !this.state.user_settings });
                break;
            default: return;
        }
    }
  //const {getUserSession, signout} = useContext(SessionContext)

    render() {
        const {add_items, user_settings} = this.state;
        const temp = UserPool.getCurrentUser();
        
        return (
            // Resume Logo [Icon] should go to About-page [Extra]
            // Once logged in, User should have different nav-bar such that it is able to click to a:
            // User Profile [Icon]
            <div>
                <div className="nav-bar">
                    <ul className="nav-bar-left">
                        <li><img className={"resume-logo"} src={logo}></img></li>
                        <li className='nav-item'><Link className='no-decor' to="/">Home</Link></li>                    
                        <li className='nav-item'>
                            <b>+ ADD</b>
                        <div id="add-items" class="popup-menu">
                            <div>
                            <li className="popup-menu-item">Upload Resume</li>
                            <li className="popup-menu-item">Create Resume</li>
                            </div>
                        </div>
                        </li>
                    </ul>
                    <ul className="nav-bar-right">
                        <li onMouseOver={() => this.hideComponent("user_settings")} className='nav-item'>Hi, {temp.getUsername()}</li>
                        {/* <li className='nav-item'><Link className='no-decor' to="/">Sign Out</Link></li> */}
                        <li 
                            className='nav-item-right'>
                            <img id={"profile-picture-w"} src={Person1} ></img> Hi, {Username}
                        <div id="user-menu" class="popup-menu">
                            <div>
                                <li className="popup-menu-item"><Link className='no-decor' to="/profile">Profile</Link></li>
                                <li className="popup-menu-item"><Link className='no-decor' to="/settings">Account Settings</Link></li>
                                <li className="popup-menu-item"><Link className='no-decor' to="/">Log Out</Link></li>
                            </div>
                        </div>
                        </li>
                    </ul>
                </div>
                <Outlet />
            </div>
        );
    }
>>>>>>> 3c34647345a71b33b5ebffbd378117fec898f8e8
}

export default TopNav2;