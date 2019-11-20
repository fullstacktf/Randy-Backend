CREATE DATABASE RandyDB;

USE RandyDB;

CREATE USER 'sradmin'@'%' IDENTIFIED BY 'contrasena';
GRANT ALL PRIVILEGES ON *.* TO 'sradmin'@'%';

FLUSH PRIVILEGES;

-- USERS

CREATE TABLE personas (
	id int (11) NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
)

INSERT INTO personas (name) VALUES('Ruben'),('Jose'),('Carlos');

ALTER TABLE personas ADD PRIMARY KEY (id);

