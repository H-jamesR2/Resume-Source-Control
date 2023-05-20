import React, {useState, useEffect, useContext} from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import TopNav from "../components/TopNav";
import TopNav2 from "../components/TopNav2";
import NavBar from "../components/Navbar";
import '../cssFiles/Resume-page.css';
import ResumeTemplateIcon from '../images/Resume Template Icon.png';
import ResumeIcon from '../images/Resume Icon.png';
import { Navigate, useNavigate } from "react-router-dom";
import { SessionContext } from "../components/UserContext";

//
import { S3Client, GetObjectCommand, ListObjectsCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import '../cssFiles/Resume-page.css';
import { Amplify, Auth } from 'aws-amplify';
import JobParser from "../components/JobParser"

// Need to parse better;
const AWS_ACCESS_KEY_ID = 'AKIA6DOFALTAH2DSHQGB'
const AWS_SECRET_ACCESS_KEY = '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'
const AWS_REGION = 'us-east-2'
const AWS_BUCKET_NAME = 'resumeapps3'
const identityId = localStorage.getItem('my-key')
console.log(identityId);

function Resume(prop)
{
    const {getUserSession} = useContext(SessionContext);
  
    const[isLoggedIn, setIsLoggedIn] = useState(false);
  
    useEffect(()=>{
       getUserSession().then(()=>{setIsLoggedIn(true);
       });
  
     },[]);

     // FORKED OVER from ListResume
     const navigate = useNavigate();
     //const identityId = currentCreds.identityId;
     // const currentCreds = Auth.signIn({})
     // const identityId = currentCreds.identityId;
 
 
     const [urls, setUrls] = useState([]);
 
     const client = new S3Client({
         region: AWS_REGION,
         credentials: {
             accessKeyId: AWS_ACCESS_KEY_ID,
             secretAccessKey: AWS_SECRET_ACCESS_KEY
 
         }
     })
 
 
     async function getResumeKeys() {
         const path = `protected/${identityId}/userFiles`
         const command = new ListObjectsCommand({
             Bucket: AWS_BUCKET_NAME,
             Prefix: path
         })
 
         const { Contents = [] } = await client.send(command);
         return Contents.map(resume => resume.Key);
 
     }
 
     async function getUrls() {
         try {
             const resumeKeys = await getResumeKeys();
             const presignedUrls = await Promise.all(resumeKeys.map((key) => {
                 const command = new GetObjectCommand({ Bucket: AWS_BUCKET_NAME, Key: key });
                 return getSignedUrl(client, command, { expiresIn: 3600 })
 
             }));
             setUrls(presignedUrls);
             //return {presignedUrls}
         } catch (error) {
             console.log(error);
             //return {error}
 
         }
 
     }
 
 
     async function listResumes() {
         await getUrls();
 
     }
 
 
     useEffect(() => {
         listResumes();
     }, []);
 
     function getResumeCardName(urlString) {
         let items = String(urlString).split('/');
 
         const object_path = items.slice(-1)[0];
         //console.log(object_path);
         const object_name = object_path.split('?').slice(0)[0];
         console.log(object_name);
         return object_name
     }
 
     function getObjectFileType(objectName){
         let items = String(objectName).split('.');
         
         const object_type = items.slice(-1)[0];
         return object_type
     }

    return(
        <div>
            {isLoggedIn &&
            <>
            <TopNav2/>
            <div className="page-wrapper">                       
                <NavBar/>           
                <div className="main-content">
                <h1>Resumes</h1>
                <div className="resume-section" >
                            <ul>
                                {urls.map((url, index) => (
                                    <div className="card-info" onClick={e => {
                                        let urlFileName = getResumeCardName(url);
                                        let urlFileType = getObjectFileType(urlFileName);

                                        localStorage.setItem('myURLObject', JSON.stringify(
                                            [urlFileName, url]))
                                        console.log("Filetype: ",urlFileType);
                                        console.log(index, urlFileName, url);
                                        console.log(JSON.parse(localStorage.getItem('myURLObject')));

                                        /*  if document editable.. 
                                            -> navigate to application-Resume editor */
                                        if(urlFileType == "html"){
                                            window.open("/resume/textEditorMCEv2", "_blank", "noreferrer");
                                            // navigate('/resume/textEditorMCEv2');
                                            console.log("Navigating to: /resume/textEditorMCE")
                                        }
                                        // add function to navigate to field-Resume editor
                                    }}>
                                        <a href={url} target="_blank"
                                        >
                                            <ResumeCard text={
                                                getResumeCardName(url)
                                            } />
                                        </a>
                                    </div>
                                ))}
                            </ul>
                        </div>
                </div>
            </div>
            </>
           }
           { !isLoggedIn && (
            <div>   
                <TopNav/>
                <div className="page-wrapper">
                    <div className="main-content">
                    You are not logged in. Please log in or sign up to continue.
                    </div>
                </div>
            </div>
            )}
        </div>
    );
}

function ResumeCard(props) {
    return (
    <div>
        <img className="resume-image" src={ResumeIcon}></img>
        <div className="resume-caption">{props.text}</div>
    </div>
    )
}

export default Resume;