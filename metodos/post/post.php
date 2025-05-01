<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'] ?? null;
    $price = $_POST['price'] ?? null;

    if ($name && $price) {
        $newProduct = [
            "id" => rand(1, 999),
            "name" => $name,
            "price" => (float)$price
        ];
        echo json_encode(["success" => true, "producto" => $newProduct]);
    } else {
        echo json_encode(["error" => "Faltan datos"]);
    }
} else {
    echo json_encode(["error" => "Método no permitido"]);
}
