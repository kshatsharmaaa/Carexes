// 1. Arrays 2. Objects
// const personArray = ["harkirat","raman","kirat"];

// print even
const ages = [21, 22, 23, 24, 25];
for (let i = 0; i < ages.length; i++) {
    if (ages[i] % 2 == 0) {
        console.log(ages[i]);
    }
}

//print biggest no in array
let biggest = ages[0];
for (let i = 0; i < ages.length; i++) {
    if (ages[i] > biggest) {
        biggest = ages[i];
    }
}
console.log(biggest);


// Complex Object 
const personArray = ["harkirat", "raman", "priya"];
const genderArray = ["male", "male", "female"];

// syntax of object
const user1 = {
    name: "harkirat",
    age: 21,
    gender: "male",
}
// print name of user1
console.log(user1.name);
console.log(user1["name"]);

//Array of objects
const users = [
    {
        name: "harkirat",
        age: 21,
        gender: "male",
    },
    {

        name: "raman",
        age: 22,
        gender: "male",
    },
    {
        name: "priya",
        age: 23,
        gender: "female",
    }
];

for(let i = 0; i < users.length; i++) {
    if(users[i].gender == "male") console.log(users[i].name);
}


