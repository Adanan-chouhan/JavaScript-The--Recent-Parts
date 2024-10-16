//Regular Expression => 
//Regular expression, ya regex, ek powerful tool hai jo strings ko search, match, aur manipulate karne ke liye istemal hota hai. Ye ek sequence of characters hai jo ek search pattern ko define karta hai.

// Matching 
let pattern = /hello/;
let str = "hello world";
let result = pattern.test(str);
console.log(result); // Output: true

let pat1 = /[a-z]/i;  // // i is ignore cases and maching all alfabate small or capital
let pass1 = "Aaf";
console.log(pat1.exec(pass1));

let pat2 = /[a-z]/;
let pass2 = "ABCD57";
console.log(pat2.exec(pass2));  // answer is null beacuse pat2 is check only for small later

let pat3 = /[a-z]/i;
let pass3 = "67878A";
console.log(pat3.exec(pass3)); // answer is true becose capitlize "A" is avilable in index 5

let pat4 = "javaScripte is the more populer language";
let pass4 = pat4.match(/javaScripte/ig);
console.log(pass4);

// search() method in Regular Expression
let name = "My name is Adnan chouhan";
let ser = name.search(/Adnan/i);
console.log(ser);  //  search Method return index no "Adnan" is starting index no is  11

//  replace() Method in regular Expression
let str1 = "welcome to Hello world";
let rep = str1.replace(/Hello world/i, "My file");
console.log(rep);  // welcome to My file

// Javascript regex password patterns
let password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*\])(?=.[8,])/g;
let pass = "Adnan@4567";
let check = password.test(pass)
if (check == true) {
    console.log("Strong Password");
} else {
    console.log("Weak Password");
}




