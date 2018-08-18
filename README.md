# Express Starter

## Installation
> Install node js

> Install npm

> npm install express generator globally

> [postman collection link](https://www.getpostman.com/collections/72bdaa38527a0da7dc46)

## Getting started
express folderName to gearate the express folder

> This gives the folder structure as Init folder

> cd into the folder and run npm i to install all modules.

> Follow the postman link - import this to postman with "import from link" option in postman

> Goto [http://localhost:3000/calc.html](http://localhost:3000/calc.html) To see working after setup in calc folder

        npm i; npm start


## Instructions

> Api's are added in routes folder, under any of the routes provided.

> The following line in app.js configures one route /users to redirect to users.js file, so any API beginnign with /users with check in users.js file

        app.use('/users', usersRouter);

> We'll be using index.js file. Only this file and public folder need to be checked

        app.use('/', indexRouter);


### Add api
URL : GET /add

params are fetched from request.query (for get api's)

result is sent using result.send() function

### subtract api
URL : POST /subtract 

params fetched from request.body (for post)

### multiply api

URL : GET /multiply

result is sent using res.json function for ease of use for sending jsons

### Error test api

URL : GET /testError

Handling a js error using try catch and returning the correct error message to frontend

### list api

URL : GET /randomList

Returning a list of objects that will be handled by frontend app. (say like search api in a database)