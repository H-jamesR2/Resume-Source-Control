import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, Link, NavLink } from "react-router-dom";
import '../cssFiles/Login.css';
import logo from '../images/Resume-source-app.png'
import AddItems from "./AddContent";
import UserMenu from "./UserMenu";

const Username = "Anthony";

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

render() {
    const {add_items, user_settings} = this.state;
    return (
        // Resume Logo [Icon] should go to About-page [Extra]
        // Once logged in, User should have different nav-bar such that it is able to click to a:
        // User Profile [Icon]
        <div>
            {add_items && <AddItems/>}
            {user_settings && <UserMenu />}
            <div className="nav-bar">
                <ul className="nav-bar-left">
                    <li><img className={"resume-logo"} src={logo}></img></li>
                    <li className='nav-item'><Link className='no-decor' to="/">Home</Link></li>                    
                    <li onMouseOver={() => this.hideComponent("add_items")} className='nav-item'><b>+ ADD</b></li>
                </ul>
                <ul className="nav-bar-right">
                    <li onMouseOver={() => this.hideComponent("user_settings")} className='nav-item'>Hi, {Username}</li>
                    {/* <li className='nav-item'><Link className='no-decor' to="/">Sign Out</Link></li> */}
                </ul>
            </div>
            <Outlet />
        </div>
    );
}

}

export default TopNav2;