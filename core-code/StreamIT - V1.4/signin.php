<?php
$servername = "localhost";
$username = "yourusername";
$password = "yourpassword";
$dbname = "yourdatabase";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Insert test user
$sql = "INSERT INTO users (username, password) VALUES ('admin', 'admin')";
$conn->query($sql);

// Get user input
$user = $_POST["username"];
$pass = $_POST["password"];
$platform = $_POST["platform"];
$contentType = $_POST["content_type"];

// Check if user exists in the database
$sql = "SELECT * FROM users WHERE username='$user' AND password='$pass'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // User is authenticated, insert social media and content type info into database
  $sql = "UPDATE users SET platform='$platform', content_type='$contentType' WHERE username='$user'";
  $conn->query($sql);
  
  // Redirect to home page
  header("Location: home.php");
} else {
  // User authentication failed, show error message
  echo "Invalid username or password";
}

$conn->close();
?>
