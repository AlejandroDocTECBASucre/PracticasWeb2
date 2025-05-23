<?php 
$link=new mysqli("localhost","root","","pruebadb");

if(!$link -> connect_error)
die("conexion exitosa".$link->connect_error);
?>