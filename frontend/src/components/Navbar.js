import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Resume from "../pages/Resume";
import Blocks from "../pages/Blocks";
import backButton from "../images/left-arrow.png"


function NavBar(prop) {
    const [isOpen, setIsOpen] = useState(false);

    function OpenSideBar()
    {
        setIsOpen(true);
    }

    return (
        <div className="nav-wrapper">
        	<nav className="sidebar">
                
                <img src={backButton} onClick={OpenSideBar}/>
                <li>Menu</li>
        		<li><Link to="/resume">Resumes</Link></li>
                <li><Link to="/blocks">Blocks</Link></li>
                <li><Link to="/applications">Application</Link></li>
        	</nav>
        </div>
        // <Router>
        //     <Route render={({ location, history }) => (
        //         <React.Fragment>
        //             <SideNav
        //                 onSelect={(selected) => {
        //                     const to = '/' + selected;
        //                     if (location.pathname !== to) {
        //                         history.push(to);
        //                     }
        //                 }}
        //             >
        //                 <SideNav.Toggle />
        //                 <SideNav.Nav defaultSelected="resume">
        //                     <NavItem eventKey="resume">
        //                         <NavIcon>
        //                             <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
        //                         </NavIcon>
        //                         <NavText>
        //                             Resume
        //                         </NavText>
        //                     </NavItem>
        //                     <NavItem eventKey="block">
        //                         <NavIcon>
        //                             <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
        //                         </NavIcon>
        //                         <NavText>
        //                             Blocks
        //                         </NavText>
        //                     </NavItem>
        //                 </SideNav.Nav>
        //             </SideNav>
        //             <main>
        //                 <Route path="/resume" component={props => <Resume />} />
        //                 <Route path="/block" component={props => <Blocks />} />
        //             </main>
        //         </React.Fragment>
        //     )}
        //     />
        // </Router>
    //     <SideNav
    //         onSelect={(selected) => {
    //             // Add your code here
    //             <Link to="/resume"></Link>
    //         }}
    //     >
    //         <SideNav.Toggle />
    //         <SideNav.Nav defaultSelected="resume">
    //             <NavItem eventKey="resume">
    //                 <NavIcon>
    //                     <i className="fa fa-fw fa-resume" style={{ fontSize: '1.75em' }} />
    //                 </NavIcon>
    //                 <NavText>
    //                     Resume
    //                 </NavText>
    //             </NavItem>
    //             <NavItem eventKey="charts">
    //                 <NavIcon>
    //                     <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
    //                 </NavIcon>
    //                 <NavText>
    //                     Charts
    //                 </NavText>
    //                 <NavItem eventKey="charts/linechart">
    //                     <NavText>
    //                         Line Chart
    //                     </NavText>
    //                 </NavItem>
    //                 <NavItem eventKey="charts/barchart">
    //                     <NavText>
    //                         Bar Chart
    //                     </NavText>
    //                 </NavItem>
    //             </NavItem>
    //         </SideNav.Nav>
    //     </SideNav>
    );
}

export default NavBar;