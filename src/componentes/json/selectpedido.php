<?php

    require_once('./conexao.php');
        

        

        $produto = $_GET['produto'];
        
        $sql_select = "SELECT * FROM produtos INNER JOIN precos ON precos.idPrecos = produtos.idProduto WHERE idProduto='$produto'";

        $resposta = mysqli_query($conexao,$sql_select);

        header("Access-Control-Allow-Origin:*");

       

        print_r(json_encode($resposta->fetch_all(MYSQLI_ASSOC)));

        
    mysql_close($conexao);



?>