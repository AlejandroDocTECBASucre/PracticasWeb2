<?php
require 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $accion = $_POST['accion'];

    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $telefono = $_POST['telefono'];
    $carnet = $_POST['carnet'];

    if ($accion === 'insertar') {
        $link->query("INSERT INTO usuarios (nombre, apellido, telefono, carnet) 
                      VALUES ('$nombre', '$apellido', '$telefono', '$carnet')");
    } elseif ($accion === 'editar') {
        $id = $_POST['id'];
        $link->query("UPDATE usuarios SET nombre='$nombre', apellido='$apellido', telefono='$telefono', carnet='$carnet' 
                      WHERE id=$id");
    }

    header("Location: index.php");
    exit;
}

if (isset($_GET['eliminar'])) {
    $id = $_GET['eliminar'];
    $link->query("DELETE FROM usuarios WHERE id=$id");
    header("Location: index.php");
    exit;
}
?>

