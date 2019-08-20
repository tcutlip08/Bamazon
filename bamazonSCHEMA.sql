DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

use bamazon_db;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100),
  department_name VARCHAR(100),
  price decimal (8, 2) NOT NULL DEFAULT 0,
  stock_quantity FLOAT NOT NULL DEFAULT 0,
  PRIMARY KEY (item_id)
);

select * from products;

-- 1
INSERT INTO products (product_name, department_name,price, stock_quantity)
VALUES ("Ice Cream", "Dairy", 3.35, 30);
-- 2
INSERT INTO products (product_name, department_name,price, stock_quantity)
VALUES ("Milk", "Dairy", 3.15, 25);
-- 3
INSERT INTO products (product_name, department_name,price, stock_quantity)
VALUES ("Toilet Paper", "Bathroom Supplies", 8.50, 40);
-- 4
INSERT INTO products (product_name, department_name,price, stock_quantity)
VALUES ("Apples", "Produce", 1.10, 75);
-- 5
INSERT INTO products (product_name, department_name,price, stock_quantity)
VALUES ("Shampoo/Conditioner", "Bathroom Supplies", 5.85, 35);
-- 6
INSERT INTO products (product_name, department_name,price, stock_quantity)
VALUES ("Coke", "Soda", 3.35, 20);
-- 7
INSERT INTO products (product_name, department_name,price, stock_quantity)
VALUES ("Dr Pepper", "Soda", 3.36, 25);
-- 8
INSERT INTO products (product_name, department_name,price, stock_quantity)
VALUES ("Steak", "Meat", 11.20, 20);
-- 9
INSERT INTO products (product_name, department_name,price, stock_quantity)
VALUES ("Chicken", "Meat", 8.95, 10);
-- 10
INSERT INTO products (product_name, department_name,price, stock_quantity)
VALUES ("Tomatoes", "Produce", 0.69, 69);