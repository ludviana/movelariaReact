<?php
    require_once('./conexao.php');


    $nome     = $_POST['nome'];
    $email    = $_POST['emaile'];
    $genero   = $_POST['genero'];
    $tel      = $_POST['telefone'];
    $tipo     = $_POST['tipomensagem'];
    $mensagem = $_POST['mensagem'];

    $sqlinsert = "INSERT INTO comentarios VALUES (null,'$nome','$genero','$email','$tel','$tipo','$mensagem')";

    $envio = mysqli_query($conexao,$sqlinsert);

    mysqli_close($conexao)
?>