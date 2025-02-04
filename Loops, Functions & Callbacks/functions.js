// A funcntion in js is a set of instruction that performs a task  or calculate a value
// it should take some input and return an output where there is some obvious relationship between the input and  the output

//syntax :
function findSum(n) {
    let ans = 0;
    for(let i=1; i<n; i++) ans += i;
    return ans;
}

console.log(findSum(5));