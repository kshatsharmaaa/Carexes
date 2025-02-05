// again jsut syntactical sugar still uses callbacks/promises under the hood
// case 1 :

function akshatAsyncfunction() {
    let p = new Promise(function(resolve) {
        // do some async logic here
        resolve("hi there");
    });
    return p;
}

async function main() { // async keyword is added here
    let value = akshatAsyncfunction()
    console.log(value); // prints : promise{'hi there}
}

main();

// case 2 : add set timeout

function akshatAsyncfunction() {
    let p = new Promise(function(resolve) {
        // do some async logic here
        setTimeout(function() {
            resolve("hi there");
        }, 1000)
        
    });
    return p;
}

async function main() { // async keyword is added here
    let value = akshatAsyncfunction()
    console.log(value); // prints : promise{pending}
}

main();

// case 3 : await

function akshatAsyncfunction() { // even though this is a async func, i dont have to use callbacks, i dont have to use promise ka .then()
    let p = new Promise(function(resolve) {
        // do some async logic here
        setTimeout(function() {
            resolve("hi there");
        }, 1000)
        
    });
    return p;
}

async function main() { // async keyword is added here
    let value = await akshatAsyncfunction() // no callback, no .then syntax
    console.log(value); // prints : hi there after 1 sec
}

main(); // here we introduced 2 keywords(async, await) to  get rid of .then() 
// any function that needs to use await, needs to be async