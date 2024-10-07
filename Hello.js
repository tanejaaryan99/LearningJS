// Ouput
// To print any thing in js we can use Console.log
console.log(10);

// We can print multiple outputs on the same line, using the commas inside console.log() function.
console.log(9,10,2+1,"Hello")

// Variable
// variable is a kind of labelled box
var number = 10;
console.log(number)


// Declaring a variable
// To declare a variable, you use the var, let, or const keyword, followed by the variable name. Here's a short concept with examples:


// Using var (historical, less preferred):
// The var keyword declares a variable globally or locally to an entire function, regardless of block scope.
var age = 25;
console.log(age); // Output: 25


// Using let (block-scoped):
// The let keyword declares a block-scoped variable, which means it is only accessible within the block or statement where it is defined.
let name = "John";
console.log(name); // Output: John


// Using const (block-scoped, constant):
// The const keyword declares a block-scoped variable that cannot be reassigned. It is a constant once assigned.
const PI = 3.14;
console.log(PI); // Output: 3.14



// Rules for variable names:

// A variable name can only contain alphabets, numbers and underscores (ie. A-Z, a-z, 0-9, and _).
// A variable name cannot start with a number.
// A variable name cannot have spaces in between.
// Variable names are case-sensitive (age, Age and AGE are three different variables).
// Note
// Reassignment (for let and var):

// Variables declared with let and var can be reassigned.
let count = 10;
count = count + 1; // Reassignment is allowed


// Immutability (for const):

// Variables declared with const cannot be reassigned.
const maxAttempts = 3;
// maxAttempts = 4; // Error: Assignment to a constant variable


let a = 23, b = 20;
console.log(a,b);

console.log(toString(a)+toString(b))
console.log(String(a) + String(b));



// Notes
// In JavaScript, String() and toString() are both used to convert a value to a string, but they differ in their usage and behavior:

// String()
// Usage: It's a global function that can convert any value to a string.

// Behavior: It can handle null and undefined without throwing errors.

// Examples:

String(123);        // "123"
String(true);       // "true"
String(null);       // "null"
String(undefined);  // "undefined"

// Key Points:

// Can be used with any type, even with null and undefined, safely converting them into "null" and "undefined".


// toString()
// Usage: It's a method available on objects (primitives like numbers, booleans, etc. automatically inherit it).
// Behavior: It cannot be used directly on null or undefined; doing so will throw an error.

// Examples:

(123).toString();   // "123"
(true).toString();  // "true"
// null.toString(); // TypeError: Cannot read properties of null
// undefined.toString(); // TypeError: Cannot read properties of undefined

// Key Points:
// Throws an error if used with null or undefined.
// More commonly used on specific objects or primitive values that have this method available.

// Summary:
// Use String() when you want a more general and safer string conversion, especially when dealing with null or undefined.
// Use toString() when you're sure the value is not null or undefined, and you want to explicitly call the method on an object or primitive.