<?php
include 'db.php';

$data = json_decode(file_get_contents("php://input"));

$placa = $data->placa;
$tipo = $data->tipo;
$kilometraje = $data->kilometraje;
$estado = $data->estado;
$propietario = $data->propietario;

$sql = "INSERT INTO Vehiculo (placa, tipo, kilometraje, estado, nombre_propietario) VALUES ('$placa', '$tipo', $kilometraje, '$estado', '$propietario')";

if ($conn->query($sql) === TRUE) {
  echo json_encode(["message" => "Vehículo creado con éxito"]);
} else {
  echo json_encode(["error" => $conn->error]);
}

$conn->close();
?>


