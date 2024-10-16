// ES5 => one string concate second string and multiple string use (+) operator and  ("") duble cotation
// Imperative Program
const name = "kyle simpson";
const email = "kyle@gmai.com";
const title = "teacher";

console.log("Welcome to this class! you " + title + " is " + name + ", contact : " + email + ".");
// output : Welcome to this class! you teacher is kyle simpson, contact : kyle@gmai.com

// ES5 => 
const a = 5;
const b = 10;
console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
// "Fifteen is 15 and
// not 20."

// ES6 => one string concate second string and multiple string use to (`${varaiblName}`) template literls
// Declarative Program
const userName = "Adnan chouhan";
const userEmail = "adnanchouhan@gmai.com";
const userTitle = "teacher";

console.log(`Welcome to this class! you ${userTitle} is ${userName}, contact : ${userEmail}.`);
// Welcome to this class! you teacher is Adnan chouhan, contact : adnanchouhan@gmai.com.

// ES6 => 
const fName = "Adnan";
const lName = "chouhan";

console.log(`My first Name is ${fName} and my LastName is ${lName}`);
// output: My first Name is Adnan and my LastName is chouhan