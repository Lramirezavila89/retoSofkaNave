<?php
// CONEXION
require_once("conexion/conexion.php");
$NewConn = new ConnectionMySQL();
$NewConn->CreateConnection();

if($_POST['nombre']!=""){  $nombre = $_POST['nombre']; }else{ $nombre = "";}
if($_POST['destino']!=""){  $destino = $_POST['destino']; }else{ $destino = "";}
if($_POST['pais']!=""){  $pais = $_POST['pais']; }else{ $pais = "";}
if($_POST['tipo']!=""){  $tipo = $_POST['tipo']; }else{ $tipo = "";}


if($tipo == ''){

$sql="SELECT * FROM vehiculos WHERE nombre= '$nombre' OR destino='$destino' OR pais='$pais' ";
$result = $NewConn->ExecuteQuery($sql);
$contar = mysqli_num_rows($result);

 if($contar == 0){
    echo json_encode('0');
 }else{
    while($row=$NewConn->GetRows($result)){
        $nombre = $row[1];
        $empuje = $row[2];
        $destino = $row[3];
        $combustible = $row[4];
        $pais = $row[5];
        $id_r = $row[6];

      $datos[] = array(
         'nombre' => $nombre,
         'empuje' => $empuje,
         'destino' => $destino,
         'combustible' => $combustible,
         'pais' => $pais,
         'id_r' => $id_r
      );
       
    }   
    
    
    $Array = array_merge($datos);
    echo json_encode($Array); 

 }

}else{

$sql0="SELECT * FROM naves WHERE  tipo_atributo='$tipo' ";
$result0= $NewConn->ExecuteQuery($sql0);
while($row0=$NewConn->GetRows($result0)){

   $id_R_N = $row0[1];

$sql="SELECT * FROM vehiculos WHERE id_relacional_vehiculos= '$id_R_N'  ";
$result = $NewConn->ExecuteQuery($sql); 
    while($row=$NewConn->GetRows($result)){
        $nombre = $row[1];
        $empuje = $row[2];
        $destino = $row[3];
        $combustible = $row[4];
        $pais = $row[5];
        $id_r = $row[6];

      
       
    } 
    $datos[] = array(
      'nombre' => $nombre,
      'empuje' => $empuje,
      'destino' => $destino,
      'combustible' => $combustible,
      'pais' => $pais,
      'id_r' => $id_r
   );
}  
    
    
    $Array = array_merge($datos);
    echo json_encode($Array); 

 

}


