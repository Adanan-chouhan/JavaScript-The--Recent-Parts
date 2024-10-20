const obj = {
   studentName: "Adnan chouhan",
   study: "BCA 2year",
   address: {
      parmanent: { flatNo: 79, city: "Jodhpur" },
      temprorary: { flatNo: 46, state: "Rajasthan" },
   },
   mobileNo: 9672529969,
}


const { studentName, study, address, mobileNo } = obj;
console.log(studentName);  // Adnan chouhan
console.log(study); // BCA 2 year
console.log(address);
console.log(address.parmanent.city); // jodhpur
console.log(mobileNo); // 9672529969



