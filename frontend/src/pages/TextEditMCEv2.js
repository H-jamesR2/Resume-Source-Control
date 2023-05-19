// imports


// Consider using markdown or lexical(facebook) (as base editor)

// Formatting 
    // Dates on Resume:
    //  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ---> adds 6 spaces between characters
    // Indenting bullet points --> need to find a way to configure
    //  spacing of bullet points.
    // --> need to figure out a way to map "spacing" to TAB key on browser;
    // --> need to figure out a wayt o map "indentation" on highlighted line:
        // to command/ctrl + "[" or "]" keys
        // - consider having header bar to configure indentation settings.

// const TextEdit()

// Tool Bar
// Text/Block-Space

// export default TextEdit

// npm install slate slate-react

import React, { useState, useContext, useEffect, useCallback, useMemo, useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import TopNav3 from "../components/TopNav3";
import NavBar from "../components/Navbar";
import AppInfoSideBar from "../components/AppInfoSideBar";
import VersionNavBar from "../components/VersionSideBar";

import { SessionContext } from "../components/UserContext";
import { configureAmplify, SetS3Config } from "../components/AmplifyConfigure";
import { Storage } from "aws-amplify";

import { useNavigate } from 'react-router-dom';
import axios from 'axios'

import "../cssFiles/TextEditMCE.css"

const identityId = localStorage.getItem('my-key')

/*
    Access User Storage: from bucket
    import { Storage } from "@aws-amplify/storage"

    await Storage.put("test.txt", "Hello");
*/
//const identityId = localStorage.getItem('my-key')

const TextEditMCE = () => {
    const navigate = useNavigate();
    const DocumentState = {
        resumeName: "",
        resumeContent: "",
        response: ""
    };

    /* Session Auth  */
    const { getUserSession } = useContext(SessionContext)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    useEffect(() => {
        getUserSession().then(() => { setIsLoggedIn(true) })
    }, [])

    /* Run Fetch Request on a File... */

    // const readDocument = () => {
    //     SetS3Config("resumeapps3", "protected");
    //     DocumentState.resumeContent = Storage.get(
    //         `userFiles/${DocumentState.resumeName}`,
    //         {   download: true }
    //     );
    // }

    /* GET: FILE 
        - update DocumentState+DocumentName
    */
    //console.log(JSON.parse(localStorage.getItem('myURLObject')));

    var [urlName, urlFile] = ["", ""];
    // if URL object exists
    if (localStorage.getItem("myURLObject") !== null){
        [urlName, urlFile] = JSON.parse(localStorage.getItem('myURLObject'));
    } else{

    }
    //const urlTest ="https://resumeapps3.s3.us-east-2.amazonaws.com/protected/us-east-2%3A5f33bbfc-c966-45d1-8b59-2642bf875182/userFiles/jake_ryan_TestResume.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA6DOFALTAH2DSHQGB%2F20230501%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230501T034632Z&X-Amz-Expires=3600&X-Amz-Signature=fe216a79c1cdc46aa15f4408ccaa03fa5a716f54d503ea4fd91c77c5e0f1b644&X-Amz-SignedHeaders=host&x-id=GetObject";
    //console.log(`${urlFile}`)
    //console.log(urlName.type, urlFile.type);
    DocumentState.resumeName = String(urlName);
     
    // urlObjectLink not found OR localStorage URLObject not found
    if (urlFile != "") {
        fetch(`${urlFile}`)
            .then(res => res.blob()) // Gets the response and returns it as a blob
            .then(blob => {
                //console.log("DEBUG"); 
                //console.log(blob);

                blob.text().then(text => {
                    //let blobText = text;
                    //console.log(blobText);
                    DocumentState.resumeContent = text;
                })
                //console.log("DEBUG"); 
            });
    } else {
        DocumentState.resumeContent = "";
    }



    /* Run Put Request on File TO S3 Database */
    
    // contentTYpe??
    // const uploadDocument = () => {
    //     SetS3Config("resumeapps3", "protected");
    //     Storage.put(`userFiles/${DocumentState.resumeName}`,
    //         DocumentState.resumeContent,
    //         { contentType: 'html'})
    //         .then(result => {
    //             //const upload = null;
    //             alert('Document uploaded to S3')

    //             // reset localStorage URL route to empty strings since SAVED
    //             localStorage.setItem('myURLObject', JSON.stringify(
    //                 ["", ""]))
    //             // return to mainpage since urlLink File changed...
    //             console.log(JSON.parse(localStorage.getItem('myURLObject')));
    //             setTimeout(function(){
    //                 navigate('/resume')
    //             }, 1500);
    //             //window.location.reload();
    //             // this.setState({ response: "Success uploading file!" });
    //         })
    //         .catch(err => {
    //             alert(err);
    //             window.location.reload();
    //         }
    //     );
    // }; 
    
    const uploadResume = async (file) => {
        const formData = new FormData();

        //const contentBlob = new Blob([post.content], {type: 'text/html'});
        formData.append('resume', file, `${DocumentState.resumeName}`);
        const key = `protected/${identityId}/userFiles`

        const response = await axios.post('http://localhost:3008/api/v1/resume/upload', formData, {
            headers: {
                "key": key
            }
        })
        alert("Resume uploaded to S3")

    }

     /*
        //const upload = null;
        alert('Document uploaded to S3')

        // reset localStorage URL route to empty strings since SAVED
        localStorage.setItem('myURLObject', JSON.stringify(
            ["", ""]))
        // return to mainpage since urlLink File changed...
        console.log(JSON.parse(localStorage.getItem('myURLObject')));
        setTimeout(function () {
            navigate('/resume')
        }, 1500);
                //window.location.reload();
                // this.setState({ response: "Success uploading file!" });
    } */

    const editorRef = useRef(null);
    /*const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };*/
    const [initialValue, setInitialValue] = useState(undefined);
    const [dirty, setDirty] = useState(false);
    useEffect(() => setDirty(false), [initialValue]);

    /*
    const getResumeData = () => {
        SetS3Config("resumeapps3", "protected");
        Storage.get(`userFiles/`)
            .then(({ result }) => {
                console.log(result);
                alert(`File: ${String(result)} obtained`);
            })
            .catch((err) => {
                console.log(err)
            });
    }; */
    // ` <--> ` back-ticks for long strings...
    /*
                    <h1 style="text-align: center;">This is a sample h1 Header Sentence</h1>
                <p style="text-align: center;">Followed by a paragraph with a <a href="https://tiny.cloud"
                    target="_blank" rel="noopener">SAMPLE LINK</a> showcasing it.</p>
    
                    */
    useEffect(() => {
        // a real application might do a fetch request here to get the content
        //DocumentState.resumeName = "jake_testResume_noGET.html";
        //readDocument();
        console.log((DocumentState.resumeName));
        console.log((DocumentState.resumeContent));
        setTimeout(() => setInitialValue(`
            ${DocumentState.resumeContent}
        `), 500);
    }, []);

    //saving --> need to 'get' FileName --> do dummy-test-for now..
    const save = () => {
        if (editorRef.current) {
            const content = editorRef.current.getContent();
            console.log(content)
            console.log(editorRef.current)
            
            setDirty(false);
            editorRef.current.setDirty(false);
            /*setState({
                resumeContent: content,
                resumeName: "jake_testResume_noGET.html"
            });*/
            const file = new Blob([content], { type: 'text/html' });
            console.log((DocumentState.resumeName));
            console.log((DocumentState.resumeContent));
            if(DocumentState.resumeName == ""){
                DocumentState.resumeName = "testResumeDEMOmay15.html";
            }   
            DocumentState.resumeContent = file;

            uploadResume(file);
            //uploadDocument();
            // an application would save the editor content to the server here
            console.log(content);
        }
    };

    const addBlockContent = () => {
        let sampleContent = `<p class="c25"><strong><span class="c5">Undergraduate Research Assistant&nbsp;</span></strong><span class="c1">June 2020 &ndash; Present&nbsp;</span><span class="c7">Texas A&amp;M University College Station, TX</span></p>
        <ul>
        <li class="c25"><span class="c0">Developed a REST API using FastAPI and PostgreSQL to store data from learning management systems</span></li>
        <li class="c25"><span class="c0">Developed a full-stack web application using Flask, React, PostgreSQL and Docker to analyze GitHub data</span></li>
        <li class="c25"><span class="c0">Explored ways to visualize GitHub collaboration in a classroom setting</span></li>
        </ul>
        `   
        //window.tinymce
        window.tinymce.execCommand('mceInsertContent', false, sampleContent);
        //editorRef.current.execCommand('mceInsertContent', false, sampleContent);
        //tinymce.activeEditor.execCommand('mceInsertContent', false, 'your content');
    }
    
    /*
    window.addEventListener("beforeunload", function (e) {
        var confirmationMessage = "\o/";

        (e || window.event).returnValue = confirmationMessage; //Gecko + IE
        console.log("CAN YOU READ THIS MESSAGE WITH Before Unload")
        return confirmationMessage;                            //Webkit, Safari, Chrome
    });
    //Reload
    window.addEventListener("unload", function (e) {
        var confirmationMessage = "\o/";

        (e || window.event).returnValue = confirmationMessage; //Gecko + IE
        console.log("CAN YOU READ THIS MESSAGE WITH Unload/Reload")
        return confirmationMessage;                            //Webkit, Safari, Chrome
    }); */
    /*
    const initialVal = useMemo(
        () =>
            JSON.parse(localStorage.getItem('content')) || [
                {
                    type: 'paragraph',
                    children: [{ text: 'A line of text in a paragraph.' }],
                },
            ],
        []
    ) */


    /**
    initialValue="
                    <p>This is the initial content of the editor.</p>
                "
     */
    /*
            <TopNav3 />
            <NavBar />
            
    */
    /*
        <div className="page-wrapper">
            <VersionNavBar/>
            <AppInfoSideBar />
        <div id="Editor_MCE"/> 
    */
    //removed autoresize
    return (
        <div>
            {isLoggedIn &&
            <>
                <TopNav3 />
            <div className="page-wrapper">
                    
                    
                    <AppInfoSideBar />
                    
                    
                    <div id="Editor_MCE">
                    <Editor
                        //classname ='container'
                        //use diff apiKey for renewing premium feature;
                        //key1:     1j3wp2mvnlew5lkynzdndnzangmi9xfjg4yerztdh39llgew
                        //key2:     2njwaznbravfvg70hgzv0dmeqfengiiqh340hmrb9vm262vm
                        //current:  1fbg79iiulybcn5hw4rwdk5ysvr5ppfuhlslsrkr7mjjanvq
                            apiKey='1fbg79iiulybcn5hw4rwdk5ysvr5ppfuhlslsrkr7mjjanvq'
                        onInit={(evt, editor) => (editorRef.current = editor)}
                        onDirty={() => setDirty(true)}
                        initialValue={initialValue}

                        init={{
                            height: "500px",
                            menubar: false,
                            plugins: [
                                'advlist', 'autolink', 'autosave',
                                'lists', 'link', 'image', 'charmap', 'preview',
                                'fullscreen',
                                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount',
                                'save', 'export'

                            ],
                            toolbar: 'undo redo save export | blocks fontfamily fontsize | ' +
                                'bold italic forecolor backcolor | link image | alignleft aligncenter ' +
                                'alignright alignjustify lineheight | bullist numlist outdent indent | ' +
                                'removeformat | help',
                            //content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                            content_style: 'body {background: #fff;} @media (min-width: 840px) {html {background: rgb(30 30 30);min-height: 100%;padding: 0 .5rem}body {background-color: #fff;box-shadow: 0 0 4px rgba(0, 0, 0, .15);box-sizing: border-box;margin: 1rem auto 0;max-width: 820px;min-height: calc(100vh - 1rem);padding:4rem 6rem 6rem 6rem}}',
                            toolbar_sticky: true,
                            statusbar: false,
                            //premium: cut out later?
                            //skin: "material-outline",
                            icons: "material",
                            //content_style: "material-classic",
                            save_onsavecallback: function () { console.log('Saved'); }
                        }}
                    />
                    <div id="footer-section">
                        <button onClick={save} disabled={!dirty}>Save</button>
                        {dirty && <p>You have unsaved content!</p>}
                        <button onClick={addBlockContent}> addBlockContent</button>
                    </div>
                    
                    </div>
                
                    <VersionNavBar />
            </div>
                    
            </>
            }
        </div>
    );
    //<button onClick={log}>Log editor content</button>
    /*
                            <button onClick={e => {
                                console.log(JSON.parse(localStorage.getItem('myURLObject')))
                            }}
                        > getURLobject
                        </button>
    */
}

export default TextEditMCE;


/*
OLD PLACEHOLDER VALUE:

        <p class="c28" style="text-align: center; line-height: 1;"><span style="text-decoration: underline; font-size: 24pt;"><strong><span class="c10">Jake Ryan </span></strong></span></p>
<p class="c27" style="text-align: center; line-height: 1;"><span style="font-size: 10pt;"><span class="c0">123-456-7890 </span><span class="c7">| </span><span class="c0">jake@su.edu </span><span class="c7">| </span><span class="c0">linkedin.com/in/jake </span><span class="c7">| </span><span class="c0">github.com/jake </span></span></p>
<p class="c19" style="line-height: 1;"><span class="c17" style="font-family: tahoma, arial, helvetica, sans-serif; font-size: 14pt;">Education</span></p>
<p class="c11" style="line-height: 1; padding-left: 40px;"><strong><span class="c5">Southwestern University</span></strong><span class="c1">&nbsp;Georgetown, TX </span><span class="c7">Bachelor of Arts in Computer Science, Minor in Business Aug. 2018 &ndash; May 2021</span></p>
<p class="c13" style="line-height: 1; padding-left: 40px;"><strong><span class="c5">Blinn College</span></strong><span class="c1"><strong>&nbsp;</strong>Bryan, TX </span><span class="c7">Associate&rsquo;s in Liberal Arts Aug. 2014 &ndash; May 2018 </span></p>
<p class="c26" style="line-height: 1;"><span style="font-family: tahoma, arial, helvetica, sans-serif; font-size: 14pt;"><span class="c17">Experience </span></span></p>
<p class="c25" style="line-height: 1;"><strong><span class="c5">Undergraduate Research Assistant </span></strong><span class="c1">June 2020 &ndash; Present </span><span class="c7">Texas A&amp;M University College Station, TX </span></p>
<ul>
<li class="c25" style="line-height: 1;"><span class="c2">&bull;&nbsp;</span><span class="c0">Developed a REST API using FastAPI and PostgreSQL to store data from learning management systems </span></li>
<li class="c25" style="line-height: 1;"><span class="c2">&bull;&nbsp;</span><span class="c0">Developed a full-stack web application using Flask, React, PostgreSQL and Docker to analyze GitHub data </span></li>
<li class="c25" style="line-height: 1;"><span class="c2">&bull;&nbsp;</span><span class="c0">Explored ways to visualize GitHub collaboration in a classroom setting </span></li>
</ul>
<p class="c9" style="line-height: 1;"><strong><span class="c5">Information Technology Support Specialist</span></strong><span class="c1">&nbsp;Sep. 2018 &ndash; Present </span><span class="c7">Southwestern University Georgetown, TX </span></p>
<ul>
<li class="c9" style="line-height: 1.3;"><span class="c2">&bull;&nbsp;</span><span class="c0">Communicate with managers to set up campus computers used on campus </span></li>
<li><span class="c2">&bull; </span><span class="c0">Assess and troubleshoot computer problems brought by students, faculty and staff </span></li>
<li><span class="c2">&bull; </span><span class="c0">Maintain upkeep of computers, classroom equipment, and 200 printers across campus </span></li>
</ul>
<p class="c12" style="line-height: 1;"><span class="c5"><strong>Artificial Intelligence Research Assistant</strong> </span><span class="c1">May 2019 &ndash; July 2019 </span><span class="c7">Southwestern University Georgetown, TX </span><span class="c2">&bull; </span><span class="c0">Explored methods to generate video game dungeons based off of </span><span class="c7">The Legend of Zelda </span></p>
<ul>
<li class="c29" style="line-height: 1.3;"><span class="c2">&bull; </span><span class="c0">Developed a game in Java to test the generated dungeons </span></li>
<li class="c16" style="line-height: 1.3;"><span class="c2">&bull; </span><span class="c0">Contributed 50K+ lines of code to an established codebase via Git </span></li>
<li class="c18" style="line-height: 1.3;"><span class="c2">&bull; </span><span class="c0">Conducted a human subject study to determine which video game dungeon generation technique is enjoyable </span></li>
<li class="c18" style="line-height: 1.3;"><span class="c2">&bull;&nbsp;</span><span class="c0">Wrote an 8-page paper and gave multiple presentations on-campus </span></li>
<li class="c8" style="line-height: 1.3;"><span class="c2">&bull; </span><span class="c0">Presented virtually to the World Conference on Computational Intelligence </span></li>
</ul>
<p class="c24" style="line-height: 1;"><span style="font-family: tahoma, arial, helvetica, sans-serif; font-size: 14pt;"><span class="c17">Projects </span></span></p>
<p class="c3" style="line-height: 1;"><em><strong><span class="c6">Gitlytics</span></strong></em><span class="c0">&nbsp;</span><span class="c7">| Python, Flask, React, PostgreSQL, Docker </span><span class="c1">June 2020 &ndash; Present </span></p>
<ul>
<li class="c3" style="line-height: 1.3;"><span class="c2">&bull;&nbsp;</span><span class="c0">Developed a full-stack web application using with Flask serving a REST API with React as the frontend </span></li>
<li class="c3" style="line-height: 1.3;"><span class="c2">&bull;&nbsp;</span><span class="c0">Implemented GitHub OAuth to get data from user&rsquo;s repositories </span></li>
<li class="c8" style="line-height: 1.5;"><span class="c2">&bull; </span><span class="c0">Visualized GitHub data to show collaboration </span></li>
<li class="c16" style="line-height: 1.5;"><span class="c2">&bull; </span><span class="c0">Used Celery and Redis for asynchronous tasks </span></li>
</ul>
<p class="c14" style="line-height: 1;"><em><strong><span class="c6">Simple Paintball</span><span class="c0">&nbsp;</span></strong></em><span class="c7">| Spigot API, Java, Maven, TravisCI, Git </span><span class="c1">May 2018 &ndash; May 2020 </span></p>
<ul>
<li class="c14" style="line-height: 1.3;"><span class="c2">&bull;&nbsp;</span><span class="c0">Cooperated with team to design and construct off-road vehicles capable of handling harsh driving condition </span></li>
<li class="c14" style="line-height: 1.3;"><span class="c2">&bull;&nbsp;</span><span class="c0">Serviced components for previous competition vehicles including steering replacement, brake bleeding, greasing, etc. </span></li>
<li class="c15" style="line-height: 1.3;"><span class="c2">&bull; </span><span class="c0">Implemented continuous delivery using TravisCI to build the plugin upon new a release </span></li>
<li class="c23" style="line-height: 1.3;"><span class="c2">&bull; </span><span class="c0">Collaborated with Minecraft server administrators to suggest features and get feedback about the plugin </span><span class="c17">Technical Skills </span></li>
</ul>
<p class="c20" style="line-height: 1;"><span style="font-size: 12pt;"><strong><span class="c6">Languages</span></strong><span class="c0">: Java, Python, C/C++, SQL (Postgres), JavaScript, HTML/CSS, R </span></span></p>
<p class="c22" style="line-height: 1;"><span style="font-size: 12pt;"><strong><span class="c6">Frameworks</span></strong><span class="c0">: React, Node.js, Flask, JUnit, WordPress, Material-UI, FastAPI </span></span></p>
<p class="c4" style="line-height: 1;"><span style="font-size: 12pt;"><strong><span class="c6">Developer Tools</span></strong><span class="c0">: Git, Docker, TravisCI, Google Cloud Platform, VS Code, Visual Studio, PyCharm, IntelliJ, Eclipse </span><span class="c6">Libraries</span><span class="c0">: pandas, NumPy, Matplotlib</span></span></p>
    


*/