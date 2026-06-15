<?php
session_start();
if (!isset($_SESSION['user'])) {
    die("Unauthorized");
}

$title = $_POST['title'];
$content = $_POST['content'];
$author = $_SESSION['user'];

$imagePath = "";
if (isset($_FILES['image']) && $_FILES['image']['tmp_name']) {
    $imagePath = "uploads/" . basename($_FILES["image"]["name"]);
    move_uploaded_file($_FILES["image"]["tmp_name"], $imagePath);
}

// Connect to DB
$conn = new mysqli("localhost", "root", "", "eco_blog");
$stmt = $conn->prepare("INSERT INTO posts (title, content, author, image_path) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $title, $content, $author, $imagePath);
$stmt->execute();

echo "Blog posted successfully!";
?>
