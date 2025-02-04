function square(n) {
    return n*n;
}

function sumOfSquare(a,b) {
    return square(a) + square(b);
}

console.log(sumOfSquare(3, 4));

function cube(n) {
    return n*n*n;
}

function sumOfCube(a,b) {
    return cube(a) + cube(b);
}

console.log(sumOfCube(3, 4)); // up till now we've been repeating ourselves

// use of callback
function sumOfSomething(a, b, fn) { // asksuser u want cube or square 
    return fn(a) + fn(b);
}
console.log(sumOfSomething(5, 6, cube)); // cube is a function passed as an argument

// anonymous function - a function without a name
console.log(sumOfSomething(5, 6, function(x) { return x*x;})); // anonymous function passed as an argument
// rather than defining function, whole func body is passed as an argument 

