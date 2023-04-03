import React, {useState, useContext, useEffect} from "react";
import { SessionContext } from "../components/UserContext";
import TopNav2 from "../components/TopNav2";
import NavBar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import{Link} from "react-router-dom"
import UserPool from "../UserPool";


const ChangePassword = () =>{
    
    //const {getUserSession} = useContext(SessionContext);

    const {getUserSession} = useContext(SessionContext);
  
    const[isLoggedIn, setIsLoggedIn] = useState(false);
  
  
    useEffect(()=>{
       getUserSession().then(()=>{setIsLoggedIn(true);
       });
  
     },[]);
  

    const navigate = useNavigate();
  
    const [password, setPassword] = useState(""); 
    const [newPassword, setNewPassword] = useState("");

    const signout=()=>{
                const user = UserPool.getCurrentUser();
                if(user){
                    user.signOut();
                    console.log("Success: Signed Out")
                    alert("Success: Your password has been changed.")
            alert("Please log in with your new Password")
                    navigate('/login')
                } 
            }
    
    const onSubmit = (event) =>{
      event.preventDefault();
      getUserSession().then(({user})=>{
        user.changePassword(password, newPassword, (error, result)=>{
          if(error){
            console.error(error);
          } else
          {
            console.log(result);
            signout();
            
         
            //user.signout();
            //navigate("/login");
          }
  
        })
      })
    }
  
    return(
      <div>
        {isLoggedIn && (
            <>
        <TopNav2/>
            <div className="page-wrapper">
                <NavBar/>
                
                <div className="main-content">
                <form onSubmit={onSubmit}>


                  <div className = "settings-dialog-box">
                    {/* <div className ="settings-partition">
                        <p className = "header-1" style={{textAlign:"center", margin:"0"}}>
                          Account settings
                        </p>
                      </div> */}
                    {/* <div className= "settings-partition" style={{padding:"0 0 5px 0"}}>
                        <span>Current username: USERNAME</span>
                        <br></br>
                        <span>Username cannot be changed</span>
                      </div>
                      <div className= "settings-partition" style={{padding:"0 0 5px 0"}}>
                        <span>Current email: EMAIL</span>
                          <input
                            className={"text"}
                            placeholder={"Email"}
                          ></input>
                      </div> */}
                      <div className= "settings-partition" style={{padding:"0 0 5px 0"}}>
                          <input
                            className={"text"}
                            placeholder={"Current password"}
                            type={"password"}
                            value={password}
                            onChange={(event)=>setPassword(event.target.value)}/>
                      </div>
                      <div className= "settings-partition" style={{padding:"0 0 5px 0"}}>
                          <input
                            className={"text"}
                            placeholder={"New password"}                        
                            type={"password"}
                            value={newPassword}
                            onChange={(event)=>setNewPassword(event.target.value)}/>

                      </div>
                      <div className= "button-partition">
                        <button className = "affirmative" type="submit">Change Password</button>
                        {/* <button className = "negative" type="submit" style={{margin:"0 0 0 10px"}}>Delete Account</button> */}
                      </div>
                  </div>

                  </form>
                </div>
            </div>
        
  
  
  
  
  </>
        )}
        
      </div>
    )
    
  
  
  }
  
  export default ChangePassword;
  