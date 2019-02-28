require('dotenv').config();
var mysql = require('mysql');
var inquirer = require('inquirer');
var Table = require('cli-table2');
var displayT = require('./displayT.js')

// Create the connection info for the sql database
var connection = mysql.createConnection({
    // I stored these information in a .env file which is not included in being uploaded to Github for privacy purposes. Psuedocoded the default format.
        host: process.env.DB_HOST, //host: 'localhost',
        port: process.env.DB_PORT, //port: 3306,
        user: process.env.DB_USER, //user: 'root'
    password: process.env.DB_PASSWORD, //password: '' *your mysql workbench password*
    database: process.env.DB_DATABASE //database 'bamazon_DB'
});

// Connect to the mysql server and mysql database
connection.connect(function(err) {
    if (err) throw err;

    console.log('\nHello there! Please look through our item list.');
    displayTable();
});

// To start, display all of the items in your Bamazon
var displayTable = function() {
    var display = new displayT();
    connection.query('SELECT * FROM products', function(err, res){
        display.displayInventory(res);
        purchase();
    });
}

// Prompt the user to enter the ID amount that they would like to purchase
var purchase = function() {
    console.log('\n ');
    inquirer
        .prompt([
            {
                name: "id",
                type: "input",
                message: "Which item [ID] would you like the purchase?"
            },
            {
                name: "amount",
                type: "input",
                message: "How many of these items would you like the purchase?"
            }
        ])
        .then(function(answer) {
            connection.query('SELECT product_name, department_name, price, stock_quantity FROM products WHERE ?', {id: answer.id}, function(err, res) {
                
                console.log('\n  You want to buy ' + answer.amount + ' ' + res[0].product_name + ' ' + res[0].department_name + ' for $' + res[0].price + ' each.');

                if (res[0].stock_quantity >= answer.amount) {
                    // If there is sufficient amount of inventory to complete the order, process it by updating the database and let the customer know that the order is complete.
                    var itemQuantity = res[0].stock_quantity - answer.amount;

                    connection.query('UPDATE products SET ? WHERE ?', [{stock_quantity: itemQuantity}, {id: answer.id}], function(err, res) {
                        if (err) throw err;
                    });
                    var total = res[0].price * answer.amount;
                    console.log('\n  Your Order has been fulfilled! The total cost is $' + total + '.\n');

                    userPrompt();
                }
                else {
                    console.log('  Sorry, we do not have a sufficient amount of that item in stock to fulfill your order!\n');

                    userPrompt();
                }
            })
        });
}

function userPrompt() {
    inquirer
        .prompt([
            {
                name: "action",
                message: "Would you like to continue shopping?",
                type: "list",
                choices: ["Yes", "No"]
            }
        ])
        .then(function(answer) {
            switch(answer.action) {
                case 'Yes':
                    displayTable();
                break;

                case 'No':
                    console.log('\n  Thank you, come back again soon!\n');
                    connection.end();
                break;

                default:
                    userPrompt();
            }
        })
};
