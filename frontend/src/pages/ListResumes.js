import React, { Component, useEffect, useState } from "react";
import {S3Client, GetObjectCommand, ListObjectsCommand} from '@aws-sdk/client-s3';
import {getSignedUrl} from '@aws-sdk/s3-request-presigner';
import TopNav2 from "../components/TopNav2";
import NavBar from "../components/Navbar";
import '../cssFiles/Resume-page.css';
import ResumeIcon from '../images/Resume Icon.png';
import Resume from "./Resume";
import {Amplify, Auth} from 'aws-amplify';


const AWS_ACCESS_KEY_ID='AKIA6DOFALTAH2DSHQGB'
const AWS_SECRET_ACCESS_KEY ='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'
const AWS_REGION='us-east-2'
const AWS_BUCKET_NAME='resumeapps3'
const identityId = localStorage.getItem('my-key')
console.log(identityId);


const ListResumesFromS3 = () => {
    
    //const identityId = currentCreds.identityId;
    // const currentCreds = Auth.signIn({})
    // const identityId = currentCreds.identityId;
    

    const[urls, setUrls] = useState([]);

    const client = new S3Client({region: AWS_REGION, 
        credentials:{
            accessKeyId: AWS_ACCESS_KEY_ID,
            secretAccessKey: AWS_SECRET_ACCESS_KEY
        
        }})


    async function getResumeKeys(){
        const path = `protected/${identityId}/userFiles`
        const command = new ListObjectsCommand({
            Bucket: AWS_BUCKET_NAME,
            Prefix: path
        })
    
        const {Contents = []} = await client.send(command);
        return Contents.map(resume => resume.Key);
    
    }
    
    async function getUrls(){
        try{
            const resumeKeys = await getResumeKeys();
            const presignedUrls = await Promise.all(resumeKeys.map((key)=>{
                const command = new GetObjectCommand({Bucket: AWS_BUCKET_NAME, Key: key});
                return getSignedUrl(client, command, {expiresIn: 3600})
            
            }));
            setUrls(presignedUrls);
            //return {presignedUrls}
        } catch (error) {
            console.log(error);
            //return {error}
    
        }
    
    }


    async function listResumes(){
        await getUrls();
        
    }

  
    useEffect(()=>{
        listResumes();
    }, []);
    

    return(
    
        <div>
        <TopNav2/>
        <div className="page-wrapper">
            <NavBar/>
            <div className="main-content">
                <div className="resume-section">
                    <ul>
                    {urls.map((url, index) => (
                        <a href={url} target="_blank">
                        <ResumeCard text={index}/>
                        </a>

                    ))}
                    </ul>
                </div>
                </div>    
                </div>
        </div>        
    )
    

}

export default ListResumesFromS3;

function ResumeCard(props) {
    return (
    <div className="card-info">
        <img className="resume-image" src={ResumeIcon}></img>
        <div className="resume-caption">{props.text}</div>
    </div>
    )
}

