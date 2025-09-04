points = [(1,2),(3,2),(6,0),(3,3)]   #list of tuples represents point with (x,y) cordinates

# for loop to iterate through list

for x,y in points:
    x_cordinate = x
    y_cordinate = y
    if x_cordinate > y_cordinate :          # conditional statement to check which cordinate is greater
        print("The X cordinate is greater than Y cordinate")
    else:
        print("The Y cordinate is greater than X cordinate")