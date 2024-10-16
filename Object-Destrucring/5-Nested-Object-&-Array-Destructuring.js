const obj = {
    a : 1,
    b : [500,5000],
    c : 3,
};

const {a,b:[w,y],c} = obj;
console.log(a);         // 1
console.log({b:w});     // { b: 500 }
console.log(c);         // 3
