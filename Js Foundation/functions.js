function findSum(a, b) {
    // do things with input and return output
    return a+b;
}

const val = findSum(1010,2123);
console.log(val);

// function displayResult(data) {
//     console.log("Result of the sum : " + data);
// }

// print the result of sum, you are allowed to call only one function to display the result
// ans is callback func : pass func as argument

function sum(a,b, fncToCall){
    let vall = a+b;
    fncToCall(vall);
}

function displayResult(data) {
    console.log("Result of the sum : " + data);
}

const ans = sum(1010,2123,displayResult); //callback
