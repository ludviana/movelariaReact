<?php
    require_once('./conexao.php');

    header("Access-Control-Allow-Origin:*");

    $produto = $_POST['produto'];
    $nomecliente = $_POST['nome'];
    $endereco = $_POST['ende'];
    $telefone = $_POST['tele'];
    $quantidade = $_POST['qts'];


    $sqlinsert = "INSERT INTO pedidos VALUES (NULL,'$produto','$nomecliente','$endereco','$telefone','$quantidade')";

    $rest = mysqli_query($conexao,$sqlinsert);


    mysqli_close($conexao);

?>