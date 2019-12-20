var i=1
var j=0
var multip=0
var solve=0

for (var i = 1; i < 500; i++) {
j=1
  while (j<500) {
    j=j+1
    multip=Math.sqrt(i**2 + j**2);
    solve = multip + i + j
    if (solve==1000) {
      console.log(multip + " " + i + " " + j + " Total = " + solve);
  }
}
}
