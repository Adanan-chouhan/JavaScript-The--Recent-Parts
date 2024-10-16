// Spread Operator (...):
// The spread operator is used to spread the elements of an array or the properties of an object. It allows you to expand elements or properties in places where multiple elements or properties are expected.

// Rest Operator (...):
// The rest operator is used to collect the remaining elements of an array or the remaining properties of an object into a single variable. It is often used in function parameters to handle a variable number of arguments.


// spread operator
// let arr1 = [1, 2, 3];
// let arr2 = [...arr1, 4, 5];
// console.log(arr2); // [1, 2, 3, 4, 5]

// Rest operator
const arr = [1, 2, 3, 4, 5];
const [a, b, ...c] = arr;
console.log([a, b, c]);

// spread operator
const arr1 = ['Arbaaz', 'Adnan', 'fayyaz', 'Ayyaz'];
const [...e] = arr1;
console.log(e);

// Rest operator
const arr2 = ['mujahid', 'sulman', 'sahil', 'Anis'];
const [g,s, ...f] = arr2
console.log(g,s,f); 

 // // spread operator in function

const numbers = [1, 2, 3, 5, 7];

function sum(a, b, c, d) {
    return a + b + c + d
}
console.log(sum(...numbers)) // it will get only return values rather than how many values are intalized.

function classroom1() {
    return ["1", "6", "3"]
}

var tmp = classroom1();
var firstclass, secondclass, thirdclass;
var o = {};
o.firstclass = tmp[0];
o.secondclass = tmp[1];
o.thirdclass = tmp[2];
console.log(o.secondclass);
console.log(o)

// Rest 
function fay1(...arr) {
    return arr;
}
console.log(fay1(['fayyaz', 'danish', 'ayyaz', 'adnan', 'arbaaz', 'uzair']));

// Spread
function fay2(...arr) {
    console.log(arr);
    let total = 0
    for (let i of arr) {
        total += i
    }
    return total
}
console.log(fay2(1, 2, 3, 4, 5, 6, 7, 8)); // 36

// Rest
function fay3(a, b, ...c) {
    console.log(`${a} ${b} ${c}`);
    console.log(c);
    console.log(c.length); // 3
    console.log(c.indexOf('md.kaif')); // 2
}
fay3('md.Sami', 'md.Siraj', 'Umran-Malik', 'md.samad', 'md.kaif');

// sprit or rest oprater


// normal
function sum(a, b, c, d, e) {
    console.log(a + b + c + d + e);
}
sum(1, 2, 3, 4, 5)

// // rest
function restsum(...arr) {
    // console.log(arr);
    // let total = 0;
    // for (let i of arr) {
    //     total += i
    // }
    // console.log(total);
    return arr.reduce((a, b) => {
        return a + b
    })
}
restsum(1, 2, 3, 4, 5)


function fun(a, b, ...c) {
    console.log(`${a} ${b}`); // Ronaldo Neymar
    console.log(c); // [Pele Messi Edan]
    console.log(c[0]); // Pele
    console.log(c.length); // 3
    console.log(c.indexOf('Edan')); //2
}
fun('Ronaldo', 'Neymar', 'Pele', 'Messi', 'Edan');


// // spread
function spreadsum(a, b, c) {
    console.log(a + b + c);
}
// spreadsum(1,2,3);]
let arrVal = [1, 2, 3]
// spreadsum.apply(null,arrVal);
// es6
spreadsum(...arrVal)

// let arr1 = [1, 2, 3, 4];
// let arr2 = [5, 6, 7, 8];
// let arr4 = [9, 10, 11, 12];
// let arr3 = arr1.concat(arr2)
// es6
// let arr3 = [...arr1, ...arr2, ...arr4]
// console.log(arr3);

// // let arrc1 = [1, 2, 3, 4];
// // let arrc2 = arrc1;
// // arrc2.push(5,6);
// // es6
// let arrc2 = [...arrc1, 5, 6]
// console.log(arrc2);
// console.log(arrc1);