// You are given the following information, but you may prefer to do some research for yourself.

// 1 Jan 1900 was a Monday.
// Thirty days has September,
// April, June and November.
// All the rest have thirty-one,
// Saving February alone,
// Which has twenty-eight, rain or shine.
// And on leap years, twenty-nine.
// A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
// How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?

day= ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
month =['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let z=-1;
let counter =0;
function sundays (startyear, endyear){
    for (startyear; startyear<endyear; startyear++){
        for(i=0; i<12; i++){
            if(i==0||i==2||i==4||i==6||i==7||i==9||i==11){
                console.log('it is ' + month[i] + ' and there is 31 days')
                for (j=1; j<31; j++){
                    if (z==6){
                        z=0
                    }
                    else{
                        z++
                    }
                    console.log('It is ' + month[i]+ j + ' it is a ' + day[z])
                    if (j==1 && z==6){
                        counter = counter + 1
                        console.log('It is first of the month & its sunday!')
                    }
                }
            }
            else if(i==3||i==5||i==8||i==10){
                console.log('it is ' + month[i] + ' and there is 30 days')
                for (j=1; j<31; j++){
                    if (z==6){
                        z=0
                    }
                    else {
                        z++
                    }
                    console.log('It is ' + month[i]+ j + ' it is a ' + day[z])
                    if (j==1 && z==6){
                        counter = counter + 1
                        console.log('It is first of the month & its sunday!')
                    }
                }
            }
            else {
                if(startyear%4==0){
                    console.log('it is February and there are 29 days')
                    for (j=1; j<31; j++){
                        if (z==6){
                            z=0
                        }
                        else {
                            z++
                        }
                        console.log('It is ' + month[i]+ j + ' it is a ' + day[z])
                        if (j==1 && z==6){
                            counter = counter + 1
                            console.log('It is first of the month & its sunday!')
                        }
                    }
                }
                else{
                    console.log('it is February and there 28 days')
                    for (j=1; j<31; j++){
                        if (z==6){
                            z=0
                        }
                        else {
                            z++
                        }
                        console.log('It is ' + month[i]+ j + ' it is a ' + day[z])
                        if (j==1 && z==6){
                            counter = counter + 1
                            console.log('It is first of the month & its sunday!')
                        }
                    }
                }
            }
        }
      
    }
}

sundays(1900,2000)
console.log(counter);