function tagFunction(staticParts, ...dynamicValues) {
    // Apna custom logic yahan implement karen
    // staticParts mein string literals ka array hota hai
    // dynamicValues mein interpolated values ka array hota hai
    // return staticParts 
    return dynamicValues
}

// const result1 = tagFunction`Hello, ${name}!`;
// console.log(tagFunction(["Hello, ", "!"], name));

function tagFunction(staticParts, ...dynamicValues) {
    // Apna custom logic yahan implement karen
    // staticParts mein string literals ka array hota hai
    // dynamicValues mein interpolated values ka array hota hai

    // Aapne pichle code mein return staticParts ki jagah return dynamicValues kiya hai
    // Iska mtlb hai ki aap interpolated values ko return kar rahe hain, string literals nahi
    return dynamicValues;
}
const name = "John";
// Jab aap tag function ke sath backticks ke andar string literals ka use karte hain
const result = tagFunction`Hello, ${name}!`;
// JavaScript ise is tarah se call karta hai:
// tagFunction(["Hello, ", "!"], name)
console.log(result); // Output: ["John"]

let country = "india";
let city = "Jodphur";

function tagTemFn(static, ...dynamicValues) {
    return dynamicValues;
}

let email = "hello@gmail.com";
let laptop = "DELL";

const fn = tagTemFn`i love ${country} i leave in ${city} my email id is ${email} i have ${laptop} company laptop`;
console.log(fn);