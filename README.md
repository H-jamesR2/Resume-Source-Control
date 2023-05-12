# [App Name]
Capstone Repository for Resume Source Control Project

[App Name] Resume Source Control [Github Trees-esque]	[Approved]
===
## Build Instructions
First you need to clone repository then run:
```
pip install Flask
cd frontend
npm install
```
In another terminal instance run the python backend by running:
```
cd frontend
npm run start-backend
```
In another terminal instance start the react app by running:
```
cd frontend
npm run start
```
Then you can sign in with your own information

## Table of Contents
1. [Overview](#Overview)
2. [Product Spec](#Product-Spec)
3. [Wireframes](#Wireframes)
4. [Schema](#Schema)

## Overview
### Description
#### Pitch:
* For the best results in your job search you must tailor make your resume for every job opening you apply for, but this quickly becomes a logistical nightmare with the 50-100 job applications it takes to get offers. So we propose a solution of resume source control application to help track changes throughout the years and individual applications.
  * Similarly to other source control programs like git our application allows you to track changes and branch off of a certain version of your resume
  * In addition to source control you can track which resume you used for which application saved in the source control system
  * You can edit resume with a built in text editor
  * If there is time we will also include tracking for cover letters

#### Main Walkthrough:
* You have a main resume that contains everything that you have done that belongs on a resume. Then you can branch off of that main resume and create resumes based on a specific field (i.e. Game Developer and Software Engineer) where you eliminate sections that are irrelevant to those fields. Then from those field branches you can branch off again for specific job applications where you can edit the language of the resume to appeal to those specific job applications.
  * Similar to how git only tracks changes maybe, in the resume editor, if you edited a main branch project description the web app will make a suggestion “there have been changes in parent branch. Do you want to apply changes?” and thats how changes propagate
* Text editor allowing you to edit resumes on the web app
  * Templates for resumes in the text editor or at a homepage where it brings you to the text editor
  * AI suggestions in the text editor, where you can give the application a job application and it will make suggestions for your current resume you are editing
* Resumes are downloadable in different formats
* Application trackers where you can see what resume you used for which job application
  * Different views, you can sort by resume (and which applications you used the resume on) then by application (a list of applications and what you used on each)
  * Stats, like how far you got in the application process for each type of resume
* Users can create accounts and save their resumes
* Also include tracking for cover letters, source control, and application statistics
* Changes to the main resume propagate out to the other branches, for example if you change a project description for the main resume any other branch with that project will also have their description changed. Also there should be a feature to disconnect this change propagation because we want to tailor make some resume descriptions for a job application (I dont think were using this one)

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
