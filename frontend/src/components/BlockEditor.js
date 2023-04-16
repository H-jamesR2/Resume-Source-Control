import React, {useContext,useState, useEffect} from "react";
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';


//will probably remove when connected to database
import FileSaver from 'file-saver';


function Editor () {

    const [blocks, setBlocks] = useState([]);
    const [editor, setEditor] = useState([]);

    useEffect(()=>{
      fetch('editor-data.json')
      .then((response) => response.json())
      .then((data)=> setBlocks(data));
    },[]);


    useEffect(() => {
                 
      // Initialize the Editor.js instance
      const editorInstance = new EditorJS({
        holder : 'editorjs',
        autofocus: true,

        tools:{
          class:Header,
          header:{
          inlineToolbar: true,
          class:List,
        },
      },
      data: blocks,
      minHeight:0
  

      });
      setEditor(editorInstance);
    }, [blocks]);


    //saving to local currently, will change to connect to database
  const handleSave = () =>{
  editor.save().then((outputData) => {
    console.log('Article data: ', outputData)
    const file = new Blob([JSON.stringify(outputData)], { type: 'application/json' });
    FileSaver.saveAs(file, 'editor-data.json');
  }).catch((error) => {
    console.log('Saving failed: ', error)
  });
  
  };

return (
  <div>
    {/* Render the Editor.js instance */}
    <div id="editorjs"></div>
    {/* Save button */}
    <button onClick={handleSave}>Save</button>
  </div>
);
}

export default Editor;

//old code
  // async function handleSave () {
  //   const data = await editor.save(); // Get the data from Editor.js
  //   setEditor(data);
  //   const file = new Blob([JSON.stringify(data)], { type: 'application/json' }); // Create a new Blob object
  //   FileSaver.saveAs(file, 'editor-data.json'); // Save the file using FileSaver.js
  // };


  //prebuilt data
// const Editor = () => {
//   const editorRef = React.useRef(null);

//   React.useEffect(() => {
//     const editor = new EditorJS({
//       holder: editorRef.current,
//       autofocus: true,
//       tools: {
//         header: Header,
//         list: List,
//        // Add other Editor.js plugins here
//       },
//       data: {
//         // Added dummy text
//         blocks: [
//           {
//             type: 'header',
//             data: {
//               text: 'Block Editor Demo',
//               level: 1,
//             },
//           },
//           {
//             type: 'list',
//             data: {
//               style: 'unordered',
//               items: ['First', 'Second', 'Third'],
//             },
//           },
//         ],
//       },
//     });
//     }, 
// );