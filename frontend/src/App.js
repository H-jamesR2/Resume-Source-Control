import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, Link, NavLink } from "react-router-dom";
import './App.css';
import './cssFiles/Login.css';
import './cssFiles/Login.css';
import Homepage from './pages/Homepage';
import {Session} from "./components/UserContext"
import SignUp from "./pages/Signup";
import LogIn from "./pages/Login";
import './cssFiles/Login.css';
import Mainpage from "./pages/Mainpage";
import Resume from "./pages/Resume";
import Blocks from "./pages/Blocks";
import Settings from "./pages/Settings";
import Application from "./pages/Application";
//import BlockEditor from "./pages/BlockEditor";
import Profile from "./pages/Profile";
import TestPage from "./pages/TestPage";
import BlockEditor from "./pages/BlockEditor";
import ChangePassword from "./pages/EditPassword";
import ChangeEmail from "./pages/EditEmail";
import TextEditMCE from "./pages/TextEditMCE";


import UploadToS3 from "./pages/Temp";

//Method for listing objects
import ListResumesFromS3 from "./pages/ListResumes";


//<Route path="/blockeditor" element={<BlockEditor />} />
export default function App() {
  
  return (
      <div>
        <Session>
        <Routes>                  
            <Route index element = {<Homepage/>} />
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/login" element={<LogIn/>}/>
            <Route path="/mainpage" element={<Mainpage/>}/>
            <Route path="/mainpage/textEditorMCE" element={<TextEditMCE/>} />
            <Route path="/resume" element={<Resume/>}/>
            <Route path="/blocks" element={<Blocks/>}/>            
            <Route path="/settings" element={<Settings/>}/>
            <Route path="/changepassword" element={<ChangePassword/>}/>
            <Route path="/changeemail" element={<ChangeEmail/>}/>
            <Route path="/applications" element={<Application/>}/>
            <Route path="/blockeditor" element={<BlockEditor />} />

            <Route path="/profile" element={<Profile />} />
            <Route path="/testpage" element={<TestPage />} />


            {/* New route for upload Temp page */}
            <Route path="/upload" element={<UploadToS3 />} />

            <Route path="/list" element={<ListResumesFromS3 />} />




        </Routes>
        </Session>
      </div>
  );
}