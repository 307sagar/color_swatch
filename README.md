# Simple Crud
A simple crud app with React Hooks (+Axios) consuming a simple Nodejs api server).


## frontend

| dependencies | links |
| ------ | ----- |
| axios |
| querystring |
| react | 
| react-dom |
| react-scripts |
| react-rputer-dom


### `npm start`
Start react app.
Port: http://localhost:3000

<br>

## backend

| dependencies | links |
| ------ | ----- |
| cors 
| express 
  mongoose

| dev-dependencies | links |
| ------ | ----- |
| nodemon | [link](https://nodemon.io/) |

### `npm start`
Start api server.
Port: http://localhost:4000

<br>

Database : mongo database

### Api routes:

| verb | route |
| ------ | ------ |
| get | colors |
| post | colors/create-color |
| get | colors/update-color /:id |
| delete | colors/delete-color |