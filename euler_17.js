//Problem:
// If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

// If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?


// NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.

const numbers =
        {
            1:'one',
            2:'two',
            3:'three',
            4:'four',
            5: 'five',
            6: 'six',
            7: 'seven',
            8: 'eight',
            9: 'nine',
            10: 'ten',
            11: 'eleven',
            12: 'twelve',
            13: 'thirteen',
            14: 'fourteen',
            15: 'fifteen',
            16: 'sixteen',
            17: 'seventeen',
            18: 'eighteen',
            19: 'nineteen',
            20: 'twenty',
            30: 'thirty',
            40: 'forty',
            50: 'fifty',
            60: 'sixty',
            70: 'seventy',
            80: 'eighty',
            90: 'ninety'
        }

let newsum=0;
let count=0;

function numberLetters (a) {
    for (i=1; i<=a; i++){
        let digits = (""+i).split("");
        if (digits.length==1){
            newsum = numbers[i].length
        }
        else if(digits.length==2){
            if (digits[0]==1){
                newsum = numbers[i].length
            }
            else if (digits[1]==0) {
                newsum = numbers[i].length
            }
            else{
                x=`${digits[0]}`+0;
                y=digits[1];
                newsum = (numbers[x]).length + (numbers[y]).length
            }
        }
        else if (digits.length==3){
            if (digits[1]==0 && digits[2]==0){
                x=digits[0];
                newsum = (numbers[x]+'hundred').length
            }
            else if (digits[1]==0){
                x=digits[0];
                y=digits[2];
                newsum = (numbers[x]+'hundredand'+numbers[y]).length
            }
            else if (digits[1]==1){
                x=digits[0];
                y=digits[1]+digits[2];
                newsum = (numbers[x]+'hundredand'+numbers[y]).length
            }
            else if (digits [2]==0){
                x=digits[0];
                y=digits[1]+digits[2];
                newsum = (numbers[x]+'hundredand'+numbers[y]).length
            }
            else{
                x=digits[0];
                y=`${digits[1]}`+0;
                z=digits[2]
                newsum = (numbers[x]+'hundredand'+numbers[y]+numbers[z]).length;
            }
        }
        count = count + newsum;
        newsum=0;
    }
}

numberLetters(999);

//this program only counts until 999, so add "onethousand" (11)

console.log (count+11);


