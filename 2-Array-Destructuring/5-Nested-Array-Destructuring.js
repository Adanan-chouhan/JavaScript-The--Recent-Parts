const arr = [1,[2,3],4];
const [a,[b,c],d] = arr;
console.log([a,[b,c],d]);  // [ 1, [ 2, 3 ], 4 ]

const arr1 = [1,2,[3,4,5],6,7,[8,9]];
const [e,f,[g,h,i],j,k,[l,m]] = arr1;
console.log([g,h,i]); // [ 3, 4, 5 ]
console.log([l,m]);   // [ 8, 9 ]


const arr3 = ['fayyaz', 'khilji', ['danish', 'chouhan'], 'adnan', 'chouhan', ['Arbaaz', 'khilji'], 'ayyaz'];
// const [a, b, [c, d], e, f, [g, h], j] = arr3;
// console.log(c);

const arr4 = [[
    ['fayyaz', 'urrehman'],
    ['Arbaaz', 'khilji'],
], [
    ['adnan', 'chouhan'],
    ['danish', 'chouhan'],
],
];
const [firstgroup, secondgroup] = arr4;
const [[fayyaz, urrehman], [Arbaaz, khilji]] = firstgroup;
const [[,,chouhan], [danish, chouhankhan, fake = "deafultValue"]] = secondgroup;
console.log(fayyaz);
console.log(urrehman);
console.log(Arbaaz);
console.log(khilji);
// console.log(adnan);
console.log(chouhan);
console.log(danish);
console.log(chouhankhan);
console.log(fake);