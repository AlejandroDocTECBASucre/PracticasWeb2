<?php
require 'db.php';

$usuarioEditar = null;
if (isset($_GET['editar'])) {
    $id = $_GET['editar'];
    $res = $link->query("SELECT * FROM usuarios WHERE id=$id");
    if ($res && $res->num_rows > 0) {
        $usuarioEditar = $res->fetch_assoc();
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title><?php echo $usuarioEditar ? 'Editar Usuario' : 'Nuevo Usuario'; ?></title>
</head>
<body>

<h2 style="text-align:center;"><?php echo $usuarioEditar ? 'Editar Usuario' : 'Agregar Usuario'; ?></h2>

<form method="post" action="procesar.php" style="width: 50%; margin: auto;">
    <input type="hidden" name="accion" value="<?php echo $usuarioEditar ? 'editar' : 'insertar'; ?>">
    <?php if ($usuarioEditar): ?>
        <input type="hidden" name="id" value="<?php echo $usuarioEditar['id']; ?>">
    <?php endif; ?>

    <label>Nombre:</label><br>
    <input type="text" name="nombre" required value="<?php echo $usuarioEditar['nombre'] ?? ''; ?>"><br>

    <label>Apellido:</label><br>
    <input type="text" name="apellido" required value="<?php echo $usuarioEditar['apellido'] ?? ''; ?>"><br>

    <label>Teléfono:</label><br>
    <input type="text" name="telefono" required value="<?php echo $usuarioEditar['telefono'] ?? ''; ?>"><br>

    <label>Carnet:</label><br>
    <input type="text" name="carnet" required value="<?php echo $usuarioEditar['carnet'] ?? ''; ?>"><br><br>

    <input type="submit" value="<?php echo $usuarioEditar ? 'Actualizar' : 'Agregar'; ?>">
</form>

<div style="text-align:center; margin-top: 20px;">
    <a href="index.php">Volver a la lista</a>
</div>

</body>
</html>
