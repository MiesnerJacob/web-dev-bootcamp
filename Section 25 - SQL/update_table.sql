-- Update a value in a table
UPDATE products
SET price = 0.8
WHERE id = 2;

-- Update a table schema
ALTER TABLE products
ADD stock INT;

-- Challenge: Add records for new column
UPDATE products
SET stock = 32
WHERE id = 1;

UPDATE products
SET stock = 12
WHERE id = 2;