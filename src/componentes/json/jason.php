<?php

require_once('./conexao.php');

$sqlSelect = "SELECT * FROM produtos";

$ligacao = mysqli_query($conexao,$sqlSelect);

header("Access-Control-Allow-Origin:*");
print_r(json_encode($ligacao->fetch_all(MYSQLI_ASSOC)));























/*

idProduto int primary key not null auto_increment,
nome varchar(100),
descricao varchar(300),
preco decimal(8,2),
imagem varchar(300)
);


$array = [];
$i = 0;

while($row = mysqli_fetch_assoc($ligacao)){
    $array[$i]=[
    "ID" => $row['idProduto'],
    "NOME" => $row['nome'],
    "DESCRICAO" => $row['descricao'],
    "PRECO" => $row['preco'],
    "IMAGEM" => $row['imagem']
    ];
    
    $i++;
};

echo json_encode($array);
mysqli_close($conexao);
*/
?>