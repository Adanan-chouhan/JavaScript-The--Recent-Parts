//  Object Destructuring
// Destructuring happens based on the keys inside the object
const obj = {
    name : "Adnan",
    age : 20,
    study : "BCA 2nd year",
}

const {name,age,study} = obj;
console.log(name);
console.log(`My name is ${name} My age is ${age} i study in class ${study}`);

const obj2 = {
    Name: "Adnan",
    Age: 20,
    hobby: {
        first: "programming",
        sec: "playing"
    }
}
let { Name, Age, hobby } = obj2;
console.log(Name);  // Adnan
console.log(hobby); // { first: 'programming', sec: 'playing' }
console.log(`my name is ${Name}. my age is ${Age} and i love ${hobby.first} and my second hobby is i love ${hobby.sec}`);


