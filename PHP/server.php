<?php
// header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://localhost:3000'); // Allow CORS

// You can add other headers if needed
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

$user = $_POST['name'];

echo ($user);
?>