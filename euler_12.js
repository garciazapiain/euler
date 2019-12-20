let trian = 0
let divisible = 0
let j =1;

while (divisible<=500){
    trian = 0;
    divisible = 0;
    j = j+1;
    trian = (j+1)*j / 2;
    for(z=1; z<=trian; z++){
        if(trian%z==0){
            divisible++;
        }
    }
    console.log('triangular number', trian, 'is divisible by ', divisible)
}

