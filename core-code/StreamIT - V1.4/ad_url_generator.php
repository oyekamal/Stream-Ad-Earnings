<?php

// Connect to MongoDB
$mongo = new MongoDB\Client("mongodb://localhost:27017");

// Select database and collection
$db = $mongo->mydb;
$collection = $db->users;

// Insert test user
$collection->insertOne([
    'username' => 'admin',
    'password' => 'admin',
    'platform' => '',
    'content_type' => '',
    'streamlabs_id' => ''
]);

// Get user input
$user = $_POST["username"];
$pass = $_POST["password"];
$platform = $_POST["platform"];
$contentType = $_POST["content_type"];

// Check if user exists in the database
$result = $collection->findOne([
    'username' => $user,
    'password' => $pass
]);

if ($result) {
    // User is authenticated, insert social media and content type info into database
    $collection->updateOne(
        ['_id' => $result->_id],
        ['$set' => ['platform' => $platform, 'content_type' => $contentType]]
    );

    // Generate unique Streamlabs URL for the user
    $streamlabsId = uniqid();
    $collection->updateOne(
        ['_id' => $result->_id],
        ['$set' => ['streamlabs_id' => $streamlabsId]]
    );

    // Redirect to dashboard with Streamlabs URL
    header("Location: dashboard.php?streamlabs_id=$streamlabsId");
} else {
    // User authentication failed, show error message
    echo "Invalid username or password";
}
