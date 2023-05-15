import React, {useContext,useState, useEffect} from "react";
import NavBar from "../components/Navbar";
import TopNav3 from "../components/TopNav3";
import { SessionContext } from "../components/UserContext";
import Editor from "../components/BlockEditor"


//will probably remove when connected to database
import FileSaver from 'file-saver';


function BlockEditor () {

  const {getUserSession} = useContext(SessionContext)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    useEffect(()=>{
        getUserSession().then(()=>{setIsLoggedIn(true)})
    },[])


  return (
    <div>
        {isLoggedIn &&
            <>
        <TopNav3 />
        <div className="page-wrapper">
            <NavBar />
            <div className="main-content">
                {/* add page content here */}
                <Editor />
            </div>
        </div>
        </>
        }
    </div>
);
}

export default BlockEditor;


