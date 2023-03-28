import React, {createContext} from "react"
import {CognitoUser, AuthenticationDetails} from "amazon-cognito-identity-js"
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
                user.getUserSession(async(error, userSession)=>{
                if(error){
                    reject(error);
                }else{
                    const attributes = await new Promise((resolve,reject)=>{
                        user.getUserAttributes((error, attributes)=>{
                            if(error){
                                reject(error);
        
                            }else {
                                const content= {}
                                for (let attribute in attributes){
                                    const{Name, Value} = attribute;
                                    content[Name] = Value;
                                }
                                resolve(content);
                                console.log(user.getUsername())
                            }
                        })
                    })

                }})
            }else{
                reject();
            }
        })
    }

    const authenticate = async(Username, Email, Password)=>{
        return await new Promise((resolve, reject)=>{
            const user = new CognitoUser({Username, Email, Password})
            const userInfo = {Username, Email, Password}
            const authenticateDetails = new AuthenticationDetails(userInfo)
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