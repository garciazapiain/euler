x=100
j=100
multip=0
temp=multip
lastdig=0
pali=0
while (x<1000):
    while (j<1000):
        pali=0
        multip= x*j
        temp=multip
        j=j+1
        while (multip>0):
            lastdig=multip%10
            pali=pali*10+lastdig
            multip=multip//10
            if temp==pali and pali>900000: print ((pali), "Yes Pali!")
    x=x+1
    j=10
