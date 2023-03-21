import React, { useState } from "react";
import UserPool from "../UserPool";
import { BrowserRouter as Router, Routes, Route, Outlet, Link, NavLink } from "react-router-dom";
import TopNav from "../components/TopNav";
import '../cssFiles/Login.css';

const Signup = () => {    
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();

        UserPool.signUp(username, email, password, [], null, (err, data) => {
            if(err) {
                console.error(err);
            }
            console.log(data);
        }) 
    };
    return (
        <div>
            <TopNav/>
            <form onSubmit={onSubmit}>
                <div className={"dialog-box"}>
                    <div className={"login-info"}>

                        <div className={"partition"}>
                            <span className={"header-1"}>
                            Welcome!
                            </span>
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
                            <button type="submit"><Link className='no-decor-button' to="/mainpage">Sign Up</Link></button>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    );
};

export default Signup;