import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import TopNav2 from "../components/TopNav2";
import NavBar from "../components/Navbar";
import '../cssFiles/Resume-page.css';
import ResumeTemplateIcon from '../images/Resume Template Icon.png';
import ResumeIcon from '../images/Resume Icon.png';

function Resume(prop)
{
    return(
        <div>
            <TopNav2/>
            <div className="page-wrapper">                       
                <NavBar/>           
                <div className="main-content" style={{width:"calc(100% - 300px)"}}>
                    <div className="header-1">
                    Resume Templates
                    </div>
                    <div className="resume-template-section">
                        <ResumeTempCard text="Classical"/>                        
                        <ResumeTempCard text="Modern"/>
                        <ResumeTempCard text="Gayle McDowell"/>
                        <ResumeTempCard text="Hybrid"/>
                        <ResumeTempCard text="Colorful"/>
                        <ResumeTempCard text="Monospaced"/>
                        <ResumeTempCard text="SWE Check"/>
                        <ResumeTempCard text="Gamer Resume"/>
                        <ResumeTempCard text="a long title that doesn't fit"/>
                    </div>

                    <div className="header-1">
                    Resumes
                    </div>
                    <div className="resume-section">
                        <ResumeCard text="SWE - Google"/>                        
                        <ResumeCard text="SWE - Apple"/>
                        <ResumeCard text="SWE - Amazon"/>
                        <ResumeCard text="UI/UX - Google"/>
                        <ResumeCard text="UI/UX - Hunter College"/>
                        <ResumeCard text="UI/UX - Meta"/>
                        <ResumeCard text="Frontend - Discord"/>
                        <ResumeCard text="Frontend - Google"/>
                        <ResumeCard text="Backend - Microsoft"/>
                        <ResumeCard text="Backend - Disney"/>
                        <ResumeCard text="UI/UX - Disney"/>
                        <ResumeCard text="Teacher - NYCDOE Schools"/>
                        <ResumeCard text="Lecturer - Hunter College"/>
                        <ResumeCard text="Game Developer - Gameloft"/>
                        <ResumeCard text="Game Developer - Big Fish Games"/>
                        <ResumeCard text="Game Developer - Blizzard Entertainment"/>
                    </div>
                        <div style={{display:"flex", justifyContent:"center"}}>
                            <button>Show More</button>
                        </div>
                </div>
            </div>
        </div>
    );
}

function ResumeTempCard(props) {
    return (
    <div className="card-info">
        <img className="resume-template-image" src={ResumeTemplateIcon}></img>
        <div className="resume-caption">{props.text}</div>
    </div>
    )
}

function ResumeCard(props) {
    return (
    <div className="card-info">
        <img className="resume-image" src={ResumeIcon}></img>
        <div className="resume-caption">{props.text}</div>
    </div>
    )
}

export default Resume;