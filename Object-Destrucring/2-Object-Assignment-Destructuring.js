const detal = {name:"Adnan",age:20,email:"adananchouhan@gmail.com",mobileNo:9895767235};
const {name,age,email,mobileNo = 8992,address = "5v road"} = detal;
console.log(name,email);    // Adnan adananchouhan@gmail.com
console.log(age,mobileNo);  // 20 9895767235
console.log(address);       // 5v road

const obj1 = { fname: "Adnan", lname: "Chouhan", study: "BCA 2year" };
let { fname, ...study} = obj1;
console.log(study);   // { lname: 'Chouhan', study: 'BCA 2year' }
console.log(fname); // Adnan

// let { study, ...lname } = obj1;
// console.log(lname);  // { fname: 'Adnan', lname: 'Chouhan' }