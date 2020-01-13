const number = 1000000;
let counter = 2;
let prevBigCount = 2;
let prevBigNumber =2;


for(i=2; i<number; i++){
    for(j=i; j>=2; counter++){
        if(j%2==0){
            j= j/2;
            // console.log("From starting number " + i + " its even so now its " + j)
        }
        else{
            j = j * 3 +1;
            // console.log("From starting number " + i + " its odd so now its " + j)
        }
        // console.log("From starting number " + i + " the count was " + counter)
        if (counter > prevBigCount){
            prevBigCount = counter;
            prevBigNumber = i;
        }
    }
    counter = 2  
}

console.log("the number is now" + i + " biggest count so far is " + prevBigCount + " of starting term " + prevBigNumber)