#! bin/bash

echo "Arrancando script que rellena la base de datos\n";

echo "CREANDO BASE DE DATOS";

mysql -u root << MYSQL

DROP DATABASE IF EXISTS RandyDB;
CREATE DATABASE IF NOT EXISTS RandyDB;
SHOW DATABASES;

USE RandyDB;

-- CREATE USER 'maboo'@'%' IDENTIFIED BY 'contrasena';
-- GRANT ALL PRIVILEGES ON *.* TO 'sradmin'@'%';

-- FLUSH PRIVILEGES;

-- USERS

CREATE TABLE RandyDB.personas (
	id int (11) NOT NULL,
	name varchar(255) NOT NULL,
)
MYSQL

# Me esta dando error de sintaxis esta Ãltima parte
# INSERT INTO personas VALUES
# (1, 'Ruben'), (2, 'Jose'), (3, 'Carlos');

# ALTER TABLE personas ADD PRIMARY KEY (id);

# MYSQL
