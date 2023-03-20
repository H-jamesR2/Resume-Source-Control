import React, { useState } from "react";
import UserPool from "../UserPool";
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
                <div class={"dialog-box"}>
                    <div class={"login-info"}>

                        <div class={"partition"}>
                            <span class={"header-1"}>
                            Welcome!
                            </span>
                        </div>

                        <br></br>
                        
                        <div class={"partition"} style={{padding:"0 0 5px 0"}}>
                            <label htmlFor="username"></label>
                            <input
                                class={"text"}
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                                placeholder={"Username"}
                            ></input>      
                        </div>
                        
                        <div class={"partition"} style={{padding:"0 0 5px 0"}}>
                            <label htmlFor="email"></label>
                            <input                        
                                class={"text"}
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                placeholder={"E-mail"}
                            ></input>
                        </div>

                        <div class={"partition"}>
                            <label htmlFor="password"></label>
                            <input                        
                                class={"text"}
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                placeholder={"Password"}
                                type={"password"}
                            ></input>
                        </div>

                        <br></br>
                        
                        <div class={"partition"}>
                            <button type="submit">Sign Up</button>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    );
};

export default Signup;