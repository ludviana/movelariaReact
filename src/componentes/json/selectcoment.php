<?php
    require_once('./conexao.php');

    $sql_select = "SELECT * FROM comentarios;";

    $res = mysqli_query($conexao,$sql_select);

    header("Access-Control-Allow-Origin:*");

    print_r(json_encode($res->fetch_all(MYSQLI_ASSOC)));

?>