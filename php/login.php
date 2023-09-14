<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    


<?php

try{
    $base=new PDO("mysql:host=localhost; dbname=joyas","root","");

    $base->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql="SELECT * FROM usuarios WHERE nombreUsuario= :login AND clave= :contrasena";

    $resultado=$base->prepare($sql);
    
    $login=htmlentities(addslashes($_POST["usuario"]));
    $password=htmlentities(addslashes($_POST["clave"]));

    $resultado->bindValue(":login", $login);
    $resultado->bindValue(":contrasena", $password);

    $resultado->execute();

    //SELECT `nombreUsuario`, `email`, `clave` FROM `usuarios` WHERE 1

    $numero_registro=$resultado->rowCount();

    if ($numero_registro!=0){
        header("location:../index.html");
    }
    else{
        header("location:../paginas/login.html");
    }
    
} catch(Exception $e)  {

    die ("Error".$e ->getMessage());
}


?>

</body>
</html>