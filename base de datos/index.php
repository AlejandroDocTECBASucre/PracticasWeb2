<?php
require 'db.php';
$result = $link->query("SELECT * FROM usuarios");
?>

<!DOCTYPE html>
<html>
<head>
    <title>Gestión de Usuarios</title>
    <style>
        table {
            border-collapse: collapse;
            width: 70%;
            margin: 20px auto;
        }
        th, td {
            border: 1px solid #888;
            padding: 8px 12px;
            text-align: left;
        }
        th {
            background-color: #eee;
        }
        .fila-impar {
            background-color: #ddd;
        }
    </style>
</head>
<body>

<h2 style="text-align:center;">Lista de Usuarios</h2>

<div style="text-align:center; margin-bottom: 20px;">
    <a href="formulario.php">Agregar nuevo usuario</a>
</div>

<table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Teléfono</th>
            <th>Carnet</th>
            <th>Acciones</th>
        </tr>
    </thead>
    <tbody>
        <?php while ($fila = $result->fetch_assoc()): 
            $clase = ($fila['id'] % 2 != 0) ? 'fila-impar' : '';
        ?>
        <tr class="<?php echo $clase; ?>">
            <td><?php echo $fila['id']; ?></td>
            <td><?php echo $fila['nombre']; ?></td>
            <td><?php echo $fila['apellido']; ?></td>
            <td><?php echo $fila['telefono']; ?></td>
            <td><?php echo $fila['carnet']; ?></td>
            <td>
                <a href="formulario.php?editar=<?php echo $fila['id']; ?>">Editar</a> |
                <a href="procesar.php?eliminar=<?php echo $fila['id']; ?>" onclick="return confirm('¿Eliminar este usuario?');">Eliminar</a>
            </td>
        </tr>
        <?php endwhile; ?>
    </tbody>
</table>

</body>
</html>
