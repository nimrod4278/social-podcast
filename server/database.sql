CREATE DATABASE records_database;

CREATE TABLE records(
    record_id SERIAL PRIMARY KEY,
    user_id int,
    name VARCHAR(255),
    description TEXT,
    date DATE NOT NULL DEFAULT CURRENT_DATE
);

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL, 
    name VARCHAR(255) NOT NULL,
    date DATE NOT NULL DEFAULT CURRENT_DATE NOT NULL,
    UNIQUE (email)
);

