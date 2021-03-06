create database if not exists moveis;
use moveis;

create table if not exists produtos(

	idProduto int not null auto_increment,
	nome varchar(100),
	descricao varchar(300),
	imagem varchar(300),

	primary key(idProduto)
);



create table if not exists precos(

	idPrecos int not null ,
    precoProduto decimal(8,2),
    
    foreign key(idprecos) references produtos(idProduto)
	
);

create table if not exists pedidos(
	idPedido int not null auto_increment,
    produtoPedido int,
	nomeCliente varchar(200),
	endereco varchar(200),
	telefone bigint,
	quantidade int,
    

	primary key(idPedido),
    foreign key(produtoPedido) references produtos(idProduto)
    
);


create table if not exists comentarios(

	id_comentarios int not null auto_increment,
	nome varchar(100),
	genero varchar(15),
	email varchar(200),
	telefone int,
	tipo varchar(30),
	mensagem text,

	primary key(id_comentarios)
);


create table if not exists categorias (
	idCategoria int auto_increment,
    nomecategoria varchar(30),
    
    primary key(idCategoria)
);

create table if not exists produtoCategoria(
	idProduto_FK int,
    idCategoria_FK int,
    
    foreign key (idCategoria_FK) references categorias(idCategoria),
    foreign key (idProduto_FK) references produtos(idProduto)
);


insert into produtos values 
	(null,'guardaRoupa','Guarda-roupa 6 portas','guarda2.jpg'),
	(null,'guardaRoupa','Guarda-roupa solteiro','guarda4.jpeg'),
	(null,'guardaRoupa','Guarda-roupa portas de correr','guarda3.jpg'),
	(null,'cozinha','Cozinha completa','cozinha.jpg'),
	(null,'cozinha','Cozinha completa','cozinha2.png'),
	(null,'cozinha','Cozinha completa','cozinha3.jpg'),
	(null,'painelTV','Painel de TV','home.jpg'),
	(null,'armarioAlto','Armario alto','armamulti.jpg'),
	(null,'armarioPequeno','Armario pequeno','armariopq.jpeg');
    
insert into precos values 
	(1,2500.00),
	(2,1800.00),
	(3,2100.00),
	(4,1450.00),
	(5,1200.00),
	(6,1900.00),
	(7,987.00),
	(8,784.00),
	(9,698.00);
    
 
    
insert into categorias values 
	(null, 'Guarda Roupas'),
	(null, 'Cozinhas'),
    (null, 'Painel de TV'),
    (null, 'Armario Alto'),
    (null, 'Armario pequeno');
    
insert into produtoCategoria values
	(1,1),
	(2,1),
	(3,1),
	(4,2),
	(5,2),
	(6,2),
	(7,3),
	(8,4),
	(9,5);
    
create view todos_produtos as 
	SELECT * FROM produtos INNER JOIN produtoCategoria ON produtos.idProduto = produtoCategoria.idProduto_FK 
	INNER JOIN categorias ON categorias.idCategoria = produtoCategoria.idCategoria_FK 
	INNER JOIN precos ON precos.idPrecos = produtos.idProduto;

create view ultimo_pedido as 
	SELECT * FROM pedidos INNER JOIN produtos ON pedidos.produtoPedido = produtos.idProduto 
    INNER JOIN precos ON precos.idPrecos = produtos.idProduto WHERE idPedido = (SELECT max(idPedido)FROM pedidos);

