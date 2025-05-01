<?php
$products = [
    1 => ["id" => 1, "name" => "Laptop", "price" => 1200],
    2 => ["id" => 2, "name" => "Mouse", "price" => 20],
];

header('Content-Type: application/json');

if (isset($_GET['id'])) {
    $id = $_GET['id'];
    echo json_encode($products[$id] ?? ["error" => "Producto no encontrado"]);
} else {
    echo json_encode($products);
}
