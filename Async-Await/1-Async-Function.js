// // javaScript mein async aur await keywords ka istemal asynchronous programming ke liye hota hai. Jab hum kisi function ke samay lagne wale tasks ko asynchronously execute karte hain, toh hum async aur await ka istemal karte hain.

// // Async Function
// JavaScript mein async function ka use async (asynchronous) kaam ko handle karne ke liye kiya jata hai, jaise API se data fetch karna ya koi time-consuming task ko manage karna. Iska fayda yeh hai ki aapko promise ke saath then aur catch ka use bar-bar nahi karna padta, aur code readable ho jata hai.

// // Jab aap kisi function ke samne async likhte hain, toh woh function ek special type ka hota hai, jise hum "asynchronous function" kehte hain.
// // Async function ke andar aap multiple tasks ko ek saath start kar sakte hain, aur phir unke completion ka wait bhi kar sakte hain.

// // Await Keyword
// // await keyword async function ke andar use hota hai, jisse program execution wait karega jab tak ki await ke saath di gayi task complete na ho jaye.
// // Yeh keyword sirf async functions ke andar hi kaam karta hai.

// // promises in async function 
// function resolveAfter2Seconds() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve('resolved');
//       }, 2000);
//     });
//   }

//    async function asyncCall() {
//     console.log('calling');
//     const result = await resolveAfter2Seconds();
//     console.log(result);
//     // Expected output: "resolved"
  // }
// 
  // asyncCall();

// async function fun() {
//     console.log("1:Hello world");
//     console.log("2:Hello world");
//     console.log("3:Hello world");
//     await console.log("4:Hello world");
//     console.log("5:Hello world");
// }
// console.log("hello");
// fun();
// console.log("6:Hello world");
// console.log("7:Hello world");


// async function fun2(){
//     console.log("Execute is : 2");
//     const  respone = await fetch("Async-Await/my-info.json");
//     console.log("Execute is : 3");
// const  info = await respone.json();
// return info;
// }

// console.log("Execute is : 1");
// const  test  = fun2();
// console.log(test)  

// async function fun3(){
//     const  respone = await fetch("Async-Await/my-info.json");
//     const  info = await respone.json();
//     return info;
// }

// fun3().then((res)=> {
//     console.log(res);
// }).catch((error)=> {
//     console.log(error);
// });

// async function fun4(){
// try{const respone = await fetch("Async-Await/my-info.json");
// const info = await respone.json();
// return info;
// }
// catch(error){
// console.log(error);
// }
// }

// fun4().then((res)=>{
//     console.log(res)
// });


async function harry() {
  let delhiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("27 Deg")
    }, 2000)
  })

  let bangaloreWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("21 Deg")
    }, 5000)
  })


  // delhiWeather.then(alert);
  // bangaloreWeather.then(alert);
  console.log("Fatching Deli Weather Please wait ...");
  let delhiW = await delhiWeather;
  console.log("Fetched Delhi Weather : " + delhiW);
  console.log("Fetched Banglore Weather Please wait ...");
  let bangloreW = await bangaloreWeather;
  console.log("Fetched Banglore Weather : " + bangloreW);
  return [delhiW, bangloreW];
}

console.log("Welcome to Weather control room");
let a = harry();
a.then((value) => {
  console.log(value)
});






