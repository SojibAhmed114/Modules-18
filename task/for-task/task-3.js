// Subtask-1:
// Display sum of all the odd numbers from 91 to 129.
// Subtask-2:
// Display sum of all the even numbers from 51 to 85.

//sum of all the odd numbers from 91 to 129.
let sum = 0;
for (i = 91; i <= 129; i++){
    if (i % 2 !== 0) {
        //console.log(i);
        sum = sum + i;
    }
}
console.log("addition:", sum);

//sum of all the even numbers from 51 to 85.
let total = 0;
for (x = 51; x < 85; x++){
    if (x % 2 !== 1) {
        //console.log(x);
        total = total + x;
    }
}
console.log("even sum",total);