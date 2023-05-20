# Resume App
Capstone Repository for Resume Source Control Project by: 
* Antonio Diez, Qian Yi He, Nelson Lieu, Hilarion Reyes, Anthony Regner, William Mak

Resume Source Control 
===

# Table of Contents
1. [Description](#Description)
2. [Run Locally](#Run-Locally)
3. [Test Scenarios](#Test-Scenarios)
4. [Language & Technologies](#Language-&-Technologies)

# Description
The general advice that is given in the job search is that you should tailor make your resume for each job posting this can easily become a logistical nightmare with hundreds of job applications and different versions of your resume, so our solution is Resume App a form of Resume Source Control that allows you to track the different versions of your resumes.

# Run Locally
Assuming you have the latest [Python](https://www.python.org/downloads/) and [React](https://react.dev/learn/installation) installed:

## PYTHON:
(**ON MacOS**) IF python not upto-date, run the following commands in a terminal instance which:
```
brew install python

ln -s -f /usr/local/opt/python@3.11/bin/python3.11 /usr/local/bin/python

/usr/local/opt/python@3.11/bin/python3.11 -m pip install flask
/usr/local/opt/python@3.11/bin/python3.11 -m pip install python-dotenv
/usr/local/opt/python@3.11/bin/python3.11 -m pip install spacy
```
-> will install latest version of python: 3.11

-> will change the locally used python version to 3.11

-> will install LIBRARIES: **Flask, python-dotenv, spacy**

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

# Test Scenarios
## Login + Signup
- Password needs to include an uppercase character, lowercase character, number, symbol, and 8 characters total.
- With new account you might load resumes from a different account, simply refresh page and it should show a blank Resume Main Page
- Policy for authentication is short so you need to relogin periodically
## Top Right Account 
- Account Settings: you can change password and email
- Logout
- Profile: not functional
## Resume Main Page
- Upload resume from local computer (only HTML)
- Create a new resume there, you can only make one resume without a custom name
- Clicking on the resume will open your resume in a new tab and navigate the current page to the resume text editor
- Left nav panel you can go to Blocks, Applications, and Job Scanner
### Resume Text Editor
- Type like a normal text editor
- Export as pdf
- There is a left panel that should include stats about any job applications using that specfic resume, the backend is not hooked up so there is default values there. 
- On the right side there should be a view that allows you to see the the versions that you had previously saved resume versions, you can click on them to display the text on them (you cannot edit them)
## Applications
- You can create application stats for the table
- You can only edit the status of an applicaation row
- The table is not hooked up to the backend so it starts with default values and does not save changes
## Blocks
- 
## Job Scanner
- Copy and past a job description that is computer science related and it should display a list of relavant hard and soft skills from that job posting


# Language & Technologies
- React.js, HTML/CSS, AWS, Github, MySQL, AntD
- Flask, Python, spaCy
- Figma, Indesign

## Dependencies
```
"@ant-design/icons": "^5.0.1",
"@aws-amplify/ui-react": "^4.4.3",
"@aws-sdk/client-s3": "^3.303.0",
"@aws-sdk/s3-request-presigner": "^3.321.1",
"@editorjs/editorjs": "^2.26.5",
"@editorjs/header": "^2.7.0",
"@editorjs/list": "^1.8.0",
"@emotion/css": "^11.10.6",
"@fortawesome/fontawesome-svg-core": "^6.3.0",
"@fortawesome/free-regular-svg-icons": "^6.3.0",
"@fortawesome/free-solid-svg-icons": "^6.3.0",
"@fortawesome/react-fontawesome": "^0.2.0",
"@testing-library/jest-dom": "^5.16.5",
"@testing-library/react": "^13.4.0",
"@testing-library/user-event": "^13.5.0",
"@tinymce/tinymce-react": "^4.3.0",
"amazon-cognito-identity-js": "^6.1.2",
"ant-design": "^1.0.0",
"antd": "^5.3.2",
"aws-amplify": "^5.0.23",
"aws-sdk": "^2.1347.0",
"axios": "^1.4.0",
"babel-plugin-macros": "^3.1.0",
"file-saver": "^2.0.5",
"http-proxy-middleware": "^2.0.6",
"react": "^18.2.0",
"react-collapsed": "^4.0.2",
"react-dom": "^18.2.0",
"react-dropdown": "^1.11.0",
"react-router-dom": "^6.8.1",
"react-scripts": "^5.0.1",
"tinymce": "^6.4.1",
"web-vitals": "^2.1.4"
```


