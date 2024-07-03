<?php
include 'db.php';

$sql = "SELECT * FROM Vehiculo";
$result = $conn->query($sql);

$vehiculos = [];
if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    $vehiculos[] = $row;
  }
}

echo json_encode($vehiculos);

$conn->close();
?>
