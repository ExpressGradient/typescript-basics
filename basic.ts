// explicit typed variables
const username: string = "Express Gradient";
let age: number = 20;

let hasDegree: string | boolean; // Union Typed
hasDegree = false;
hasDegree = "Computer Science"

// arrays
let internetNames: string[] = ["discoding", "Express Gradient", "Sedkid"];
internetNames.push("Lord Sadness");
console.log(`Current Username: ${internetNames[1]}`);

// mixed typed arrays
let mixed: (string | number)[] = ["Hello", 1, "World", 2];

// objects
let user: {
    name: string,
    age: number,
    isSad: boolean
}

user = {
    name: "discoding",
    age: 20,
    isSad: true
    // when a fourth property is added, we get error
    // hasDegree: string | boolean
}

console.log(user.isSad);

// gives error when a new property is added to an existing object
// user.hasDegree = false;

// an object's structure can't be changed
/*
let user: object = {
    name: "discoding"
}*/
