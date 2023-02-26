-- Create table that has foreign keys to relate to other tables
CREATE TABLE orders (
    id INT NOT NULL,
    order_number INT,
    customer_id INT,
    product_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (customer_id) REFERENCE customers(id),
    FOREIGN KEY (product_id) REFERENCE products(id)
)

-- Create record for table above
INSERT INTO orders
VALUES (1, 4362, 2, 1);

-- Join tables together!
SELECT orders.order_number, customers.first_name, customers.last_name, customers.address
FROM orders
INNER JOIN customers ON orders.customer_id = customers.id;

-- Join three tables together!
SELECT orders.order_number, customers.first_name, customers.last_name, customers.address, products.name, products.price
FROM orders
INNER JOIN customers ON orders.customer_id = customers.id
INNER JOIN products ON orders.product_id = products.id