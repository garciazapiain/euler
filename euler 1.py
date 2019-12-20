i=1
x=13195
z=0
while (i != x):
    if i%3==0:z=z+i
    if i%5==0 and i%3==0:z=z
    elif i%5==0:z=z+i
    i=i+1
print(z)
