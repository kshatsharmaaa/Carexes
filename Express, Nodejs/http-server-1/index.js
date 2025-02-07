// i creaated the folder and in the folder i wrote npm init -y
// the goal is to create an http server -using the library express writen by smart ppl so we donnt have to everything

const express = require("express"); // just like fs - we import the library
// diff is we have to bring express from the internet to my machine - npm install express

const app = express(); // we create an instance of the express library - we call it app

const port = 3000;

app.get('/', function(req, res) {
    res.send('Hello World'); // callback func - this cbfn will run whenever some1 try to hit ur bcknd server
})

app.listen(port, function() {
    console.log(`Example app listening on port ${port}`); 
})
// this above is the simple backend http server on express
// to run it locally - we use the command - node index.js
// to see live -> go to localhost:3000



// TODO : create a todo app that lets users store todos on the server
// to change the express server itself whenever u chng in the file -> npm install nodemon
// npx nodemon index.js