<?php
header('Content-Type: application/json');

$productos = [
    1 => ["id" => 1, "name" => "Laptop", "price" => 1200],
    2 => ["id" => 2, "name" => "Mouse", "price" => 20],
    3 => ["id" => 3, "name" => "Teclado", "price" => 45],
];

$method = $_SERVER['REQUEST_METHOD'];
$override = $_POST['_method'] ?? '';

if ($method === 'GET') {
    $id = $_GET['id'] ?? null;
    if ($id && isset($productos[$id])) {
        echo json_encode($productos[$id]);
    } else {
        echo json_encode(array_values($productos));
    }
} elseif ($method === 'POST' && !$override) {
    $name = $_POST['name'] ?? null;
    $price = $_POST['price'] ?? null;
    if ($name && $price) {
        $nuevo = ["id" => rand(4, 999), "name" => $name, "price" => (float)$price];
        echo json_encode(["success" => true, "producto" => $nuevo]);
    } else {
        echo json_encode(["error" => "Faltan datos"]);
    }
} elseif ($method === 'POST' && strtoupper($override) === 'PUT') {
    $id = $_POST['id'] ?? null;
    $name = $_POST['name'] ?? null;
    $price = $_POST['price'] ?? null;
    if ($id && isset($productos[$id])) {
        $productos[$id] = ["id" => $id, "name" => $name, "price" => (float)$price];
        echo json_encode(["success" => true, "actualizado" => $productos[$id]]);
    } else {
        echo json_encode(["error" => "Producto no encontrado para actualizar"]);
    }
} elseif ($method === 'POST' && strtoupper($override) === 'PATCH') {
    $id = $_POST['id'] ?? null;
    $name = $_POST['name'] ?? null;
    if ($id && isset($productos[$id])) {
        $productos[$id]['name'] = $name ?? $productos[$id]['name'];
        echo json_encode(["success" => true, "modificado" => $productos[$id]]);
    } else {
        echo json_encode(["error" => "Producto no encontrado para modificar"]);
    }
} elseif ($method === 'POST' && strtoupper($override) === 'DELETE') {
    $id = $_POST['id'] ?? null;
    if ($id && isset($productos[$id])) {
        $borrado = $productos[$id];
        unset($productos[$id]);
        echo json_encode(["success" => true, "eliminado" => $borrado]);
    } else {
        echo json_encode(["error" => "Producto no encontrado para eliminar"]);
    }
} else {
    echo json_encode(["error" => "Método no permitido"]);
}
