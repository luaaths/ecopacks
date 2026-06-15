<?php
session_start();
if (!isset($_SESSION['user'])) {
    header("Location: login.html");
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Write a Blog</title>
</head>
<body>
  <h1>Write a New Blog Post</h1>
  <form action="submit_blog.php" method="POST" enctype="multipart/form-data">
    <input type="text" name="title" placeholder="Blog Title" required><br>
    <textarea name="content" placeholder="Blog content..." required></textarea><br>
    <input type="file" name="image" accept="image/*"><br>
    <button type="submit">Publish</button>
  </form>
</body>
</html>
