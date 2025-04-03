// task 1
// let arr=[];
// let n=5;
// let a=6;
// for (let i = 0; i < n; i++) {
//     arr.push(a);
// }
// console.log(arr);

// task 2
// let arr=[];
// let c=Number(prompt("baslangic ededi qeyd edin: "));
// let b=Number(prompt("son ededi qeyd edin: "));
// for (let i = c; i <= b; i++){
//     arr.push(i)
// }
// console.log(arr);

// task 3
// let word=prompt("Sozu daxil edin: ")
// let letter=prompt("herfi daxil edin: ")
// let arr=[];
// for (let i = 0; i < word.length; i++) {
//     if (word[i]==letter) {
//         arr.push(letter,i)
//         console.log(arr);
//     }
// }

// task 4
let arr = [2,3,4,5,7];
let n;
let median;
for (let i = 0; i < arr.length; i++) {
    
    if (arr.length%2===0) {
        n=parseInt(arr.length/2);
        median=(arr[n-1]+arr[n])/2;
        
    }
    else{
        n=parseInt(arr.length/2);
        median=arr[n];
    }
    console.log(median);
}

