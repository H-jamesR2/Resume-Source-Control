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

import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import TopNav2 from "../components/TopNav2";
import NavBar from "../components/Navbar";
//import "../cssFiles/TextEditorMCE.css"

/*
    Access User Storage: from bucket
    import { Storage } from "@aws-amplify/storage"

    await Storage.put("test.txt", "Hello");
*/


const TextEditMCE = () => {
    const editorRef = useRef(null);
    /*const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };*/
    const [initialValue, setInitialValue] = useState(undefined);
    const [dirty, setDirty] = useState(false);
    useEffect(() => setDirty(false), [initialValue]);

    useEffect(() => {
        // a real application might do a fetch request here to get the content
        setTimeout(() => setInitialValue('<p>Once upon a time...</p>'), 500);
    }, []);

    const save = () => {
        if (editorRef.current) {
            const content = editorRef.current.getContent();
            setDirty(false);
            editorRef.current.setDirty(false);
            // an application would save the editor content to the server here
            console.log(content);
        }
    };
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
    return (
        <div>
            <TopNav2 />
            <div className="page-wrapper">
                <NavBar />
                <div name="Editor_MCE">
                    <Editor
                        //use diff apiKey for renewing premium feature;
                        //key1: 1j3wp2mvnlew5lkynzdndnzangmi9xfjg4yerztdh39llgew
                        //current: 2njwaznbravfvg70hgzv0dmeqfengiiqh340hmrb9vm262vm
                        apiKey='2njwaznbravfvg70hgzv0dmeqfengiiqh340hmrb9vm262vm'
                        onInit={(evt, editor) => (editorRef.current = editor)}
                        initialValue={initialValue}

                        init={{
                            height: "500px",
                            menubar: false,
                            plugins: [
                                'advlist', 'autolink', 'autoresize', 'autosave',
                                'lists', 'link', 'image', 'charmap', 'preview',
                                'fullscreen',
                                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount',
                                'save'

                            ],
                            toolbar: 'undo redo save | blocks fontfamily fontsize | ' +
                                'bold italic forecolor backcolor | link image | alignleft aligncenter ' +
                                'alignright alignjustify lineheight | bullist numlist outdent indent | ' +
                                'removeformat | help',
                            //content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                            content_style: 'body {background: #fff;} @media (min-width: 840px) {html {background: rgb(249 251 253);min-height: 100%;padding: 0 .5rem}body {background-color: #fff;box-shadow: 0 0 4px rgba(0, 0, 0, .15);box-sizing: border-box;margin: 1rem auto 0;max-width: 820px;min-height: calc(100vh - 1rem);padding:4rem 6rem 6rem 6rem}}',
                            toolbar_sticky: true,
                            statusbar: false,
                            //premium: cut out later?
                            skin: "material-outline",
                            icons: "material",
                            //content_style: "material-classic",

                            save_onsavecallback: function () { console.log('Saved'); }
                        }}
                    />
                    <button onClick={save} disabled={!dirty}>Save</button>
                    {dirty && <p>You have unsaved content!</p>}
                </div>
            </div>
        </div>
    );
    //<button onClick={log}>Log editor content</button>
}

export default TextEditMCE;