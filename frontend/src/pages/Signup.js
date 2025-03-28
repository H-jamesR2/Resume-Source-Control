import React, { useState } from "react";
import UserPool from "../UserPool";
import { BrowserRouter as Router, Routes, Route, Outlet, Link, NavLink, useNavigate } from "react-router-dom";
import TopNav from "../components/TopNav";
import {CognitoUserAttribute} from "amazon-cognito-identity-js";
import '../cssFiles/Login.css';



const SignUp = () => {    
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const onSubmit = (event) => {
        event.preventDefault();
        const attributes = [];
        attributes.push(new CognitoUserAttribute({Name:'email', Value: email}));

        UserPool.signUp(username, password, attributes, null, (error, result) => {
            if(error) {
                console.error(error);
                alert(error)
                navigate('/signup')
            } else{
                var user = result.user;
                console.log(result);
                console.log(user.getUsername() + " has signed up.");
                alert("Please verify your email. We sent an email to " + email);
                
                // reset localStorage URL route to empty strings since SAVED
                localStorage.setItem('myURLObject', JSON.stringify(
                    ["", ""]))
                // return to mainpage since urlLink File changed...
                console.log(JSON.parse(localStorage.getItem('myURLObject')));
                
                navigate('/');
            }
            // window.location.reload();
        }) 
    };
    return (
        <div>
            <TopNav/>
            <form onSubmit={onSubmit}>
                <div className={"dialog-box"}>
                    <div className={"login-info"}>

                        <div className={"partition"}>
                            <h1 style={{margin:"0"}}>
                            Welcome!
                            </h1>
                        </div>

                        <div style={{textAlign:"center",margin:"0 0 0 50px"}}>Already have an account? 
                        <span style={{color:"#03F", marginRight:"8px"}}><Link to="/login"> Log in</Link></span>
                        </div>

                        <br></br>
                        
                        <div className={"partition"} style={{padding:"0 0 5px 0"}}>
                            <label htmlFor="username"></label>
                            <input
                                className={"text"}
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                                placeholder={"Username"}
                            ></input>      
                        </div>
                        
                        <div className={"partition"} style={{padding:"0 0 5px 0"}}>
                            <label htmlFor="email"></label>
                            <input                        
                                className={"text"}
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                placeholder={"E-mail"}
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
                            {/* <button type="submit"><Link className='no-decor-button' to="/mainpage">Sign Up</Link></button> */}
                            <button type="submit">Sign Up</button>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignUp;