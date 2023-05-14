# Resume App
Capstone Repository for Resume Source Control Project by: 
* Antonio Diez, Qian He, Nelson Lieu, Hilarion Reyes, Anthony Regner, William Mak

Resume Source Control 
===
## Run Locally
Assuming you have the latest [Python](https://www.python.org/downloads/) and [React](https://react.dev/learn/installation) installed:

### PYTHON:
(**ON MacOS**)IF python not upto-date, run the following commands in a terminal instance:
```
brew install python

ln -s -f /usr/local/opt/python@3.11/bin/python3.11 /usr/local/bin/python

/usr/local/opt/python@3.11/bin/python3.11 -m pip install flask
/usr/local/opt/python@3.11/bin/python3.11 -m pip install python-dotenv
/usr/local/opt/python@3.11/bin/python3.11 -m pip install spacy
```
-> will install latest version of python: 3.11

-> this will change the locally used python version to 3.11

-> will install LIBRARIES: Flask, python-dotenv, spacy

---
First you need to clone repository then at the root directory "CS499_Capstone_Repository" run:
```
npm run initalize-app
```
This command above will:
- Install dependencies for the frontend and backend folders
- Install Flask for the python backend

In the first/current terminal instance start the backend by running:
```
cd backend
npm start
```
In another terminal instance start the python backend by running:
```
cd frontend
npm run start-backend
```
In another terminal instance start the react app by running:
```
cd frontend
npm run start
```
Then you can sign in with your own information or the provided login information here
- username: adiez
- password: P@ssword5

## Table of Contents
1. [Overview](#Overview)
2. [Product Spec](#Product-Spec)
3. [Wireframes](#Wireframes)
4. [Schema](#Schema)

## Overview
### Description
#### Pitch:
- The general advice that is given in the job search is that you should tailor make your resume for each job posting this can easily become a logistical nightmare with hundreds of job applications and different versions of your resume, so our solution is Resume App a form of Resume Source Control that allows you to track the different versions of your resumes.

#### The General Advice / Purpose
Generally how you should organize your information for a resume by having a main resume with EVERYTHING you have EVER done, and any information relavant to a resume. Then as you apply to jobs you should narrow down parts of your resume that are relevant to a specific position and company.
### Our Method
- To represent a main resume we decide to break your resume up into Block(s), i.e. a single project, or single job, etc.
- Then you narrow down the resume into a Field Resume, made of Block(s) relevant to the field you are applying for, i.e. "Game Developer Resume" or "Software Engineer Resume".
- Then you narrow down again into an Application Resume, this is a copy of a Field Resume and the user edits based on the company, i.e." Game Developer at Blizzard", "Game Developer at Riot", or "Software Engineer at Google".

[Extra Notes]
======
Personal tracker; resume matches successes; stats;
Latex
Preapproval for 2;
Need for app made; group structures; database design / frontend / tools; timelines;
Resume []

### Language/Technologies Used:
* React.js, CSS, Figma, Github, MySQL

## Product Spec
### 1. User Stories (Required and Optional)

**Required Must-have Stories** [Main-Features]
..

**Optional Nice-to-have Stories** [Optional-Features]
..

### 2. Screen Archetypes [Wireframes broken down]

...

## Wireframes

[BONUS] Digital Wireframes & Mockups

[BONUS] Demo

## Schema
### Models

User
Property | Type | Desciption 
--- | --- | --- 
username| string | username for login  
password| string | password for login
createdAt| DateTime | date when account is created

...
...

### Networking 
- (Read/Get/Create/Post/Delete/Update/Put/etc.)

## (Open-Source) Libraries Used

## Sprint Progress
### Sprint 1
#### Items Completed

#### Walkthrough 
[Gif] [Slides]
