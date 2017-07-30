DROP DATABSE IF EXISTS bamazon;
CREATE TABLE products(
	item_id INT(11) primary key AUTO_INCREMENT NOT NULL, 
	product_name VARCHAR(45) NOT NULL, 
	department_name VARCHAR(45) NOT NULL, 
	price decimal(10,2) NULL,
	stock_quantity INT(11) NULL
	);

INSERT INTO products(
	product_name, 
	department_name, 
	price, 
	stock_quantity)
	values('tv', 'electronic',250.0,10),
	('refrigerator','electronic',150.0,15),
	('iphone_charger', 'electronic',10.0,25),
	('laptop','electronic',650.0,17),
	('bracelet','jewelry',3.50,20),
	('necklace','jewelry',4.0,30),
	('earing','jewelry',2.50,16),
	('couch','furniture',59.99,5),
	('mattress','bedding',100,10),
	('dinning_table','furniture',35.50,3);

