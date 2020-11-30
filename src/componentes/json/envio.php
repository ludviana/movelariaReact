<?php

require_once('../conexoes/conexao.php');

    if(isset($_POST['prod']) && isset($_POST['nome']) && isset($_POST['ende']) && isset($_POST['tele']) && isset($_POST['qts']) ){

        $produto = $_POST['prod'];
        $nome = $_POST['nome'];
        $endereco = $_POST['ende'];
        $telefone = $_POST['tele'];
        $quantidade = $_POST['qts'];
        

        $slq_insert = "INSERT INTO pedidos(produtoPedido, nomeCliente,endereco,telefone,quantidade) VALUES ('$produto','$nome','$endereco','$telefone','$quantidade');";

        $res = mysqli_query($conexao,$slq_insert);

    }   

mysql_close($conexao);

?>