// Destructuring is done based on the index inside the array.
// JavaScript mein "destructuring" ek feature hai jo arrays aur objects se values ko extract (bahar nikalna) karne mein madad karta hai. Iska mtlb hai ki aap arrays ya objects se specific values ko alag karke variables mein store kar sakte hain, jo ki code ko compact aur readable banata hai.

// normal Example 
let arr = [1,2];
let a = arr[0];
let b = arr[1];
console.log(a);  // 1
console.log(b);  // 2

// rigth
let arr1 = [1,2,3,"Adnan"];
let [c,d,e,f] = arr1
console.log(c); // 1
console.log(d); // 2
console.log(d); // 3
console.log(f); // Adnan

let arr2 = {g:1,h:2};
let {g,h} = arr2;
console.log(g);  // 1
console.log(h);  // 2

// String
let str = "Adnan";
let [i,j,k,l,m] = str;
console.log([i,m]); // ["A","n"]
  
// Example 
let num1 = 20;
let num2 = 10;

{
    let temp = num1;
    num1 = num2;
    num2 = temp
}
console.log(num1, num2);

// Example
function date(){
return [1,2,3]
}

let [first,second,third] = date();

console.log(first);  // 1
console.log(second);  // 2
console.log(third);  // 3


const Numbers = [1, 2, 3];
let stored;
[num1, num2, num3] = stored = Numbers
console.log(stored);  // [1,2,3];


// let a = 10;
// let b = 20;
// let c = a;
// // a = b;
// // b = c
// [a,b] = [b,a]
// console.log(a); // 20
// console.log(b); // 10