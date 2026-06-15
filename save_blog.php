<?php
// Sanitize input
$title = htmlspecialchars($_POST['title']);
$image = htmlspecialchars($_POST['image']);
$content = nl2br(htmlspecialchars($_POST['content']));

// Create post HTML
$post = "<div class='post'>
  <img src='$image' alt='User submitted image'>
  <h2>$title</h2>
  <p>$content</p>
</div>";

// Create unique filename
$filename = "user_posts/" . time() . ".html";

// Save post to user_posts directory
file_put_contents($filename, $post);

// Confirm submission
echo "<p>✅ Your blog post was submitted successfully!</p>";
echo "<a href='blog.php'>Go back to the blog</a>";
?>
