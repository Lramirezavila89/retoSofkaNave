<?php


class ConnectionMySQL{
// Definicion de atributos
private $host;
private $user;
private $password;
private $database;
private $conn;
 
public function __construct(){ 
//Constructor
require_once "config_db.php";
$this->host=HOST;
$this->user=USER;
$this->password=PASSWORD;
$this->database=DATABASE;
  
}
  
public function CreateConnection(){
// Metodo que crea y retorna la conexion a la BD.
$this->conn = new mysqli($this->host, $this->user, $this->password, $this->database);
 if($this->conn->connect_errno) {
  die("Error al conectarse a MySQL: (" . $this->conn->connect_errno . ") " . $this->conn->connect_error);
 }
}
  
public function CloseConnection(){
//Metodo que cierra la conexion a la BD
 $this->conn->close();
}
  
public function ExecuteQuery($sql){
/* Metodo que ejecuta un query sql
 Retorna un resultado si es un SELECT*/
 $result = $this->conn->query($sql);
 return $result;
}
  
public function GetCountAffectedRows(){
/* Metodo que retorna la cantidad de filas
 afectadas con el ultimo query realizado.*/
 return $this->conn->affected_rows;
}
  
public function GetRows($result){
/*Metodo que retorna la ultima fila
 de un resultado en forma de arreglo.*/
 return $result->fetch_row();
}
  
public function SetFreeResult($result){
//Metodo que libera el resultado del query.
 $result->free_result();
}
  
}










class ConnectionMySQL2{
// Definicion de atributos
private $host;
private $user;
private $password;
private $database;
private $conn;
 
public function __construct(){ 
//Constructor
require_once "config_db.php";
$this->host=HOST;
$this->user=USER;
$this->password=PASSWORD;
$this->database=DATABASE;
  
}
  
public function CreateConnection2(){
// Metodo que crea y retorna la conexion a la BD.
$this->conn = new mysqli($this->host, $this->user, $this->password, $this->database);
 if($this->conn->connect_errno) {
  die("Error al conectarse a MySQL: (" . $this->conn->connect_errno . ") " . $this->conn->connect_error);
 }
}
  
public function CloseConnection2(){
//Metodo que cierra la conexion a la BD
 $this->conn->close();
}
  
public function ExecuteQuery2($sql2){
/* Metodo que ejecuta un query sql
 Retorna un resultado si es un SELECT*/
 $result2 = $this->conn->query($sql2);
 return $result2;
}
  
public function GetCountAffectedRows2(){
/* Metodo que retorna la cantidad de filas
 afectadas con el ultimo query realizado.*/
 return $this->conn->affected_rows;
}
  
public function GetRows2($result2){
/*Metodo que retorna la ultima fila
 de un resultado en forma de arreglo.*/
 return $result2->fetch_row();
}
  
public function SetFreeResult2($result2){
//Metodo que libera el resultado del query.
 $result2->free_result();
}
  
}
?>