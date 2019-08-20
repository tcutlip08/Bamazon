require("dotenv").config();
var mysql = require('mysql');
var inquirer = require('inquirer');

var password = process.env.password

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: password,
    database: 'bamazon_db'
});
connection.connect(function (err) {
    if (err) throw err;
    // console.log('connected as id ' + connection.threadId);
    console.log("Welcome to the Marietta SuperStore!");
    start();
});

function start() {
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirm',
            message: 'Would you like to make a purchase?',
            default: true
        }
    ]).then(function (data) {
        if (data.confirm === true) {
            displayProducts();
        } else {
            console.log("Have a nice day!");
            connection.end();
        }
    });
}

function greetCustomer() {

    inquirer.prompt([
        {
            type: 'input',
            name: 'item',
            message: 'What would you like to buy?(Enter the ID Number)',
            filter: Number
        },
        {
            type: 'input',
            name: 'quantity',
            message: 'How many would you like?',
            filter: Number
        }
    ]).then(function (data) {
        connection.query('SELECT * FROM products WHERE item_id = ?', data.item, function (err, res) {
            if (err) throw err;

            if (data.quantity < res[0].stock_quantity) {
                console.log("====================");
                console.log(res[0].product_name + ": " + data.quantity);
                console.log("Total: $" + (res[0].price * data.quantity).toFixed(2));
                console.log("====================");
                confirmPurchase(data.item, res[0].stock_quantity, data.quantity);
            } else {
                console.log("Sorry, we currently don't have enough in stock");
            }
        });
    });
}

function confirmPurchase(id, sQuan, rQuan) {

    inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirm',
            message: 'Are you happy with this purchase?'
        }
    ]).then(function (data) {
        // console.log(data);
        // console.log(sQuan - rQuan);
        if (data.confirm === true) {
            console.log("Thank you for shopping at our Marietta SuperStore!!");
            connection.query('UPDATE products SET ? WHERE ?',
                [
                    {
                        stock_quantity: sQuan - rQuan
                    },
                    {
                        item_id: id
                    }
                ], function (err, res) { });
            start();
        } else {
            console.log("Sorry for the inconvenience");
            start();
        }


    });
}

function displayProducts() {
    connection.query('SELECT * FROM products', function (err, res) {
        if (err) throw err;
        console.log("====================");
        for (let i = 0; i < Object.keys(res).length; i++) {
            console.log("ID: " + res[i].item_id + " | " + res[i].product_name + " | Price: $" + res[i].price + " | Quantity Left: " + res[i].stock_quantity);
        }
        console.log("====================");

        greetCustomer();
    });
}