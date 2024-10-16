// Padding =>  JavaScript may "padding" method ka istamal specific length may extra length kay saat words ko add kerna may hota hay
// Padding Start => start padding left side
// Method Name => padstart()

const str = "Hello";

const padStart = str.padStart(5);  // Hello
console.log(padStart);

const padStart1 = str.padStart(8);
console.log(padStart1);   //        Hello

const padStart2 = str.padStart(8, "*"); // ***Hello
console.log(padStart2);

const padStart3 = str.padStart(8, "12345");
console.log(padStart3);              // 123Hello

const padStart4 = str.padStart(8, "ab");
console.log(padStart4);   // abcHello

// Padding End => right end padding 
// Method Name => padEnd(); 

const str2 = "Hello";

const padEnd = str2.padEnd(5);
console.log(padEnd);

const padEnd1 = str.padEnd(8, "ab");
console.log(padEnd1);

const padEnd2 = str2.padEnd(8);
console.log(padEnd2);

const padEnd3 = str2.padEnd(8, "*");
console.log(padEnd3);

const padEnd4 = str2.padEnd(8, "12345");
console.log(padEnd4);

// trim => JavaScript may (trim) method ka istamal string may extra space ko htanay kay liya kiya jata hay
const strTrim = "     Hello     ";
const trimStr = strTrim.trim();
console.log(strTrim);    // "    Hello    "
console.log(strTrim.length);  // 15
console.log(trimStr);      // Hello
console.log(trimStr.length); // 5

// trimStart => is ka use starting space htanay kay liya kiya jata hay
const trimStart = "        Adnan";
const startTrim = trimStart.trimStart();
console.log(trimStart);       //  "     Adnan     "
console.log(startTrim.length); // 5
console.log(startTrim);        // Adnan 
console.log(trimStart.length); // 13

// trimEnd => is ka use End space htanay kay liya kiya jata hay
const trimEnd = "Adnan      ";
const endTrim = trimEnd.trimEnd();
console.log(trimEnd);  // "Adnan      "
console.log(endTrim.length); // 5
console.log(endTrim);        // Adnan
console.log(trimEnd.length); // 11
