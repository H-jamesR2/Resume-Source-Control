//const {AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION, AWS_BUCKET_NAME} = require('./configS3');
require('dotenv').config()
const {S3Client, PutObjectCommand, ListObjectsCommand, GetObjectCommand, DeleteObjectCommand} = require('@aws-sdk/client-s3');
const fs = require('fs');
const {getSignedUrl} = require('@aws-sdk/s3-request-presigner');
require('express-fileupload')

const AWS_ACCESS_KEY_ID="AKIA6DOFALTAH2DSHQGB"
const AWS_SECRET_ACCESS_KEY ="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"
const AWS_REGION="us-east-2"
const AWS_BUCKET_NAME="resumeapps3"


const client = new S3Client({
    region: AWS_REGION,
    credentials: {
        accessKeyId: AWS_ACCESS_KEY_ID,
        secretAccessKey: AWS_SECRET_ACCESS_KEY
    }
})

async function uploadResume(file, key, cd){

    const stream = fs.createReadStream(file.tempFilePath)
    const x = `${key}/${file.name}`
    const uploadParams = {
        Bucket: AWS_BUCKET_NAME,
        Key: x,
        Body: stream,
        ContentType: file.mimetype,
        ContentDisposition: cd

    }
    const command = new PutObjectCommand(uploadParams)
    return await client.send(command)
}


async function getResumeUrl(name, version){
    const command = new GetObjectCommand({
        Bucket: AWS_BUCKET_NAME,
        Key: name,
        VersionId: version
    })
    return await getSignedUrl(client, command, {expiresIn: 3600})
}

async function deleteResume(name, version){
    const command = new DeleteObjectCommand({
        Bucket: AWS_BUCKET_NAME,
        Key: name,
        VersionId: version
    })
    return await client.send(command)
}

async function readResume(){
    const command = new ListObjectsCommand({
        Bucket: AWS_BUCKET_NAME
    })

    return await client.send(command)
}


module.exports={uploadResume, readResume, getResumeUrl, deleteResume}