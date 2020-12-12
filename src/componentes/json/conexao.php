<?php
    $local = '18.229.150.67';
    $user = 'lu';
    $db = 'moveis';
    $pass = 'Squad8!**';

    $conexao = mysqli_connect($local,$user,$pass,$db);

    if(!$conexao){
        die('Erro de conexão -> '. mysqli_connect_error());
    }
?>