num=2
x=600851475143
i=2

while (num<x):
    if x%num==0:
            print (num)
            for i in range (2,num):
                if num%i==0: print ("Discard",num)
    num=num+1

    
