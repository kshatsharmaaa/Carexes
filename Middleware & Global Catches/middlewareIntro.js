const express = require("express");
const app = express();

// example prechecks ->
function userMiddleware(req, res, next) {
    if(username != "akshat" || password != "pass") {
        res.status(403).json({
            msg: "Incorrect Inputs"
        })
    }
    else next();
}

function kidneyMiddleware(req, res, next) {
    if(kidneyId != 1 || kidneyId != 2) {
        res.status(403).json({
            msg: "Incorrect Inputs"
        })
    }
    else next();
}

// last thing in middlewares
app.use(kidneyMiddleware); // now kidney middleware can be used for all routes
app.use(express.json()); // this extracts the post body
// why only body needs to require this coz we donno body can be js, json, text, htlm, xml
// so this says i am expecting json as an input so pls parse


app.get("/heart-chekup", userMiddleware, function(req, res) {
    res.send("Your heart is healthy");
})

app.get("/kidney-chekup", userMiddleware, function(req, res) {
    res.send("Your kidney is healthy");
})

app.listen(3000);


// assignments :
// 1. count the no of requests
// 2. find the average time your server is taking to handle requests
