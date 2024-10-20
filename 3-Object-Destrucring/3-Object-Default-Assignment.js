// Object
const obj = {
    name: "Adnan",
    age: 20,
}

let { name, age, salary = 100000} = obj;
console.log(`my name is ${name}. my age is ${age}. and my salary is ${salary}.`);
console.log(obj);  // { name: 'Adnan', age: 20 } 


// Array
const arr = [1, 2];
let [a, b, c = 10] = arr
console.log(`First Number is ${a}. Second Number is ${b}. and third Number is ${c}.`);


// string 
const str = "Adnan";
let [A,B,C,D,E,F = "Chouhan"] = str;
console.log(C); // n 
console.log(F); // Chouhan
