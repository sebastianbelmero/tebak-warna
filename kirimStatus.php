<?php 
include 'koneksi.php'; 
$status = $_POST['status'];
$koneksi->query("INSERT INTO hasil(hasil) VALUES('$status')");
?>
