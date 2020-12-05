<?php
    require_once('./conexao.php');

    
    $sqlSel = "SELECT * FROM pedidos INNER JOIN produtos ON pedidos.produtoPedido = produtos.idProduto 
    INNER JOIN precos ON precos.idPrecos = produtos.idProduto WHERE idPedido = (SELECT max(idPedido)FROM pedidos);";

    $CONN = mysqli_query($conexao,$sqlSel);

    header("Access-Control-Allow-Origin:*");

    print_r(json_encode($CONN->fetch_all(MYSQLI_ASSOC)));

    mysqli_close($conexao);


?>