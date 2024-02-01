// while loop task 2
// Subtask-1:
// Find all the odd numbers from 61 to 100.
// Subtask-2:
// Find all the even numbers from 78 to 98.

//for loop oadd number form 61 to 100;
let num = 61;
while (num <= 100) {
    if (num % 2 === 1) {
        console.log("system one:", num);
    }
    num++;
}

let x = 61;
while (x <= 100) {
    if (x % 2 !== 0) {
        console.log("system two", x);
    }
    x++;
}

let y = 61;
while (y <= 100) {
    console.log("system three", y);
    y += 2;
}