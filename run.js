require("dotenv").config();
var mysql = require('mysql');
var inquirer = require('inquirer');

var password = process.env.password

console.log(password);

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: password,
    database: 'Bamazon_DB'
});
connection.connect(function (err) {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
});
connection.query('SELECT * FROM products', function (err, res) {
    if (err) throw err;
    console.log(res);
});

inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    }
]).then(function (data) {
    console.log(data);
});