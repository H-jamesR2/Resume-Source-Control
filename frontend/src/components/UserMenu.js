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
      <li className="popup-menu-item">Profile</li>
      <li className="popup-menu-item">Account Settings</li>
      <li className="popup-menu-item">Log Out</li>
    </div>
  </div>;
  }
}
  
export default UserMenu;