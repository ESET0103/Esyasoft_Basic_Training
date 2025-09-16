# Unsupervised learning : Discovering Hidden pattern in Data
   eg - Finding unknown pattern
        Feature Engineering

CORE Task of unsupervised learning
1. clustering
2. Dimensionality Reduction
3. Association


# Clustering
    Dividing a population or data points into a number of groups such that data points in the same objects
    
    ALGO-
    1. K means clustering 
    Steps - >
        1. Assigning datapoints
        2. Find Euclidean Distance
        3. Finding minm distance (Updata step)
        4. Iteration

    CHALLENGE - choosing 'K'
    Method - 
    1. The Elbow Method

        step to find K ---

        * run k means for a range of k values

        * for each k, cal. the wcss(inertia). wcss measures the total sq. distance between   each point and its centroid. A smaller vcss mean the clusters are more compact

        * plot the wcss for each k value

        * look for an elbow in the plot, the point where the reate of decrease in twcss sharply slows down. this point suggests a good balance. 

