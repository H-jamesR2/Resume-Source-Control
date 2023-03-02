import React, { useState } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import UserPool from "../UserPool";
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();

        const user = new CognitoUser({
            Username: email,
            Pool: UserPool,

        });
        
        const authDetails = new AuthenticationDetails({
            Username: email,
            Password: password,
        })

        user.authenticateUser(authDetails, {
            onSuccess: (data) => {
                console.log("onSuccess: ", data);
            },
            onFailure: (err) => {
                console.error("onFailure:", err);
            },
            newPasswordRequired: (data) => {
                console.log("newPasswordRequired: ", data);
            }
        });

        
    };
    return (
        <div>
            {/* <div class={"nav-bar"}>
                <ul class={"nav-bar-left"}>
                    <li><img class = {"resume-logo"} src={logo}></img></li>               
                    <li class={"nav-item"}>Home</li>
                </ul>
                <ul class={"nav-bar-right"}>
                    <li class={"nav-item"}>Login</li>                
                    <li class={"nav-item"}>Sign Up</li>
                </ul>
            </div> */}
            <form onSubmit={onSubmit}>
                <div class={"dialog-box"}>
                    <div class={"login-info"}>

                        <div class={"partition"}>
                            <span class={"header-1"}>
                            Welcome back!
                            </span>
                        </div>

                        <div class={"partition"}>
                            <span class={"message"}>
                            Prefer to login with an username?
                            </span>
                        </div>

                        <br></br>

                        <div class={"partition"}>
                            <label htmlFor="email"></label>
                            <input
                                class={"text"}
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                placeholder={"Email"}
                            ></input>
                        </div>

                        <div class={"partition"} style={{padding:"0 0 5px 0"}}>
                            <label htmlFor="password"></label>
                            <input
                                class={"text"}
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                placeholder={"Password"}
                                type={"password"}
                            ></input>
                        </div>

                        <div class={"partition"} style={{height:"25px"}}>
                            <span class={"checkbox-separators"}>
                                <input
                                    class={"checkbox"}
                                    type={"checkbox"}
                                    id={"choice1"}
                                ></input>
                                <label htmlFor="choice1">Remember me</label>
                            </span>

                            <span class={"checkbox-separators"}>
                                <input
                                    class={"checkbox"}
                                    type={"checkbox"}
                                    id={"choice2"}
                                ></input>
                                <label htmlFor="choice2">Stay logged in</label>
                            </span>
                        </div>
                        
                        <br></br>

                        <div class={"partition"}>
                            <button type="submit">Login</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;