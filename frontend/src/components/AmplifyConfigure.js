import { Amplify } from 'aws-amplify';
import { Storage } from 'aws-amplify';

// Configuring Amplify with Cognito user pool, identity pool, and S3 information.

export function configureAmplify() {
    Amplify.configure({
        // User pool: testing1
        // Identity pool: testing1identity
        Auth: {
            identityPoolId: 'us-east-2:9a6af4be-e1fc-4092-a771-1adec18ac67f',
            region: 'us-east-2',
            userPoolId: 'us-east-2_ZLayymn1g',
            userPoolWebClientId: '3q23jr5evdfuicge601hs3u0nl',
        },
        // S3 bucket: resumeappS3
        Storage: {
            bucket: 'resumeapps3',
            region: 'us-east-2',
            identityPoolId: 'us-east-2:9a6af4be-e1fc-4092-a771-1adec18ac67f'
        }
    });
}

export function SetS3Config(bucket, level) {
    Storage.configure({
        bucket: bucket,
        level: level,
        region: 'us-east-2',
        identityPoolId: 'us-east-2:9a6af4be-e1fc-4092-a771-1adec18ac67f'
    });
}