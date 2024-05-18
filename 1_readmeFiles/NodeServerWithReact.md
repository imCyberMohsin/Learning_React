# Use Node.js/Express.js with React.js

## Steps To Follow:
### 1. Create New Folder /Server Out of the React Directory

### 2. Open Terminal on /Server and Run: 
- ```npm init```
- ```npm i express```

### 3. Create main server file in /Server named as index.js OR app.js

### 4. Setup Server and Port(Dont't use React.js port)

### 5. Now Create a folder /routes inside the /Server, /routes will have module or routes which we will use in the index.js(Main Server File)

### 6. To Connect Backend(Node.js) To Frontend(React.js), we have to use CORS(Cross-Origin Resource Sharing)
#### CORS Setup:
- ```npm install cors```
- import and use 'cors' in index.js file
```js
const cors = require('cors'); 
const bodyParser = require('body-parser')

// using CORS
app.use(cors());

// parse forms
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
```

- Now fetch the response using async function(Hook) from the server with React.js
```js
let response = await fetch('http://localhost:3000/product/add',{
    method: 'POST',
    body: fd,
})
```