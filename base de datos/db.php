<?php 
$link=new mysqli("localhost","root","","pruebadb");

if($link -> connect_error)
die("conexion Fallida".$link->connect_error);
?>