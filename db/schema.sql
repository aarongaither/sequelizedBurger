CREATE DATABASE burgers_db;

CREATE TABLE burgers (
	id integer(10) auto_increment,
    burger_name varchar(50) NOT NULL,
    devoured boolean default 0,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    primary key (id)
);