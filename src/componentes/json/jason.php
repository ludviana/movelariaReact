<?php

require_once('./conexao.php');

$sqlSelect = "SELECT * FROM produtos INNER JOIN produtoCategoria ON produtos.idProduto = produtoCategoria.idProduto 
INNER JOIN categorias ON categorias.idCategoria = produtoCategoria.idCategoria 
INNER JOIN precos ON precos.idPrecos = produtos.idProduto; ";


$ligacao = mysqli_query($conexao,$sqlSelect);

header("Access-Control-Allow-Origin:*");
print_r(json_encode($ligacao->fetch_all(MYSQLI_ASSOC)));

mysqli_close($conexao);

?>