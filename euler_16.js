// 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

// What is the sum of the digits of the number 2^1000?

let n = BigInt(2**1000);
let digits = (""+n).split("");
let sum = 0;

// console.log(n);
// console.log(digits);

for (i=0;i<digits.digitsgth;i++){
    sum = parseFloat(digits[i]) + sum;
    console.log(sum)
}


