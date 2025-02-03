// it takes some input, second argument is no of seconds u need to wait before the first argument runs
// it will run the first argument after the second argument
// we dont write the settimeout function here, we just call it with the arguments we need, it is provided by the browser

function greet() {
    console.log("Hello");
}

setTimeout(greet, 5000); // this will print "Hello" after 5 seconds
// even this is a callback function, but it is not a function that is passed to another function as an argument


// setinterval call the function repeatively at an interval
setInterval(greet, 3000); // this will print "Hello" every 3 seconds

// recursion is when a function calls itself and callback is when a function is passed to another function as an argument

