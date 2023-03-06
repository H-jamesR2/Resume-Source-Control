import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import logo from './images/logo.svg';
import './App.css';
import Homepage from './pages/Homepage';
import Mainpage from "./pages/Mainpage";
import Resume from "./pages/Resume";
import Blocks from "./pages/Blocks";

function App() {
  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/mainpage" element={<Mainpage/>}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/blocks" element={<Blocks/>}/>
      </Routes>
    </Router>
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

export default App;
