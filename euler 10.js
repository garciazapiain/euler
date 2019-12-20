var i=3
var j=2
var x=2
var multip=0
var sum=2
var check=0

for (var i = 3; i < 2000000; i=i+2) {
  console.log(i);
  check=0;
  j=2
  x=2
  for (var j = 2; j < i ; j++) {
    if (i%2==0) {
      check=check+1
      break
    }
    multip=0;
    x=2;
    while (x<i) {
      multip = j * x;
      x=x+1
      if (multip==i) {
        check = check + 1;
        break}
      }
  }
  if (check==0) {
    sum = sum + i
  }
}
console.log(sum);
