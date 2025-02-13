// helper function
// q: given an input arrqy give me back all the even values from it

const arr = [1,2,3,4,5];

function filterLogic(n) {
    if(n%2) return false;
    return true;
}

const ans = arr.filter(filterLogic);
console.log(ans);