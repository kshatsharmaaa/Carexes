// creating an HTTP server
// express
const express = require("express");
const app = express();

function sum(n) {
    let ans = 0;
    for(let i=0; i<n; i++){
        ans += i;
    }
    return ans;
}

app.listen(3000);

app.get("/", function(req, res){ // callback func
    const n = req.query.n;
    const ans = sum(n);
    res.send("hi your ans is " + ans);
})

// to give input give in url : localhost:3000?n=30
// to catch this query parameter in the code : const n = req.query.n;