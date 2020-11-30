<?php

require_once('./conexao.php');

$sqlSelect = "SELECT * FROM produtos INNER JOIN precos ON produtos.idProduto = precos.idPrecos;";

$ligacao = mysqli_query($conexao,$sqlSelect);

header("Access-Control-Allow-Origin:*");
print_r(json_encode($ligacao->fetch_all(MYSQLI_ASSOC)));

mysqli_close($conexao);

?>