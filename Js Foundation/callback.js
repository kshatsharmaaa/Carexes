/* #1
function calcArithmetic(a, b, type) {
    if(type == "sum") return a+b;
    if(type == "minus") return a-b;

}

const value = calcArithmetic(5, 3, "sum");
console.log(value);

*/

// write all this in diff func
/* #2
function calcArithmetic(a, b, type) {
    if(type == "sum") {
        const value = sum(a,b);
        return value;
    }
    if(type == "minus") {
        const value = sub(a,b);
        return value;
    }

}

function sum(a,b) {
    return a+b;
}

function sub(a,b) {
    return a-b;
}
     */

// now third variable is going to be a function 
// #3

function calcArithmetic(a, b, funcToCall) {
    const ans = funcToCall(a,b);
    return ans;
}

function sum(a,b) {
    return a+b;
}

function sub(a,b) {
    return a-b;
}

const value = calcArithmetic(5, 4, sum);// here the function sum is passed as an argument
console.log(value);
//passing function inside a function is called callback