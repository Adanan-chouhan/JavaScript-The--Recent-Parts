const str = "Adnan";
console.log(...str);   // A d n a n
console.log([...str]); // [ 'A', 'd', 'n', 'a', 'n' ]
console.log(`${str}`); // Adnan

const str1 = "Adnanchouhan";
const [a,b,...c] = str1;
console.log(c); // ['n', 'a', 'n', 'c','h', 'o', 'u', 'h','a', 'n']
console.log([...str1].join("")); //Adnanchouhan


const spread = "Hello world"

console.log (spread) //normal
console.log(...spread) // spread operation -- it will spread each letter.
console.log([...spread]) // it will return array in with strings
console.log([...spread].join(''));  // Hello world

// sprit opreator with string