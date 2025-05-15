<?php

if (isset($_COOKIE['contador'])) {
   
    $contador = $_COOKIE['contador'] + 1;
} else {
    
    $contador = 1;
}


setcookie('contador', $contador, time() + (30 * 24 * 60 * 60));
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contador de Visitas con Cookies</title>
</head>
<body>
    <h1>Contador de Visitas</h1>
    <p>Esta página ha sido visitada <?php echo $contador; ?> veces en los últimos 30 días.</p>
</body>
</html>
