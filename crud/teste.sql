CREATE DATABASE IF NOT EXISTS sisloc;

CREATE TABLE IF NOT EXISTS carros(
    id int primary key,
    placa varchar(7),
    chassi varchar(17),
    renavam varchar(11),
    modelo varchar(50),
    marca varchar(50),
    ano int
);

INSERT INTO carros (id, placa, chassi,  renavam, modelo, marca, ano) VALUES(
    31, 
    "3547863", 
    "32145678932145687", 
    "32165498712", 
    "corolla", 
    "toyota", 
    2015
);
INSERT INTO carros (id, placa, chassi,  renavam, modelo, marca, ano) VALUES(
    23, 
    "3547863", 
    "32145678932145687", 
    "32165498712", 
    "corolla", 
    "toyota", 
    2015
);
INSERT INTO carros (id, placa, chassi,  renavam, modelo, marca, ano) VALUES(
    12, 
    "3547863", 
    "32145678932145687", 
    "32165498712", 
    "corolla", 
    "toyota", 
    2015
);