import React, {useState, useContext} from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
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
              navigate('/resume')
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
                            <h1 style={{margin:"0"}}>
                            Welcome back!
                            </h1>
                        </div>

                        <div style={{textAlign:"center",margin:"0 0 0 50px"}}>Don't have an account? 
                        <span><Link to="/signup"> Sign up</Link></span>
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