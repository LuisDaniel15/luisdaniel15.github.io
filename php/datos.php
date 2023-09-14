
<?php


function conn(){

    $hostname = "localhost";
    $usuariodb = "root";
    $passworddb = "";
    $dbname = "joyas";
    
    $conectar = mysqli_connect($hostname,$usuariodb,$passworddb,$dbname);
    return $conectar;
}


$nombre =$_POST['nombre'];
$email =$_POST['email'];
$telefono =$_POST['telefono'];
$nota= $_POST['nota'];

echo "LOS DATOS INGRESADOS SON: <br>";

    $conectar =conn();
    $sql="INSERT INTO `contacto`(`nombre`, `email`, `telefono`, `nota`) 
    VALUES ('$nombre','$email','$telefono','$nota')";
    $resul = mysqli_query($conectar , $sql)or trigger_error("Query Failed! SQL- Error: ".mysqli_error($conectar), E_USER_ERROR);


    echo "$sql";

    header("location:../paginas/contactos.html");

    



?>