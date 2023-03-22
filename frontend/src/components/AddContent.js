import React, { Component } from "react";
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
        <li className="popup-menu-item">Create Resume Template</li>
        <li className="popup-menu-item">Create Resume</li>
        <li className="popup-menu-item">Track Application</li>
      </div>
    </div>;
  }
}
  
export default AddContent;