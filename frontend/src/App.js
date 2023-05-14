import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, Link, NavLink } from "react-router-dom";
import './App.css';
import './cssFiles/styles.css';
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
import JobParserPage from "./pages/JobParserPage";
import Profile from "./pages/Profile";
import TestPage from "./pages/TestPage";
import BlockEditor from "./pages/BlockEditor";
import ChangePassword from "./pages/EditPassword";
import ChangeEmail from "./pages/EditEmail";
import TextEditMCE from "./pages/TextEditMCE";


import UploadToS3 from "./pages/Temp";

//Method for listing objects
import ListResumesFromS3 from "./pages/ListResumes";


//DB
import Data from "./pages/Data";

import {UniContextProvider} from './context/UniContext'

import UpdateContact from "./componentsDB/UpdateContact";

import UpdateEducation from "./componentsDB/UpdateEducation";

import UpdateJob from "./componentsDB/UpdateJob";
import UpdateProject from "./componentsDB/UpdateProject";
import UpdateExtracurricular from "./componentsDB/UpdateExtracurricular";


import UpdateSkill from "./componentsDB/UpdateSkill";
//<Route path="/blockeditor" element={<BlockEditor />} />
//            <Route path="/blocks" element={<Blocks/>}/>
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
            
            <Route path="/settings" element={<Settings/>}/>
            <Route path="/changepassword" element={<ChangePassword/>}/>
            <Route path="/changeemail" element={<ChangeEmail/>}/>
            <Route path="/applications" element={<Application/>}/>
            <Route path="/blockeditor" element={<BlockEditor />}/>
            <Route path="/jobparser" element={<JobParserPage/>}/>
            <Route path="/profile" element={<Profile />} />
            <Route path="/testpage" element={<TestPage />} />


            {/* New route for upload Temp page */}
            <Route path="/upload" element={<UploadToS3 />} />

            <Route path="/list" element={<ListResumesFromS3 />} />




        </Routes>
        </Session>

        <UniContextProvider>
        <Routes>
            <Route path="/blocks" element={<Data/>} />
            <Route path="/blocks/:id/updateContact" element={<UpdateContact/>}/>
            <Route path="/blocks/:id/updateEducation" element={<UpdateEducation/>}/>
            <Route path="/blocks/:id/updateJob" element={<UpdateJob/>}/>
            <Route path="/blocks/:id/updateProject" element={<UpdateProject/>}/>
            <Route path="/blocks/:id/updateExtracurricular" element={<UpdateExtracurricular/>}/>
            <Route path="/blocks/:id/updateSkill" element={<UpdateSkill/>}/>

        </Routes>
        </UniContextProvider>
      </div>
  );
}