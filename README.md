# Express Starter

## Installation
Install node js
Install npm
npm install express generator globally


## Getting started
express folderName to gearate the express folder

> This gives the folder structure as Init folder

> cd into the folder and run npm i to install all modules.

## Instructions

> Api's are added in routes folder, under any of the routes provided.

> The following line in app.js configures one route /users to redirect to users.js file, so any API beginnign with /users with check in users.js file
        app.use('/users', usersRouter);

> We'll be using index.js file.
        app.use('/', indexRouter);



