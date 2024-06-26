mysql -u root

create garagem;

use garagem;

create table proprietario(

    cpf varchar(11) primary key,
    nome varchar(100),
    fone varchar(20));

create table tipo_veiculo (
id_tipo int AUTO_INCREMENT primary key,
tipo varchar(50));

insert into tipo_veiculo (tipo) values ('popular'), ('luxo'), ('super luxo');

create table veiculos (
    placa_veiculo varchar(10) primary key,
    modelo_veiculo varchar(100),
    preco_veiculo decimal(10, 2),
    cpf varchar(11),
    id_tipo int,
    foreign key (cpf) references proprietarios(cpf),
    foreign key (id_tipo) references tipo_veiculo(id_tipo)
);