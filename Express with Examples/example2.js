// hospital design (in memory ) not goin to use any database (hospital game backend)
/* 
Get : goin gfor a consultation to get a check ip
Post : goin to get a  new kidney instead // put some data on backend : posting on linkedin
Put : going to get a kidney replaced // update data on server
Delete : goin to a kidney removed
*/

const express = require("express");
const app = express();

const users = [{ name: "john", kidneys: [{healthy: false}] }]; // only  user rn

app.get("/", function(req, res){ // return to john that how many kidneys he has and how many are healthy
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i=0; i<johnKidneys.length; i++) {
        if(johnKidneys[i].healthy) {
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

app.use(express.json()); // to parse json data from body of the request
app.post("/", function(req, res){ // anytime a post req happens u can add an unhealthy/healthy kidney of users choice
    // the popular input typein get req is query paramater : url m likhna ?n=3
    // same of post it is body - usualy usend data in the body
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy : isHealthy
    })
    res.json({
        msg: "Done!"
    })
    // how to send post request - one way - postman - open the app
    // use it to send a post req -> go to body option write -> {"isHealthy" : true}
}) // no of kidneys gets increased

app.put("/", function(req, res){ // update every kidney to be healthy
    for(let i=0; i<users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

app.delete("/", function(req, res){  // removing all the unhealthy kidneys
    // only if alteast one bad kidney is there do this else return 411
    if(isThereAtleastOneUnhealthyKidney()) {
        const newKidneys = []; // empty array
        for(let i=0; i<users[0].kidneys.length; i++) {
            if(users[0].kidneys[i].healthy) {
                newKidneys.push({
                    healthy: true
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({msg: "Done"});
    }
    else res.status(411).json({
        msg: "You have no bad kidneys"
    });
    
})

function isThereAtleastOneUnhealthyKidney () {
    let atleastOneUnhealthyKidney = false;
    for(let i=0; i<users[0].kidneys.length; i++) {
        if(!users[0].kidneys[i].healthy) {
            atleastOneUnhealthyKidney = true;
        }
    }
    return atleastOneUnhealthyKidney;
}

app.listen(3000);

// anytime you restART THE process by typing node filename this database gets reseted thatswhy we need mongodb/postgres so the kidneys we added using post will vanish


/*
questions :
1. what should happen if they try to delete a kidney when there are no kidneys
2. what should happen if they try to make a kidney healthy when all are already haealthy
*/
