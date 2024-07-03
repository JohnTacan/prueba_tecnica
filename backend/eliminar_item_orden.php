<?php
include 'db.php';

$data = json_decode(file_get_contents("php://input"));

$id = $data->id;

$sql = "DELETE FROM ItemOrdenServicio WHERE id = $id";

if ($conn->query($sql) === TRUE) {
  echo json_encode(["message" => "Ítem de la orden de servicio eliminado con éxito"]);
} else {
  echo json_encode(["error" => $conn->error]);
}

$conn->close();
?>
