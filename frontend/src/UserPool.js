import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-2_Q9XVyFwCY",
    ClientId: "3ejhi1tc4m7tkm0uk8tf8e5jq"
}

export default new CognitoUserPool(poolData);