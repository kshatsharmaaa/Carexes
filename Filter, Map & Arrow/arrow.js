// normal function
function add(a, b) {
    return a + b;
}

// arrow function
const add = (a, b) => {
    return a + b;
}

// eg as we have seen while using express

app.get("/", (req, res) => {
})

app.get("/", function(req, res) {
})

