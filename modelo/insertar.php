<?php
// CONEXION
require_once("conexion/conexion.php");
$NewConn = new ConnectionMySQL();
$NewConn->CreateConnection();

//AJAX

$nombre      = $_POST['nombre'];
$empuje      = $_POST['empuje'];
$destino     = $_POST['destino'];
$combustible = $_POST['combustible'];
$pais        = $_POST['pais']; 
$privilegio  = $_POST['privilegio'];
$code = rand(10000, 99999);

if($privilegio == "nave1"){
    $tipo_atributo = "Velocidad";
    $tipo = $_POST["velocidad"];
}else if($privilegio == "nave2"){
    $tipo_atributo = "Altura";
    $tipo = $_POST["altura"];
}else if($privilegio == "nave3"){
    $tipo_atributo = "Peso";
    $tipo = $_POST["peso"];
}else if($privilegio == "nave4"){
    $tipo_atributo = "Tipo";
    $tipo = $_POST["tipo"];
}else {
    $tipo_atributo = 'ninguno';
    $tipo = 'ninguno';
}

        $sql="INSERT INTO vehiculos (nombre,empuje,destino,combustible,pais,id_relacional_vehiculos) 
        VALUE ('".$nombre."','".$empuje."','".$destino."','".$combustible."','".$pais."','".$code."')";
        $NewConn->ExecuteQuery($sql);
        $sql2="INSERT INTO naves (id_relacional_naves,tipo_atributo, atributo) VALUE ('".$code."','".$tipo_atributo."','".$tipo."')";
        $NewConn->ExecuteQuery($sql2);

        echo json_encode('1');
    


        