// addition recap
// let adds = 10
// adds += 10
// console.log(adds);

// while loop structure:
// let /const variableName = value;
// while (any condition) {
//     console.log //etc statement
//     variableName += 1; //loop variable change
//     or
//     variableName++;
//     or
//     variableName = variableName + 1;
// }



// main rules of while loop (increment = ছোট থেকে বড়)
// let tasks = 0;
// while (tasks < 5) {
//     console.log("please give me a good quality pizza");
//     //tasks += 1;
//     tasks++;
//     //tasks = tasks + 1;
// }


// while loop sum
// let numbers = 1;
// let sum = 0;
// while (numbers < 10) {
//     console.log(numbers);
//     sum = sum + numbers;
//     console.log("sum:", sum);
//     numbers += 1;
// }

// more while sum
// let bus = 1;
// let sums = 0;
// while (bus <= 20) {
//     console.log(bus);
//     sums = sums + bus;
//     console.log("sums numbers:",sums);
//     bus++;
// }

// while loop 20 theke 50 porjonto addition
// let myNum = 20;
// let mySum = 0;
// while (myNum <= 50) {
//     mySum = mySum + myNum;
//     myNum++;
// }
// console.log("20 theke 50 porjonto addition", mySum);


// while loop even number
// let numbers = 0;
// while (numbers < 20) {
//     // console.log(numbers);
//     if (numbers % 2 === 0) {
//         console.log("even number:",numbers);
//     }
//     numbers += 1;
// }

// // while loop odd numbers
// let odd1 = 0;
// while (odd1 <= 20) {
//     if (odd1 % 2 === 1) {
//         console.log(odd1);
//     }
//     odd1++;
// }

// let odd2 = 0;
// while (odd2 <= 20) {
//     if (odd2 % 2 !== 0) {
//         console.log(odd2);
//     }
//     odd2 += 1;
// }

//১ থেকে ৩০ পর্যন্ত  ৫ দ্বারা বিভাজ্য:
let n = 1;
while (n <= 30) {
    if (n % 5 === 0) {
        console.log(n);
    }
    n++;
}

//decremental loop (বড় থেকে েছোট)

// let decrement = 20;
// while (decrement >= 0) {
//     console.log(decrement);
//     decrement--;
// }