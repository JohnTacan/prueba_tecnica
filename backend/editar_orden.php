<?php
include 'db.php';

$data = json_decode(file_get_contents("php://input"));

$id = $data->id;
$fecha = $data->fecha;
$tipo = $data->tipo;
$vehiculoId = $data->vehiculoId;

$sql = "UPDATE OrdenServicio SET fecha = '$fecha', tipo = '$tipo', vehiculoId = $vehiculoId WHERE id = $id";

if ($conn->query($sql) === TRUE) {
  echo json_encode(["message" => "Orden de servicio actualizada con éxito"]);
} else {
  echo json_encode(["error" => $conn->error]);
}

$conn->close();
?>
