// task 1
// say=0
// for (let i = 1; i<100; i++) {
//   if (i%10==9) {
//     console.log(i);
//     say++;
//   }
// }
// console.log(say);

// task 2
// let a=Number(prompt("a terefini daxil edin: "));
// let b=Number(prompt("b terefini daxil edin: "));
// let c=Number(prompt("c terefini daxil edin: "))
// if (a===b && a===c && b===c) {
//   console.log("Bu terefler beraberterefli ucbucaq emele getirir");

// }
// else{
//   console.log("getirmir");

// }

// // task 3
// let d=Number(prompt("d terefini daxil edin: "));
// let e=Number(prompt("e terefini daxil edin: "));
// let f=Number(prompt("f terefini daxil edin: "))
// if (d===e || e===f || d===f) {
//   console.log("Bu terefler beraberyanli ucbucaq emele getirir");

// }
// else{
//   console.log("getirmir");

// }

// task 6
// for (let i = 0; i < 100; i++) {
//   if (i%6==0) {
//     console.log(i);

//   }

// }

// task 7
// for (let i = 0; i < 100; i++) {
//   if (i%10===parseInt(i/10)) {
//     console.log(i);
//   }
// }

// // task 8
// for (let i = 0; i < 100; i++) {
//   if (i%10!=parseInt(i/10)) {
//     console.log(i);
//   }
// }

// task 9
// for (let i = 1; i<=9; i++) {
//   for (let j = 1; j <=9; j++) {
//     console.log(i+"*"+j +"="+i*j);
//   }
// }

// task 10
// let factorial=1;
// for (let i = 1; i<=5; i++) {
//   factorial=factorial*i;
// }
// console.log(factorial);

// task 12
// let n=345;
// let arr=[];
// while (n>0) {
//   arr.push(n%10);
//   n=parseInt(n/10);
// }
// console.log(arr.reverse());

// task 13
// let n = 395;
// let maxReqem = 0;
// while (n > 0) {
//   let sonReqem = n % 10;
//   if (sonReqem > maxReqem) {
//     maxReqem = sonReqem;
//   }
//   n = parseInt(n / 10);
// }

// console.log("en boyuk reqem:", maxReqem);

// task 14
// let n = 395;
// let minReqem = 9;
// while (n > 0) {
//   let sonReqem = n % 10;
//   if (sonReqem < minReqem) {
//     minReqem = sonReqem;
//   }
//   n = parseInt(n / 10);
// }

// console.log("en kicik reqem:", minReqem);

// // task 15
// let n=671;
// let cem=0;
// let hasil=1;
// let edediorta;
// say=0;
// while(n>0){
//   let reqem = n%10;
//   cem=cem+reqem;
//   hasil=hasil*reqem;
//   say++;
//   n=parseInt(n / 10);
// }
// edediorta=cem/say;
// console.log(cem);
// console.log(hasil);
// console.log(edediorta);

// task 16
// let n=456;
// for (let i = 0; i < 456; i++) {
//   if (456%i==0) {
//     console.log(i);
//   }
// }

// task 17
// let n = 456;
// let say = 0;
// for (let i = 0; i < 456; i++) {
//   if (456 % i == 0) {
//     console.log(i);
//     say++;
//   }
// }
// console.log("say: " + say);

// task 18
// let n = 456;
// cem = 0;
// hasil = 1;
// for (let i = 0; i < 456; i++) {
//   if (456 % i == 0) {
//     console.log(i);
//     while (i > 0) {
//       let reqem = i % 10;
//       cem = cem + reqem;
//       hasil = hasil * reqem;
//       i = parseInt(i / 10);
//     }
//     console.log(cem);

//   }