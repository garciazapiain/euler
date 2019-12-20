primecount=2
i=1
num=3
check=0

while (primecount<10001):
            for i in range (2,num):
                if num%i==0: check=0
                if num%i==0: break
                elif num%i>0: check=check+1
            if check>0: primecount=primecount+1
            num=num+1
            check=0
            i=0
print (num-1)
print (primecount)
 
    
