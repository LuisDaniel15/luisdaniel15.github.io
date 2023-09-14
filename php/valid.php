

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../collares.css">

</head>
<body>
    
<div class="contenedor" style="height: auto; background: #FDFEFE;">

<?php


 $usuario = $_POST['usuario'];
 $password = $_POST['password'];
 $email = $_POST['email'];


 //echo "LOS DATOS INGRESADOS SON: $usuario, $password y $email  <br>";

 function conn(){
    $hostname = "localhost";
    $usuariodb = "root";
    $passworddb = "";
    $dbname = "joyas";

    $conectar = mysqli_connect($hostname,$usuariodb,$passworddb,$dbname);
    return $conectar;
}

$conectar = conn();
$sql = "INSERT INTO `usuarios`(`nombreUsuario`, `email`, `clave`) 
VALUES ('$usuario','$email','$password')";
    $resul = mysqli_query($conectar , $sql)or trigger_error("Query Failed! SQL- Error: ".mysqli_error($conectar), E_USER_ERROR);

    header("location:../paginas/login.html");



?>




</div>
</body>
</html>