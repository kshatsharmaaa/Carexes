// helper 
// q: given an array, give me back a new array in which every value is multiplied by 2

/* brute force
const input = [1, 2, 3, 4, 5];
const newArray = [];

for(let i=0; i<input.length; i++) {
    newArray.push(input[i]*2); 
}
console.log(newArray);
*/
const input = [1, 2, 3, 4, 5];
function transform(i) {return i*2};

const ans = input.map(transform); // map exists as a function
console.log(ans);