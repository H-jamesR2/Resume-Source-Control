import React, {useState, useEffect, useContext} from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import Mainpage from "./Mainpage";
import TopNav from "../components/TopNav";
import TopNav2 from "../components/TopNav2";
import Illustration from "../images/illustration.png"
import "../cssFiles/homepage.css";
import { SessionContext } from "../components/UserContext";

// require authentication in order to show USER-specfic page
function Homepage(prop) {
    const {getUserSession} = useContext(SessionContext);
  
    const[isLoggedIn, setIsLoggedIn] = useState(false);
  
  
    useEffect(()=>{
       getUserSession().then(()=>{setIsLoggedIn(true);
       });
  
     },[]);
    return (
        <div>
            { isLoggedIn && (
            <TopNav2 />
            )}

            { !isLoggedIn && (
            <TopNav />
            )}

            <div className="page-wrapper">
                <div className="main-content">
                    {/* add page content here */}
                    <div className="text-wrap">
                        <div className="headline-wrapper">
                            <div className="home-brandname">Resume Source <br />Control</div>
                            <div className="home-illu" ><img src={Illustration}/></div>
                        </div>
                        <p className="home-desc">The first source control-based utility app for resumes, cover letters, and more!</p>
                        <Link className="button-wrapper" to="/signup" style={{width:"220px"}}>Get Started</Link>
                        <div style={{minHeight:"200px"}}></div>
                        <h1 className="home-subheader">
                            Our Approach
                        </h1>
                        <p className="home-subdesc">
                        The general advice that is given in the job search is that you should tailor make  your resume for each job posting. But with 100s of job applications and different versions, this can easily become a logistical nightmare. Our solution is a form of Resume Source Control, which helps track changes throughout the years and individual applications.
                        </p>
                        <ul className="home-subdesc">
                            <li>To represent a main resume we decide to break your resume up into Block(s), single bits of experiences, i.e. a single project, or single job</li>
                            <li>Then you narrow down the resume into a Field Resume, made of Block(s) relevant to the field you are applying for, i.e. "Game Developer Resume" or "Software Engineer Resume"</li>
                            <li>Then you narrow down again into an Application Resume, this is a copy of a Field Resume and the user edits based on the company, i.e." Game Developer at Blizzard", "Game Developer at Riot", or "Software Engineer at Google"</li>
                        </ul>                        
                        <div style={{minHeight:"100px"}}></div>

                        { isLoggedIn && (
                        <div>
                            <div style={{textAlign:"center",justifyContent:"center",display:"flex"}}>
                                <h1 className="home-subheader">
                                    Ready to get hired?
                                </h1>
                            </div>
                            <div style={{textAlign:"center",justifyContent:"center",display:"flex"}}>
                                <Link className="button-wrapper" to="/resume">View Resumes</Link>
                            </div>
                        </div>
                        )}

                        { !isLoggedIn && (
                        <div>
                            <div style={{textAlign:"center",justifyContent:"center",display:"flex"}}>
                                <h1 className="home-subheader">
                                    Ready to get hired?
                                </h1>
                            </div>
                            <div style={{textAlign:"center",justifyContent:"center",display:"flex"}}>
                                <Link className="button-wrapper" to="/signup">Get Started</Link>
                            </div>
                        </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
}



export default Homepage;