import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import TopNav from "../components/TopNav";
import NavBar from "../components/Navbar";
import '../cssFiles/Resume-page.css';
import ResumeTemplateIcon from '../images/Resume Template Icon.png';
import ResumeIcon from '../images/Resume Icon.png';

function Resume(prop)
{
    return(
        <div>
            <TopNav/>
            <div className="page-wrapper">                       
                <NavBar/>           
                <div className="main-content" style={{width:"calc(100% - 300px)"}}>
                    <div className="header-1">
                    Resume Templates
                    </div>
                    <div className="resume-template-section">
                        <ResumeTempCard text="Test 1"/>                        
                        <ResumeTempCard text="Test 2"/>
                        <ResumeTempCard text="Test 3"/>
                        <ResumeTempCard text="Test 4"/>
                        <ResumeTempCard text="Test 5"/>
                        <ResumeTempCard text="Test 6"/>
                        <ResumeTempCard text="Test 7"/>
                        <ResumeTempCard text="Test 8"/>
                        <ResumeTempCard text="Test 9"/>
                        <ResumeTempCard text="Test 10"/>
                        <ResumeTempCard text="Test 11"/>
                        <ResumeTempCard text="a long title that doesn't fit"/>
                    </div>

                    <div className="header-1">
                    Resumes
                    </div>
                    <div className="resume-section">
                        <ResumeCard text="Test 1"/>                        
                        <ResumeCard text="Test 2"/>
                        <ResumeCard text="Test 3"/>
                        <ResumeCard text="Test 4"/>
                        <ResumeCard text="Test 5"/>
                        <ResumeCard text="Test 6"/>
                        <ResumeCard text="Test 7"/>
                        <ResumeCard text="Test 8"/>
                        <ResumeCard text="Test 9"/>
                        <ResumeCard text="Test 10"/>
                        <ResumeCard text="Test 11"/>
                        <ResumeCard text="Test 12"/>
                        <ResumeCard text="Test 13"/>
                        <ResumeCard text="Test 14"/>
                        <ResumeCard text="Test 15"/>
                        <ResumeCard text="Test 16"/>
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