<?php
    $local = 'localhost';
    $user = 'root';
    $db = 'moveis';
    $pass = 'root';

    $conexao = mysqli_connect($local,$user,$pass,$db);

    if(!$conexao){
        die('Erro de conexão -> '. mysqli_connect_error());
    }
?>