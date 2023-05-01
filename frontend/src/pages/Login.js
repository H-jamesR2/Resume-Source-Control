// import React, {useState, useContext} from "react";
// import {CognitoUserAttribute} from "amazon-cognito-identity-js";
// //import { BrowserRouter as Router, Routes, Route, Outlet, Link, NavLink } from "react-router-dom";
// import TopNav from "../components/TopNav";
// import {SessionContext} from "../components/UserContext";
// import { useNavigate } from "react-router-dom";
// import '../cssFiles/Login.css';

// const LogIn = () => {
//     const navigate = useNavigate();
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const {authenticate} = useContext(SessionContext);

//     const attributes=[]
//     attributes.push(new CognitoUserAttribute({Name: 'email', Value: email }))

//     const onSubmit = (event) => {
//         event.preventDefault();
//         authenticate(email, email, password).then(result=>{
//             console.log(result);

            
//             alert("Welcome")

//             navigate('/mainpage')
//         }).catch(error=>{
//             console.error(error);
//             //window.location.reload();
//         })

//     };
//     return (
//         <div>
//             <TopNav/>
//             <form onSubmit={onSubmit}>
//                 <div className={"dialog-box"}>
//                     <div className={"login-info"}>

//                         <div className={"partition"}>
//                             <span className={"header-1-login"}>
//                             Welcome back!
//                             </span>
//                         </div>

//                         <br></br>

//                         <div className={"partition"} style={{padding:"0 0 5px 0"}}>
//                             <label htmlFor="email"></label>
//                             <input
//                                 className={"text"}
//                                 value={email}
//                                 onChange={(event) => setEmail(event.target.value)}
//                                 placeholder={"Username or email"}
//                             ></input>
//                         </div>

//                         <div className={"partition"}>
//                             <label htmlFor="password"></label>
//                             <input
//                                 className={"text"}
//                                 value={password}
//                                 onChange={(event) => setPassword(event.target.value)}
//                                 placeholder={"Password"}
//                                 type={"password"}
//                             ></input>
//                         </div>

//                         <div className={"partition"} style={{height:"25px"}}>
//                             <span className={"checkbox-separators"}>
//                                 <input
//                                     className={"checkbox"}
//                                     type={"checkbox"}
//                                     id={"choice1"}
//                                 ></input>
//                                 <label htmlFor="choice1">Remember me</label>
//                             </span>

//                             <span className={"checkbox-separators"}>
//                                 <input
//                                     className={"checkbox"}
//                                     type={"checkbox"}
//                                     id={"choice2"}
//                                 ></input>
//                                 <label htmlFor="choice2">Stay logged in</label>
//                             </span>
//                         </div>

//                         <br></br>

//                         <div className={"partition"}>
//                             {/* <button type="submit"><Link className='no-decor-button' to="/mainpage">Log In</Link></button> */}
//                             <button type = "submit">Log In</button>
//                         </div>
//                     </div>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default LogIn;


import React, {useState, useContext} from "react";
import TopNav from "../components/TopNav";
import { useNavigate } from "react-router-dom";
import '../cssFiles/Login.css';
import { useReducer, useEffect } from "react";
import {Amplify, Auth} from 'aws-amplify';



const LogIn=()=>{

    //const[username, setUsername] = useState("");
    const[password, setPassword]= useState("");
    const[email, setEmail] = useState("");
    const navigate = useNavigate();

      useEffect(()=>{

        Amplify.configure({
          Auth: {
            
            // Testing 1
            identityPoolId:'us-east-2:9a6af4be-e1fc-4092-a771-1adec18ac67f',
            userPoolWebClientId:'3q23jr5evdfuicge601hs3u0nl',
            region:'us-east-2',
            userPoolId:'us-east-2_ZLayymn1g'

            // Testing 3
            // identityPoolId:'us-east-2:16567c72-dd2a-4731-8867-d08b6429e27e',
            // userPoolWebClientId:'3m92qv4j0qa93u66dobhdpj575',
            // region:'us-east-2',
            // userPoolId:'us-east-2_dKQ3CuVXR'


          }
        })
      },[]);

      const onSubmit=async()=>{
        try{
          const user = await Auth.signIn({
          username: email,
          password: password,
          });
          const currCreds = await Auth.currentCredentials();
          console.log('Credentials: ', currCreds);
          console.log('accessKeyId: ', currCreds['accessKeyId']);
          console.log('secretAccessKey: ', currCreds['secretAccessKey']);

          
          if (user){
            //updateState({user:user, isLoggedIn: true});
            console.log("Success")
            console.log(user)
            localStorage.setItem('my-key', currCreds.identityId);
            setTimeout( function(){
              navigate('/mainpage')
            }, 1500)
          }

        } catch(error){
          //const {message} = error;
          //updateState({error:message})
          console.log(error)
          //navigate('/mainpage')

        }
      };


    return (
        <div>
            <TopNav/>
            
                <div className={"dialog-box"}>
                    <div className={"login-info"}>

                        <div className={"partition"}>
                            <span className={"header-1-login"}>
                            Welcome back!
                            </span>
                        </div>

                        <br></br>

                        <div className={"partition"} style={{padding:"0 0 5px 0"}}>
                            <label htmlFor="email"></label>
                            <input
                                className={"text"}
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                placeholder={"Username or email"}
                            ></input>
                        </div>

                        <div className={"partition"}>
                            <label htmlFor="password"></label>
                            <input
                                className={"text"}
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                placeholder={"Password"}
                                type={"password"}
                            ></input>
                        </div>


                        <br></br>

                        <div className={"partition"}>
                            {/* <button type="submit"><Link className='no-decor-button' to="/mainpage">Log In</Link></button> */}
                            <button type = "submit" onClick={onSubmit}>Log In</button>
                        </div>
                    </div>
                </div>
            
        </div>
    );
};


export default LogIn;