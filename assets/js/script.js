// Task 1:
// Daxil edilən yaşa görə istifadəçinin pensiya yaşına çatıb-çatmadığını tapan proqram yazın.
// Ədəd müsbət və 125-dən balaca olmalıdır.
// let age=Number((prompt("Yasinizi daxil edin: ")));

// if (age<0 && age>125) {
//      alert("Daxil edilen yas duzgun deyil")
// }else{
//     if (age<65) {
//     console.log("Pensiya yasina catmamisiniz");
// }
// else{
//     console.log("pensiya yasina catmisiniz");
// }
// }

// Task 2:

// Daxil edilən 3 rəqəmə əsasən üçbucağın tərəfinə görə hansı növü olduğunu müəyyənləşdirən proqram yazın.Hər üç rəqəm müsbət olmalıdır.
// let a = Number(prompt("Ucbucagin birinci terefini daxil edin: "));
// let b = Number(prompt("Ucbucagin ikinci terefini daxil edin: "));
// let c = Number(prompt("Ucbucagin ucuncu terefini daxil edin: "));

// if (a > 0 && b > 0 && c > 0) {
//   if (a == b && a == c && b == c) {
//     console.log("beraberterefli ucbucaqdir");
//   } else if (a == b || a == c || b == c) {
//     console.log("beraberyanli ucbucagdir");
//   } else {
//     console.log("muxteliftereflidir");
//   }
// } else {
//   console.log("ucbucaq1 yarana bilmez");
// }

// Task 3:

// Daxil edilən rəqəmin cüt yoxsa tək olmasını tapın.Ədəd müsbət olmadır.
// let eded=Number(prompt("Ededi daxil edin: "))
// if (eded%2==1) {
//     console.log("eded tek ededdir");
// }
// else{
//     console.log("eded cut ededdir");

// }

// Task 4:

// Daxil edilən 1-12 arasındakı müsbət rəqəmlərdən hər hansı birinə uyğun olan ayın adını yazan proqram yazın. Məsələn 2 daxil edilsən Fevral yazılmalıdır.(switch ilə yazılmalıdır.)
// let month = prompt("1-12 arasinda reqem daxil edin:");
// switch (month) {
//   case "1":
//     console.log("Yanvar");
//     break;
//   case "2":
//     console.log("Fevral");
//     break;
//   case "3":
//     console.log("Mart");
//     break;
//   case "4":
//     console.log("Aprel");
//     break;
//   case "5":
//     console.log("May");
//     break;
//   case "6":
//     console.log("Iyun");
//     break;
//   case "7":
//     console.log("Iyul");
//     break;
//   case "8":
//     console.log("Avqust");
//     break;
//   case "9":
//     console.log("Sentyabr");
//     break;
//   case "10":
//     console.log("Oktyabr");
//     break;
//   case "11":
//     console.log("Noyabr");
//     break;
//   case "12":
//     console.log("Dekabr");
//     break;
//   default:
//     console.log("daxil edilen reqem duzgun deyil");
//     break;
// }

// Task 5:

// Daxil edilən müsbət ədədin 3 və 5 ədədinə eyni anda bölünüb-bölünmədiyini tapan proqram yazın.
// let musbetEded = Number(prompt("eded daxil edin: "));
// if (musbetEded>0 && musbetEded%3==0 && musbetEded%5==0) {
//     console.log("eded 3e ve 5e tam bolunur");
// }
// else if(musbetEded>0 && musbetEded%5==0){
//     console.log("eded sadece 5e bolunur");

// }
// else if(musbetEded>0 && musbetEded%3==0){
//     console.log("eded sadece 3e bolunur");

// }
// else{
//     console.log("eded 3e ve 5e eyni anda tam bolunmur");
// }

// Task 6:

// Daxil edilən müsbət ədədin 2-yə tam bölünüb-bölünmədiyini tapan proqram yazın. Əgər tam bölünürsə, consolda bölündü yazılsın,tam bölünmürsə qalıq hesablanıb yazılsın.
// let musbetEded=Number(prompt("eded daxil edin: "));
// if (musbetEded%2==0 && musbetEded>0) {
//     console.log("eded 2e tam bolunur");
// }
// else{
//     console.log("eded 2e tam bolunmur ve qaliq: " + (musbetEded%2));
// }

// Task 7:

// Daxil edilən 2 ədədin hasilinin müsbət yoxsa mənfi ədəd olmasını göstərən funksiya yazın.
// let eded1=Number(prompt("eded daxil edin: "));
// let eded2=Number(prompt("eded daxil edin: "));
// if (eded1*eded2>0) {
//     console.log("bu ededlerin hasili musbetdir: " +(eded1*eded2));
// }
// else{
//     console.log("bu ededlerin hasili menfidir: " +(eded1*eded2));

// }

// Task 8:

// Daxil edilən müsbət ədədin 1-100 arasında olub-olmadığını tapan proqram yazın.
// let eded=Number(prompt("eded daxil edin: "));
// if (eded>1 && eded<=100) {
//     console.log("eded 1 ve 100 arasindadir");
// }
// else{
//     console.log("eded bu araliqda deyil");
// }

// Task 9:

// Daxil edilən 3 müsbət ədədin ən böyüyünü tapan proqram yazın.
// let a = Number(prompt("eded daxil edin: "));
// let b = Number(prompt("eded daxil edin: "));
// let c = Number(prompt("eded daxil edin: "));
// if (a > b) {
//   if (a > c) {
//     console.log(a + "en boyuk ededdir");
//   } else {
//     console.log(c + "en boyuk ededdir");
//   }
// } else if (b > a) {
//   if (b > c) {
//     console.log(b + "en boyuk ededdir");
//   } else if (b < c) {
//     console.log(c + "en boyuk ededdir");
//   }
// }

// Task 10:

// Tələbənin daxil etdiyi bala görə A B C D E F qiymətlərindən hansını aldığını müəyyənləşdirrən proqram yazın. 90 və yuxarı üçün "A", 80-89 üçün "B", 70-79 üçün "C", 60-69 üçün "D", 59 və daha aşağı qiymətlər üçün "F". Daxil edilən rəqəm müsbət, sıfırdan böyük və 100-dən kiçik olmalıdır.
// let bal=Number(prompt("balinizi daxil edin: "));
// if (bal>90 && bal<=100) {
//     console.log("A");
// }
// else if (bal>80 && bal<=90) {
//     console.log("B");
// }
// else if (bal>70 && bal<=89) {
//     console.log("C");
// }
// else if (bal>60 && bal<=70) {
//     console.log("D");
// }
// else if (bal>50 && bal<=60) {
//     console.log("E");
// }
// else if (bal<59) {
//     console.log("F");
// }
// else if (bal<0 || bal>100) {
//     console.log("Baliniz duzgun deyil");

// }

// Task 11:

// İstifadəçi yaşını daxil edir.Yaş 18-dən azdırsa "Yeniyetmə", 18-64 yaşdadırsa "Yetkin", 65 və daha yuxarıdırsa "Yaşlı" kimi çıxış edən proqram yazın.Ədəd müsbət olmalıdır.

// let age=Number(prompt("yasinizi daxil edin: "));
// if (age<18) {
//     console.log("yeniyetme");
// }
// else if (age>=18 && age<=64) {
//     console.log("yetkin");
// }
// else if (age>=65) {
//     console.log("yasli");
// }

// Task 11:

// Daxil edilən saata uyğun "Sabahınız xeyir", "Günortanız xeyir", "Axşamınız xeyir" yazan proqram yazın. Ədəd müsbət və 0-24 arasında olmalıdır.
// let clock=Number(prompt("saati daxil edin: "));
// if (clock<=15 && clock>=9 ) {
//     console.log("sabahiniz xeyir");
// }
// else if (clock>15 && clock<=19) {
//     console.log("gunortaniz xeyir");
// }
// else if (clock>20 && clock<=24) {
//     console.log("axsaminiz xeyir");
// }

// Task 12:

// Daxil edilən x və y ədədlərinin aşağıdakı şərtlərinə görə hesablamasını edən proqram yazın.

// Əgər x>0 və y<0 isə 4x+2y+4 ifadəsini hesablayın.
// Əgər x>0 və y=0 isə 2x-y+3 ifadəsini hesablayın.
// Əgər x<0 və y>0 isə 3x+4y+3 ifadəsini hesablayın.

// let x=Number(prompt("saati daxil edin: "));
// let y=Number(prompt("saati daxil edin: "));
// if (x>0 && y<0) {
//     console.log(4*x+2*y+4);
// }
// else if (x>0 && y==0) {
//     console.log(2*x-y+3);
// }
// else if (x<0 && y>0) {
//     console.log(3*x+4*y+3);
// }
// let arr=[1,2,3,4,5,6,7,8,9,11];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i]%2==0) {
//     console.log(i+ " indexli  element cutdur ve deyeri: " + arr[i])
//   }
// }
// task 1. 1-100 aralığında sonu 9 ilə bitən ədədlərin sayını tapan proqram yazın
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

//task 14
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
//
// const arr=[3,5,45,21,34,56];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]===21) {
//         console.log("massivde 21 ededi var ve indeksi: "+ i);
//         break;
//     }
// }

// let a = 40;
// let bolunmedi = true;
// for (let i = 2; i < a; i++) {
//   if (a % i == 0) {
//     console.log("eded murekkebdir");
//     bolunmedi = false;
//     break;
//   }
// }
// if (bolunmedi === true) {
//   console.log("eded sadedir");
// }

// for (let i = 2; i < 100; i++) {
//   let sade = true;
//   for (let j = 2; j < i; j++) {
//     if (i % j === 0) {
//       sade = false;
//       break;
//     }
//   }
//   if (sade) {
//     console.log(i);
//   }
// }
// const pet={
//     petName:"cat",
//     petType:"girl",
//     petAge:5,
//     white:true,
//     friends:[
//         {
//             firstName: "Aida",
//             age: 25,
//         },
//         {
//             firstName: "Ainur",
//             age: 99,
//         },
//         {
//             firstName: "Averdy",
//             age: 85,
//         },

//     ]

// }
// let value = prompt(`Deyer daxil edin:
//     name
//     age
//     color
//     friends
//     type`);
// console.log(pet[value]);
// log

// const cars = [
//     {
//       name: "toyota",
//       year: 1995,
//       price: 15000,
//     },
//     { name: "bmw",
//       year: 2003,
//       price: 115000 
//     },
//     {
//       name: "hundai",
//       year: 2003,
//       price: 45000,
//     },
//     {
//       name: "mercedes",
//       year: 1998,
//       price: 42000,
//     },
//   ]
// console.log(cars);
// for (let i = 0; i < cars.length; i++) {
//     if (cars[i].year>2000) {
//         console.log(cars[i].name);
        
//     }
// }

