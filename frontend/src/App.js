import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, Link, NavLink } from "react-router-dom";
import './App.css';
import Homepage from './pages/Homepage';
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import './cssFiles/Login.css';
import logo from './images/Resume-source-app.png'
import Mainpage from "./pages/Mainpage";
import Resume from "./pages/Resume";
import Blocks from "./pages/Blocks";
//import TextEdit from "./pages/TextEdit";
//<Route path="/textEditor" element={<TextEdit/>}/>

import TextEditMCE from "./pages/TextEditMCE";

//amplify: --> need to go up two folders..
/*
import { Amplify } from 'aws-amplify';
import config from './aws-exports';
//
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';

import { Auth } from "aws-amplify";
// (await Auth.currentSession()).getIdToken().getJwtToken()
// import testing1 from "./pages/testing1";

Amplify.configure(config); */



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mainpage" element={<Mainpage />} />
          <Route path="/mainpage/textEditorMCE" element={<TextEditMCE />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/blocks" element={<Blocks />} />
          

        </Route>
      </Routes>
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

// <Route path="/testing1" element={< testEditor1 />} />

// Resume Logo [Icon] should go to About-page [Extra]
// Once logged in, User should have different nav-bar such that it is able to click to a:
// User Profile [Icon]
function Layout() {
  return (
    <div>
      <div className="nav-bar">
        <ul className="nav-bar-left">
          <li><img class={"resume-logo"} src={logo}></img></li>
          <li className='nav-item'><Link className='no-decor' to="/"             >Home</Link></li>
        </ul>
        <ul className="nav-bar-right">
          <li className='nav-item'><Link className='no-decor' to="/login"         >Login</Link></li>
          <li className='nav-item'><Link className='no-decor' to="/signup"        >Sign-Up</Link></li>
        </ul>
      </div>

      <Outlet />
    </div>
  );
}

export default App;