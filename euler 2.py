fib1=0
fib2=1
fibnew=0
counter=0
while (fibnew<4000000):
    fibnew=fib1 + fib2
    fib1=fib2
    fib2=fibnew
    if fibnew %2 ==0:counter =counter+fibnew
print(counter)
    

