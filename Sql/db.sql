CREATE DATABASE db_usuarios;


CREATE TABLE tb_usuarios(
    nome VARCHAR(50),
    email VARCHAR(50),
    IDADE int(20)
);


INSERT INTO tb_usuarios(nome,email,idade) VALUES  (
    "Joao Fagundes",
    "joao@gmail.com",
    39
);