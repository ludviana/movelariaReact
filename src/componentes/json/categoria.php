<?php

require_once('./conexao.php');

$sql = "SELECT * FROM categorias";

$res = mysqli_query($conexao,$sql);

print_r(json_encode($res -> fetch_all(MYSQLI_ASSOC)));

header("Access-Control-Allow-Origin:*");

mysqli_close($conexao);


?>