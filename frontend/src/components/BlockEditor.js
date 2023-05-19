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

// latest code that isn't used for project

// import React, {useRef,useContext,useState, useEffect} from "react";
// import EditorJS from '@editorjs/editorjs';
// import Header from '@editorjs/header';
// import List from '@editorjs/list';
// import AlignmentTuneTool from "editorjs-text-alignment-blocktune";
// import FontSize from 'editorjs-inline-font-size-tool';
// import Textalign from '@canburaks/text-align-editorjs';
// import EditorJSColumn from  '@calumk/editorjs-columns';
// import {LayoutBlockTool} from 'editorjs-layout'
// import '../cssFiles/blocks.css';
 


// //will probably remove when connected to database
// import FileSaver from 'file-saver';


// function Editor () {

//     const [blocks, setBlocks] = useState([]);
//     const [editor, setEditor] = useState([]);

//     useEffect(()=>{
//       fetch('editor-data.json')
//       .then((response) => response.json())
//       .then((data)=> setBlocks(data));
//     },[]);

//     //Tool for the column block to have header and list blocks
//     const editorJSConfig ={
//       tools:{
//         header:{
//           class:Header,
//         },
//         list:
//         {
//           class:List,
//         }
//       }
//     };

    
//create column block tools to be used
//     useEffect(() => {
                 
//       
//       const editorInstance = new EditorJS({
//         holder : 'editorjs',
//         autofocus: true,

        
        
//         tools:{
//           layout:{
//             class:LayoutBlockTool,
//             inlineToolbar:true,
//             config:{
//               EditorJS,
//               editorJSConfig,
//               initialData:{
//                 itemContent:{
//                   resume:{
//                     blocks:[],
//                   },
//                 },
//                 layout:{
//                   type:"container",
//                   id:"",
//                   className:"",
//                   children:[
//                     {
//                       type:"item",
//                       id:"",
//                       className:"",
//                       itemContentId: "1",
//                     },
//                   ],
//                 },
//               },
//             },
//           },
          
//           header:{
//             class: Header,
//             inlineToolbar:true,
//             tunes:["align"],
//             textalign:["textalign"]
//           },
//           list:{
//             class:List,
//             tunes: ["align"],
//             config:{
//               defaultStyle:"unordered"
//             }
//           },
//           // paragraph:{
//           //   class:Paragraph,
//           //   tunes:['align'],
//           //   fontsize:['fontsize'],
//           //   textalign:["textalign"]
//           // },
//           fontsize:{
//             class:FontSize
//           },
//           textalign:Textalign,
//           align: {
//             class:AlignmentTuneTool,
//             config:{
//               default: "left",
//               blocks:
//               {
//                 header: 'center'
//               }
//             }
//           },
//           // resume:{
//           //   class:EditorJSColumn,
//             // config:{
//             //   tools: {
//             //     header: Header,
//             //     list: {
//             //       class: List,
//             //       config: {
//             //         defaultStyle: 'unordered',
//             //       }
//             //     },
//             //   }
//             // },
//           // },    
//       },
//       // layout: LayoutBlockTool,
//       data: blocks,
//       minHeight:20
  

//       });
//       setEditor(editorInstance);
//     }, [blocks]);

//paragraph block form input
//     function MyForm({ editor }) {
//       const [name, setName] = useState('');
//       const [email, setEmail] = useState('');
//       const [phone, setPhone] = useState('');
//       const [Linkedin, setLinkedin] = useState('');
//       const [github, setGithub] = useState('');
//       const [portfolio, setPortfolio] = useState('');
      
//       const [toggle,setToggle] = useState(false)
//       const handleClick =() => {
//           setToggle(!toggle);
//       };
    
//       const handleSubmit = (event) => {
//         event.preventDefault();
    
//         // Insert a new paragraph block with the user's input
//         editor.blocks.insert(
//             'paragraph', 
//             { text: `${name}<br>${email}<br>${phone}<br>${Linkedin}<br>${github}<br>${portfolio}` });
    
//         // Clear the input fields after adding
//         setName('');
//         setEmail('');
//         setPhone('');
//         setLinkedin('');
//         setGithub('');
//         setPortfolio('');
//       };
    
//       return (<div>
//           <button onClick={handleClick}>Toggle Paragraph Block</button>
//           {toggle && (
//         <form onSubmit={handleSubmit}>
//           <label>
//             Name:
//             <input type="paragraph" value={name} onChange={(e) => setName(e.target.value)} />
//           </label>
//           <br />
//           <label>
//             Email:
//             <input type="paragraph" value={email} onChange={(e) => setEmail(e.target.value)} />
//           </label>
//           <br />
//           <label>
//             Phone:
//             <input type="paragraph" value={phone} onChange={(e) => setPhone(e.target.value)} />
//           </label>
//           <br />
//           <label>
//             Linkedin:
//             <input type="paragraph" value={Linkedin} onChange={(e) => setLinkedin(e.target.value)} />
//           </label>
//           <br />
//           <label>
//             github:
//             <input type="paragraph" value={github} onChange={(e) => setGithub(e.target.value)} />
//           </label>
//           <br />
//           <label>
//             portfolio:
//             <input type="paragraph" value={portfolio} onChange={(e) => setPortfolio(e.target.value)} />
//           </label>
//           <br />
//           <button type="submit">Add block</button>
//         </form>
//       )}
//         </div>
//       );
//     }

//list block form input
//     function ListForm({ editor }) {
//       const [name, setName] = useState('');
//       const [email, setEmail] = useState('');
//       const [phone, setPhone] = useState('');
//       const [Linkedin, setLinkedin] = useState('');
//       const [github, setGithub] = useState('');
//       const [portfolio, setPortfolio] = useState('');
      
//       const [toggle,setToggle] = useState(false)
//       const handleClick =() => {
//           setToggle(!toggle);
//       };
    
//       const handleSubmit = (event) => {
//         event.preventDefault();
    
//         // Insert a new list block with the user's input
//         editor.blocks.insert(
//             'list', 
//             { items: [name,email,phone,Linkedin,github,portfolio]});
    
//         // Clear the input fields after addding
//         setName('');
//         setEmail('');
//         setPhone('');
//         setLinkedin('');
//         setGithub('');
//         setPortfolio('');
//       };
    
//       return (<div>
//           <button onClick={handleClick}>Toggle List Block</button>
//           {toggle && (
//         <form onSubmit={handleSubmit}>
//           <label>
//             Name:
//             <input type="items" value={name} onChange={(e) => setName(e.target.value)} />
//           </label>
//           <br />
//           <label>
//             Email:
//             <input type="items" value={email} onChange={(e) => setEmail(e.target.value)} />
//           </label>
//           <br />
//           <label>
//             Phone:
//             <input type="list" value={phone} onChange={(e) => setPhone(e.target.value)} />
//           </label>
//           <br />
//           <label>
//             Linkedin:
//             <input type="list" value={Linkedin} onChange={(e) => setLinkedin(e.target.value)} />
//           </label>
//           <br />
//           <label>
//             github:
//             <input type="list" value={github} onChange={(e) => setGithub(e.target.value)} />
//           </label>
//           <br />
//           <label>
//             portfolio:
//             <input type="list" value={portfolio} onChange={(e) => setPortfolio(e.target.value)} />
//           </label>
//           <br />
//           <button type="submit">Add block</button>
//         </form>
//       )}
//         </div>
//       );
//     }
    
//     //saving to local currently, will change to connect to database
//   const handleSave = () =>{
//   editor.save().then((outputData) => {
//     console.log('Data: ', outputData)
//     const file = new Blob([JSON.stringify(outputData)], { type: 'application/json' });
//     FileSaver.saveAs(file, 'editor-data.json');
//   }).catch((error) => {
//     console.log('Saving failed: ', error)
//   });
  
//   };

// return (
//   <div>
//     {/* Render the Editor.js instance */}
//     <div id="editorjs"></div>
//     <MyForm editor={editor} />
//     <ListForm editor={editor}/>
//     {/* Save button */}
//     <button onClick={handleSave}>Save</button>
//   </div>
// );
// }

// export default Editor;

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
