# Bamazon
For this assignment, we are required to make a mock-up Amazon storefront using MySQL and Node.js. This app is currently just for customer orders. This assignment is to display our knowledge of how to use basic functions of a persistent storage.

BamazonCustomer:

* displays a table with the inventory
* takes a customer's order
* computes the cost
* depletes the stock from the store's inventory

Future Features:
* Manager View - where you, as the Manager, will be able to view products for sale, check low inventory, add more to your inventory, and add a new product.

# Getting Started:
* Have your MySQL Workbench open and connected to your local sever.
* Set up the schema by using the bamazonSchema.sql file.
* In order for you to get the same data into the table, you can use the bamazonSeeds.sql file to input the tables correctly.
* Refresh your Schema in order to display your newly made database and table.
* Make sure to run "SELECT * FROM products" in order for your table to appear.
* Then, you will be able to use the bamazonCustomer app.

# Technologies Used:
* Javascript
* Node.js
* MySQL Workbench

# NPM Packages Used:
* mysql
* inquirer
* cli-table2
* dotenv -- I included a .env file to my .gitignore to store my private password to MySQL Workbench.

# Screenshots:
#### Bamazon schema in MySQL Workbench:
![Schema](https://github.com/lydmgem/Bamazon/blob/master/assets/images/Schema.png?raw=true)

#### Screenshot 1:
This first GIF displays how the customer interacts with the app when they have successfully placed their order.

* The initial display lets the customer view the products that are available to order, as well as their price and the available quantity on stock.
* The customer is then prompted to choose which product they would like to order and the quantity they wish to proceed with.
* If there is sufficient amount of that particular product, the app proceeds to process their order and will let the customer know their total.
* Afterwards, the customer will be asked if they would like to continue shopping.
* If the customer chooses yes, the available products will be displayed again with the updated quantity from the last process.
* If the customer chooses no, that will end the connection of the app.

![Example1](https://github.com/lydmgem/Bamazon/blob/master/assets/images/Example1.gif?raw=true)

#### Screenshot 2:
This GIF will display how the app interacts with the customer if they try to order a product that has insufficient amount on stock.

* Per usual, it starts off with the display of the amount of products.
(Note: The database, specifically the stock quantity, should be updated from the last time the app has been used.)
* When the customer tries to order over the amount of the available quantity, the app will notify the customer that it has insufficient amount.
* The app will then ask the customer if they would like to continue shopping.
* If yes, they will go through the order process again.
* If no, the app will end the connection.

![Example2](https://github.com/lydmgem/Bamazon/blob/master/assets/images/Example2.gif?raw=true)
