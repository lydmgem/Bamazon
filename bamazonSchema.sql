-- creates the "bamazon_DB" database --
CREATE DATABASE bamazon_DB;

-- all of the code that will affect your database -- 
USE bamazon_DB;

-- creates the tables within your "bamazon_DB" database --
CREATE TABLE products (
	id INTEGER NOT NULL auto_increment,
	product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50),
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INTEGER(10),
    PRIMARY KEY (id)
);