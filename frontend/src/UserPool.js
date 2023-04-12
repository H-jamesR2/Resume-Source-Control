import { CognitoUserPool } from "amazon-cognito-identity-js";


// need to pull UserPoolID, ClientId from the database;


// Created another user pool: testing1

const UserPool = {
    UserPoolId: "us-east-2_ZLayymn1g",
    ClientId: "3q23jr5evdfuicge601hs3u0nl"
}

export default new CognitoUserPool(UserPool);