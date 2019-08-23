# Bamazon

#### Short Descriptioin

This app is meant to allow a customer to buy items we have in stock. As they go through the full process, the amount we have in stock will decrease according to how many they bought. This will be updated in our database stored in MySQL.

#### Technologies Used

* JavaScript, Node.js
* MySql
* Inquirer
* CLI-Table

#### Code Break Down

* To get started you have to run _npm install_ to install the required packages needed to run the program
* Next you'll need to copy and paste my _bamazonSCHEMA.sql_ file into your MySQL database
    * Don't forget to include your password using the .env file on __*Line 12*__
* *Lines 1-4* I Require **dotenv, mysql, inquirer, and cli-table**
    * **dotenv** allows me to keep my database password safe
    * **MySQL** is the database used
    * **Inquirer** is the prompter I use to get user input
    * **CLI-Table** makes displaying my database information cleaner to the users eye
* Once everything is included and connected, I call the Start() function **after** establishing a connection to MySQL
* Start() Prompts the user to confirm they would like to continue on with the app.
* Assuming the user would like to use the rest of the app the Start() chains into another function
* Every function has a specific task to execute, and at the end of each function it calls another prompting the user with more questions for possible purchases

#### Images for Proof

![1](/images/Snip1.PNG)
![2](/images/Snip2.PNG)
![3](/images/Snip3.PNG)
![4](/images/Snip4.PNG)
