import React, {useState, useContext, useEffect} from "react"
import { SessionContext } from "../components/UserContext";
import { useNavigate } from "react-router-dom";
import { CognitoUser, CognitoUserAttribute } from "amazon-cognito-identity-js";
import TopNav3 from "../components/TopNav3";
import NavBar from "../components/Navbar";
import { Navigate } from "react-router-dom";


const ChangeEmail=()=>{
    const {getUserSession, authenticate} = useContext(SessionContext);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(()=>{
        getUserSession().then(()=>{setIsLoggedIn(true)})
    },[])
    const navigate = useNavigate();

    const [newEmail, setNewEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit=(event)=>{
        event.preventDefault();
        getUserSession().then(({user, email})=>{
            authenticate(email, email, password).then(()=>{
                const attributes=[new CognitoUserAttribute({Name: 'email', Value: newEmail})]
                user.updateAttributes(attributes, (error, results)=>{
                    if(error){
                        console.error(error)
                    } else {
                        console.log(results);
                        var verificationCode = prompt('Enter verification code: ')
                        user.verifyAttribute('email', verificationCode, this);
                        alert("Email has been changed")
                        window.location.reload()
                        
                    }
                })
            })
        
        })
    }

    return(
        <div>
          {isLoggedIn &&
          <>
          <TopNav3/>
              <div className="page-wrapper">
                  <NavBar/>
                  
                  <div className="main-content">
                  <form onSubmit={onSubmit}>
  
  
                    <div className = "settings-dialog-box">
                        <div className= "settings-partition" style={{padding:"0 0 5px 0"}}>
                            <input
                              className={"text"}
                              placeholder={"New email"}
                              value={newEmail}
                              onChange={(event)=>setNewEmail(event.target.value)}/>
                        </div>
                        <div className= "settings-partition" style={{padding:"0 0 5px 0"}}>
                            <input
                              className={"text"}
                              placeholder={"Password"}                        
                              type={"password"}
                              value={password}
                              onChange={(event)=>setPassword(event.target.value)}/>
  
                        </div>
                        <div className= "button-partition">
                          <button className = "affirmative" type="submit">Change Email</button>
                          {/* <button className = "negative" type="submit" style={{margin:"0 0 0 10px"}}>Delete Account</button> */}
                        </div>
                    </div>
  
                    </form>
                  </div>
              </div>
          </>
          }
          
        </div>
      )






}

export default ChangeEmail;