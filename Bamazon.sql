DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
id INT NOT NULL AUTO_INCREMENT,
product VARCHAR(50) NOT NULL,
department VARCHAR (50) NOT NULL,
price DECIMAL(6,2) NOT NULL,
numLeft INT NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO products (product, department, price, numLeft)
VALUES ("MacBook Pro", "Tech", 2000, 4);

INSERT INTO products (product, department, price, numLeft)
VALUES ("Couch", "Furniture", 1000, 2000);

INSERT INTO products (product, department, price, numLeft)
VALUES ("Desk", "Furniture", 300, 1000);

INSERT INTO products (product, department, price, numLeft)
VALUES ("Wall Hanging", "Art", 100, 5000);

INSERT INTO products (product, department, price, numLeft)
VALUES ("Apples", "Produce", 1.50, 200000);

INSERT INTO products (product, department, price, numLeft)
VALUES ("Bose Speakers", "Tech", 150, 5000);

INSERT INTO products (product, department, price, numLeft)
VALUES ("Grill", "Outdoor Furniture", 400, 7000);

INSERT INTO products (product, department, price, numLeft)
VALUES ("Steak", "Meat", 10.80, 9500);

INSERT INTO products (product, department, price, numLeft)
VALUES ("Lamp", "Furniture", 50, 600);

INSERT INTO products (product, department, price, numLeft)
VALUES ("Mattress", "Furniture", 650, 4000);

SELECT * FROM products;