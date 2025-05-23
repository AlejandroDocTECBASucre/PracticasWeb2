<?php 
$link = new mysqli("localhost", "root", "", "pruebadb");

$result = mysqli_query($link, "SELECT * FROM usuarios");

if (!$result) {
    die("Consulta inválida: " . mysqli_error($link));
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Listado de Usuarios</title>
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
            background-color:rgb(88, 8, 15);
        }
    </style>
</head>
<body>

<h2 style="text-align:center;">Lista de Usuarios</h2>

<table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Teléfono</th>
            <th>Carnet</th>
        </tr>
    </thead>
    <tbody>
        <?php while ($fila = mysqli_fetch_assoc($result)) { 
            $clase = ($fila['id'] % 2 != 0) ? 'fila-impar' : '';
        ?>
        <tr class="<?php echo $clase; ?>">
            <td><?php echo $fila['id']; ?></td>
            <td><?php echo $fila['nombre']; ?></td>
            <td><?php echo $fila['apellido']; ?></td>
            <td><?php echo $fila['telefono']; ?></td>
            <td><?php echo $fila['carnet']; ?></td>
        </tr>
        <?php } ?>
    </tbody>
</table>

</body>
</html>

<?php
mysqli_close($link);
?>
