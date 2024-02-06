<?php
session_start();

// Connect to MongoDB
$mongoClient = new MongoDB\Client("mongodb://localhost:27017");
$db = $mongoClient->selectDatabase('testdb');
$collection = $db->selectCollection('users');

// Insert test user
$collection->insertOne([
  'username' => 'admin',
  'password' => 'admin'
]);

// Check if user is logging in
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  // Get user input
  $user = $_POST["username"];
  $pass = $_POST["password"];

  // Check if user exists in the database
  $result = $collection->findOne([
    'username' => $user,
    'password' => $pass
  ]);

  if ($result) {
    // User is authenticated, store user info in session
    $_SESSION['user'] = $user;
    $_SESSION['platform'] = $_POST['platform'];
    $_SESSION['content_type'] = $_POST['content_type'];

    // Redirect to home page
    header("Location: home.php");
  } else {
    // User authentication failed, show error message
    echo "Invalid username or password";
  }
}
?>
