require('dotenv').config();
var mysql = require('mysql');
var inquirer = require('inquirer');

// Create the connection info for the sql database
var connection = mysql.createConnection({
    // I stored these information in a .env file which is not included in being uploaded to Github for privacy purposes.
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

// Connect to the mysql server and mysql database
connection.connect(function(err) {
    if (err) throw err;
    start();
});

// To start, display all of the items in your Bamazon
function start() {
    console.log('Retrieving available items...\n');
    connection.query('SELECT * FROM products', function(err, res) {
        if (err) throw err;

        for (var i = 0; i <res.length; i++) {
            console.log(res[i]);

            // console.log(
            //     "***************************************" +
            //     "\nID: " + res[i].id +
            //     "\nProduct: " + res[i].product_name +
            //     "\nDepartment: " + res[i].department_name +
            //     "\nPrice: " + res[i].price +
            //     "\nAvailable In Stock: " + res[i].stock_quantity
            // );
        }
    });
    uPrompt();
}

function uPrompt() {
    connection.query('SELECT id FROM products', function(err, res) {
        if (err) throw err;
            // console.log(res);
                for (var i = 0; i <res.length; i++) {
                    console.log(res[i]);
                }

        inquirer
            .prompt([
                {
                    name: 'choice',
                    type: 'list',
                    choices: [res.id],
                    message: 'Which product [ID] would you like to purchase?'
                },
        //         {
        //             name: 'amount',
        //             type: 'input',
        //             message: 'How many units of the product would you like to purchase?'
        //         }
            ])
        //     .then(function(answer) {
        //         var chosenItem;
        //             for (var i = 0; i <res.length; i++) {
        //                 if (res[i].id === answer.choice) {
        //                     chosenItem = res[i];
        //                 }
        //             }
        //     })
    })
}