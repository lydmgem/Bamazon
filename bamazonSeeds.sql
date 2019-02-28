DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
	id INTEGER NOT NULL auto_increment,
	product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50),
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INTEGER(10) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES
	("HUGE 4K UHD Samsung TV", "Electronics", 2399.99, 1000),
    ("Small 4K UHD Samsung TV", "Electronics", 180, 300),
    ("Hocus Pocus", "Movies", 10.18, 20),
    ("Beetlejuice", "Movies", 5.49, 11),
    ("PlayStation 4 Pro", "Gaming Consoles", 399.99, 500),
    ("Xbox One", "Gaming Consoles", 499.99, 200),
    ("Computer Desk", "Furniture", 99.98, 10),
    ("Computer Chair", "Furniture", 85.75, 15),
    ("Curtains", "Home Goods", 17.99, 150),
    ("Duvet Set", "Home Goods", 59.99, 120);

SELECT * FROM products;