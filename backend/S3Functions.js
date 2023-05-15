//const {AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION, AWS_BUCKET_NAME} = require('./configS3');
require('dotenv').config()
const {S3Client, PutObjectCommand, ListObjectsCommand, GetObjectCommand, DeleteObjectCommand} = require('@aws-sdk/client-s3');
const fs = require('fs');
const {getSignedUrl} = require('@aws-sdk/s3-request-presigner');
require('express-fileupload')


const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY
const AWS_REGION = process.env.AWS_REGION
const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME



const client = new S3Client({
    region: AWS_REGION,
    credentials: {
        accessKeyId: AWS_ACCESS_KEY_ID,
        secretAccessKey: AWS_SECRET_ACCESS_KEY
    }
})

async function uploadResume(file, key, ct, cd){

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
        //ContentDisposition: 'inline',
        //ResponseContentDisposition: 'view',
        //ContentType: 'text/html'
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