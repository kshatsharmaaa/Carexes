/* 
what does synchronous mean?
together one after the other, seqeunctial, only one thing is happening at a time

what does asynchronous mean?
oppposite of sync
happens in parts
multiple things are context switching with each other

human body and brainis single threaded 
1. we can only do one thing at a time
2. but we can conext switch btw tasks or we can delegate tasks to others

4 tasks :
1. boil water
2. cut vegetables
3. cut maggie packet
4. get ketchup from the shop nearby

async func me wait ni krna pdhta baki tasks ke khatam hone ka 
eg reading node files in js while doing other tasks by context switching
 until now weve been using sync functions in js eg function.js


*/

// async function -> setTimeout

function findSum(n) {
    let ans = 0;
    for (let i = 0; i < n; i++) ans += i;
    return ans;
}
function findSumTill100() {
    console.log(findSum(100)) ;
}

setTimeout(findSumTill100, 1000); // calling a async function -> control reaches here and then after 1 sec it calls the function but till then u can do other tasks so hello world will be printed first // this setTimoeut is delegated to simmi
// after sec
console.log("hello world");

/*
async function -> setTimeout
async function -> promise
fs.readFile -> to read a file from your filesystem
Fetch -> to fetch some data from an API -> async 
*/

// read

const fs = require("fs"); // requiring an external module called fs stands for file system, nodejs library -> reading to a file, writing to a file
fs.readFile("./Async, Await & Promises/a.txt", "utf-8", function(err, data) {
    console.log(data);
}); // second parameter is just the ecoding in which u want to read the file
// third arg is anonymous func -> func with no name but whole body is passed as an argument

console.log("pheww"); // firs this will run and then readFile bcoz it is also an async fucntion

// now what will print first as this will take more than the file read -> ans readfile will take more
let a = 0;
for(let i=0; i<10000000; i++) a++; // reason when thread is busy here it stays here and when this is done it goes to the pending callback (readFile) and then it prints the data
console.log("hi theree 2");