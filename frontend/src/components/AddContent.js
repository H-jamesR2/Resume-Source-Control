import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, Link, NavLink } from "react-router-dom";
import '../cssFiles/topbar.css';
  
class AddContent extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }
  
  render() {
    return <div id="add-items" class="popup-menu">
      <div>
        <li className="popup-menu-item">Upload Resume</li>
        <li className="popup-menu-item">Create Resume</li>
      </div>
    </div>;
  }
}
  
export default AddContent;