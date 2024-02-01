// Subtask-1:
// Display sum of all the odd numbers from 91 to 129.
// Subtask-2:
// Display sum of all the even numbers from 51 to 85.

//while loop :sum of all the odd numbers from 91 to 129.
let x = 91;
let sum = 0;
while (x <= 129) {
    if (x % 2 !== 0) {
        sum = sum + x;
    }
    x++;
}
console.log("addition:", sum);

//while loop :sum of all the even numbers from 51 to 85.
let num = 51;
let sums = 0;
while (num <= 85) {
    if (num % 2 !== 1) {
        sums = sums + num;
    }
    num++;
}
console.log("even sum :",sums);