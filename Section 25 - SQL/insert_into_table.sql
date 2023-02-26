-- Insert data into a table
INSERT INTO products
VALUES (1, "Pen", 1.20)

-- Insert more values with one column missing
INSERT INTO products (id, name)
VALUES (2, "Pencil")