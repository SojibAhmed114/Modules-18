// for loop task 2
// Subtask-1:
// Find all the odd numbers from 61 to 100.
// Subtask-2:
// Find all the even numbers from 78 to 98.


// modules 18 for loop odd task 
for (let num = 61; num <= 100; num++){
    if (num % 2 === 1) {
        console.log("system one:",num);
    }
}

for (let nums = 61; nums <= 100; nums++){
    if (nums % 2 !== 0) {
        console.log("system two",nums);
    }
}
for (numb = 61; numb <= 100; numb+=2){
    console.log("system three:",numb);
}

// modules 18 for even task 
for (i = 78; i <= 98; i++){
    if (i % 2 === 0) {
        console.log("system one:",i);
    }
}

for (x = 78; x <= 98; x++){
    if (x % 2 !== 1) {
        console.log("system two:",x);
    }
}
for (y = 78; y <= 98; y=y+2){
    console.log("system three:",y);
}