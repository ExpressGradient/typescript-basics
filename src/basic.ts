// import modules
import { randomNum } from "./module.js";

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

// any type, not much preferable
let anyType: any = true;
anyType = 32;
anyType = "Hello World";

// any typed array
let anyArray: any[] = ["World", true, 32];

// functions
// optional parameter
const add: Function = (a: number, b: number, c?: number) => {
    console.log(a + b);
}

// default parameter
const multiply: Function = (a: number, b: number, c: number = 10) => {
    console.log(a * b * c);
}

// return type
const squared: Function = (a: number): number => a**2;
console.log(squared(10));

// type aliasing
type person = {name: string, age: number};
const greeting: Function = (person: person): void => console.log(`Hi ${person.name}, you are ${person.age} years old.`);

// function signatures
let sayHello: (name: string) => void;
sayHello = (name: string): void => console.log(`Greetings ${name}`);

// dom
const anchor = document.querySelector("a")!;
console.log(anchor.innerText, anchor.href);

// type-casting
const heading = document.querySelector("h1") as HTMLHeadingElement;
heading.innerText = "Hello Discoding";

// classes
class Person {
    public username: string;
    readonly skillLevel: number;
    private isSad: boolean;

    constructor(username: string, skillLevel: number, isSad: boolean) {
        this.username = username;
        this.skillLevel = skillLevel;
        this.isSad = isSad;
    }
}

const discoding = new Person("discoding", 100, true);
const gradient = new Person("Express Gradient", 50, false);

const persons: Person[] = [discoding, gradient];

console.log(discoding.skillLevel); // we can read the property's value but we can't write it
// discoding.skillLevel = 1000;

// console.log(discoding.isSad);
// if we try to access isSad property on the Person objects, we get an error as the isSad property is accessible within the class.

// modules
console.log(randomNum);