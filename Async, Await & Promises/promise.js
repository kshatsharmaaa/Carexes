/*
the first part of the file async.js looks ugly
Promises are syntactical sugars that makes this code slighlty more readable
it is just a pretty way to write  under the hood it'll still use the callback queue, call stack, event loop

until now, we've obnly used other people's asynchronous functions - how can we create an async function of our own? 
*/

// ugly way to create ->

const fs = require('fs');
  
function akshatReadFile(cb) { // it is just a wrapper on top of another async func, which is fine
    fs.readFile("./Async, Await & Promises/a.txt", "utf-8", function(err, data) {
        cb(data);
    });
}

function onDone(data) {
    console.log(data);
}

akshatReadFile(onDone);

// cleaner way (Promises) ->

const fs = require('fs');
  
function akshatReadFile() { // doesnt have args, not a callback func, how does simmi know what to call when shes done getting the ketchup
    return new Promise(function(resolve) { // object of the promise class -> new Promise having function as an argument which takes reslve as an argument
        fs.readFile("./Async, Await & Promises/a.txt", "utf-8", function(err, data) {
            resolve(data);
        });
    })    
} // this returns a promise

//callback function  to call
function onDone(data) {
    console.log(data);
}

akshatReadFile().then(onDone); // js engine checks whoever has done promise inside (functionName).then i am going to call this callback function

/*
this is how it works -> 
Timmy : can u read a file, promise me simmy
simmy : sure here's a promise, i may or may not resolve this promise, returns it immediately
(notice no callbacks anywhere)
simmy : please put a .then on this promise so that i know where to send this data
(does her thing, reads the file) resolve gets called 
-> whatever was passed to .then the control reaches there
onDone gets called on timmy's side
*/


// Promise - is just a class that makes callbacks and async functions slightly more readable
let p = new Promise(function(resolve){
    resolve("foo");
}); // i means resolve hasnt been called yet

//3 states : prending, resolved, rejected
function callback() {
    console.log(p);
}

p.then(callback);