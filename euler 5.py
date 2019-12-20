i=1
counter=1
x=300000000
divisible=0
while (counter<x):
    while (i<21):
        if counter%i==0: divisible=divisible+0
        else:
            divisible=1
            break
        i=i+1
    if divisible==0: print ("Number divisible by",counter)
    counter=counter+1
    divisible=0
    i=1
