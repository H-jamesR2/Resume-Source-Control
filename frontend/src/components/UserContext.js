import React, {createContext} from "react"
import {CognitoUser, AuthenticationDetails, CognitoUserAttribute} from "amazon-cognito-identity-js"
import Pool from "../UserPool"
import UserPool from "../UserPool"
import {useNavigate} from "react-router-dom"

const SessionContext = createContext();

const Session = (props) =>{
    const navigate = useNavigate();

    const getUserSession = async()=>{
        return await new Promise((resolve, reject)=>{
            const user = Pool.getCurrentUser();

            if(user){
                user.getSession(async(error, userSession)=>{
                if(error){
                    reject(error);
                }else{
                    const attributes = await new Promise((resolve,reject)=>{
                        user.getUserAttributes((error, attributes)=>{
                            if(error){
                                reject(error);
        
                            }else {
                                const content = {}
                                for (let item of attributes){
                                    const{Name, Value} = item;
                                    content[Name] = Value;
                                }
                                resolve(content);
                                
                            }
                        })
                    })
                    resolve({user, ...userSession, ...attributes})

                }})
            }else{
                reject();
            }
        })
    }

    const authenticate = async(Username, Email, Password)=>{
        return await new Promise((resolve, reject)=>{
            const user = new CognitoUser({Username, Email, Pool})
            //const userInfo = {Username, Email, Password};
            const authenticateDetails = new AuthenticationDetails({Username, Email, Password})
            user.authenticateUser(authenticateDetails, {
                onSuccess:(result)=>{
                    console.log(result);
                    resolve(result);
                },
                onFailure: (error)=>{
                    console.error(error)
                    reject(error)
                },
                newPasswordRequired:(result)=>{
                    console.log(result);
                    resolve(result);
                }
            })
        });
    };

    const signout=()=>{
        const user = UserPool.getCurrentUser();
        if(user){
            user.signOut();
            console.log("Success: Signed Out")
            navigate('/login')
        } 
    }

    return(
        <SessionContext.Provider value={{authenticate, getUserSession, signout}}>
            {props.children}
        </SessionContext.Provider>
    )

};
export {Session, SessionContext};