
## Supervised Learning -> 
Target is available, we train the model based on the target

-> Label - the dpendent variable, the correct answer we want to predict.
-> Features - all the independent variables that affect the Label data;.

# work flow:
raw data -> Data preprocessing -> Split Data(Train/Test) -> Evaluate the Model -> Fine Tunning -> Make Predictions

# Data PreProcessing
    Important Steps
    1. Handling Missing Values
    2. Features Scaling
    3. Encoding Categorical Data

# Types of Supervised learning
1. Regression ->
    * predict a continous numerical value
2. Classification ->
    * predict a categorical data
    ex - spam or not

# Confusion Matrics
            +ve    -ve
          _______________
    True |      |       |
         |______|_______|
   False |      |       |
         |______|_______|

# Challenges in Supervised Learning

1. overfitting -> training outcomes is 100% , but on new data model fails
2. Underfitting -> model performs poorly on both training and validating datasets
3. Data quality -> garbage in and garbage out
4. Feature Engineering -> Selecting important features

# Hyperparameter Tuning

