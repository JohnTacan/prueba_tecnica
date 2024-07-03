<?php
include 'db.php';

$sql = "SELECT * FROM OrdenServicio";
$result = $conn->query($sql);

$ordenes = [];
if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    $ordenes[] = $row;
  }
}

echo json_encode($ordenes);

$conn->close();
?>
