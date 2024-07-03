<?php
include 'db.php';

$data = json_decode(file_get_contents("php://input"));

$fecha = $data->fecha;
$tipo = $data->tipo;
$vehiculoId = $data->vehiculoId;

$sql = "INSERT INTO OrdenServicio (fecha, tipo, vehiculoId) VALUES ('$fecha', '$tipo', $vehiculoId)";

if ($conn->query($sql) === TRUE) {
  echo json_encode(["message" => "Orden de servicio creada con éxito"]);
} else {
  echo json_encode(["error" => $conn->error]);
}

$conn->close();
?>
