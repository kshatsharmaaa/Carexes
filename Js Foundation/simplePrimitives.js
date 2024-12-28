// variables : let, var, const
// var was the original way to define variables
// let : es6
// const : u can only define it once

var a = 1;
a = 2;
console.log(a); //2

let b = 3
console.log(b);

const c = 5;
// c = 6; const dont allow changes - introduced to add some kinda safety to the js

let fName = 'aksh';
console.log('this person name is ' + fName);

// loop
let sum = 0;
for(let i =0; i<=100; i++) {
    sum += i;
}
console.log('sum : ' + sum);

// conditional
let age = 5;
if(age > 18) console.log("eligible to vote");
else console.log("not eligible");