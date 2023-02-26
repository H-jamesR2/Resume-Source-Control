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
            <form onSubmit={onSubmit}>
                <div className="dialog-box">
                <h1>
                Welcome back!
                </h1>
                <span>
                Prefer to login with an username?
                </span>
                <label htmlFor="email"></label>
                <input
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder={"Email"}
                ></input>
                <br></br>
                <label htmlFor="password"></label>
                <input
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder={"Password"}
                ></input>
                <br></br>
                <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;