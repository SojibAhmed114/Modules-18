// for loop structure;
// for (first part; second part; third part){
//     loop statement
// }
//first part: loop variable declaration
//second part: loop condition
//third part: loop variable change

// const friendName = ["sojib", "shohan", "karun", "alomgir", "mizan", "riyajul"];
// for (const friends of friendName) {
//     console.log(friends);
//     console.log("we are friends"); //aro onek kichu kora jabe.
// }

// let dstName = ["sojib", "shohan", "karun", "alomgir", "mizan", "riyajul"];
// for (let Names of dstName){
//     console.log(Names);
// }

// let shinthia = [21, 124, 124, 21, 25, 26, 25, 35, 85, 95, 74, 41];
// for ( let subha of shinthia){
//     console.log(subha);
// }

//same work 20 bar print

// for (let i = 0; i < 20; i++){
//     console.log("Sinthia live in saghata");
// }

// more one text 20 bar print
// for (let i = 0; i < 20; i++){
//     console.log("loop fundamental is hard.");
// }

// while loop 20 theke 50 porjonto addition
// let mySum = 0;
// for (let i = 20; i <= 50; i++){
//     mySum = mySum + i;
// }
// console.log(mySum);

//for even number
// for (let i = 0; i < 10; i=i+2){
//     console.log(i);
// }

//for odd number:
// for (let i = 1; i < 20; i+=2){
//     console.log(i);
// }
//or
// for (let i = 0; i <= 20; i++){
//     if (i % 2 === 1) {
//         console.log(i);
//     }
// }
// or
// for (let i = 0; i <= 20; i++){
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }

//১ থেকে ৩০ পর্যন্ত  ৫ দ্বারা বিভাজ্য:
// for (let n = 1; n < +30; n++){
//     if (n % 5 === 0) {
//         console.log(n);
//     }
// }

//১ থেকে ৩০ পর্যন্ত  ৫ দ্বারা বিভাজ্য সংখ্যার যোগফল:
let sum = 0;
for (x = 1; x <= 30; x++){
    if (x % 5 === 0) {
        sum = sum + x;
    }
}
console.log(sum);


//decremental loop (বড় থেকে েছোট);
// for (let i = 20; i >= 0; i--) {
//   console.log(i);
// }
