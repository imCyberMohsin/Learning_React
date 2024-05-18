# Requirement To Be Installed
- Node.js
- Any Code Editor
- react.dev docs

# Create Project with npx(Node Package Executor) (Don't Use This Method)
- Open terminal in the directory
- Run command : npx create-react-app projectName

## Package.json file : It contains the Node dependencies, scripts, and other metadata
- open package.json file for project info
* Scripts in package.json
- "start" : Start the project in development environment
- "build" : Build HTML,CSS,JS form react code
- "test"  : Run test cases
- "eject" : Remove React from the project

### Run scripts of package.json for a project
- Open the project directory in terminal 
- Run command : npm run start            (Project will start at localhost)
-           OR
- Build command : npm run build          (React files will be parsed to html,css,js)


* Drawbacks of Creating Projects with npx:
- Time Consuming
- Unused/Useless packages are installed
- Installtion is Bulky

## Mostly you will work inside the /src directory
### Delete useless files form the project/src
* Files to be deleted:
- setupTests.js
- reportWebVitals.js
- logo.svg
- App.tests.js
- App.css
- index.css
(Now you will have mainly 2 files : index.js, App.js)
- remove the useless imports from both files
##################################################################################

# Better and Easy way to Create React Projects.

## Solution : using Builders 
- Use Custom Build Process with a builder like - 'Vite' or 'Parcel'
- Now you can install packages as per your need.
- Vite Docs : vitejs.dev/guide

## Create Projects using Vite with npm
- Open terminal in the directory
- Run command : npm create vite@latest
- Select the preferred options, then project directory will be created.
- Install node package(Node is not installed by default by Vite) : npm i

## run/build with vite
- Open terminal in the project directory 
- Run command : npm run dev
- Build command : npm run build

## Project Directory Cleaning:
## Mostly you will work inside the /src directory
## Delete useless files form the project/src
* Files/Folders to be deleted:
- /Assets
- index.css
- App.css
(You will have 2 files : main.jsx, App.jsx)
- remove useless line of codes inside the 2 files

## Finally Run and check in the browser
