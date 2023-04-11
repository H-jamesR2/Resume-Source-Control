import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, Link, NavLink } from "react-router-dom";
import '../cssFiles/topbar.css';
  
class UserMenu extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }
  
  render() {
    return <div id="user-menu" class="popup-menu">
    <div>
      <li className="popup-menu-item"><Link className='no-decor' to="/profile">Profile</Link></li>
      <li className="popup-menu-item"><Link className='no-decor' to="/settings">Account Settings</Link></li>
      <li className="popup-menu-item"><Link className='no-decor' to="/">Log Out</Link></li>
    </div>
  </div>;
  }
}
  
export default UserMenu;