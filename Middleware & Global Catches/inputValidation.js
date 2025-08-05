const express = require(express);
const app = express();
app.use(express.json()); // this comes before all the routes

app.post("/health-checkup", function(req, res) {
    // kidneys = [1,2]
    // simplest way of input validation
    if(!kidneys) {
        res.json({
            msg: "wrong inputs"
        })
    }// but this is only one lvel of validation so to simplyfy the process we use zod library
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send("Your kidney length is" + kidneyLength);
})

// another middleware that u put at the end -> global catches
// this will get called after these routes if there's an exception - inputs
app.use(function(err, req, res, next) {
    res.json({
        msg: "sorry something is up with our server"
    })
})

1:06:18


app.listen(3000);

// user can send whatever input they want in whatever form it is your job to validate them to make sure the server doesnt crash
