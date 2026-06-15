<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Eco Blog - Educational Insights</title>
  <link rel="stylesheet" href="style3.css">
</head>
<body>
  <section class="blog-section">
    <h1>🌱 Eco Insights: Our Educational Blog</h1>
    <p class="intro-text">Explore tips, facts, and guides on sustainable packaging and green practices.</p>

    <a href="submit.html" class="submit-button">➕ Submit Your Own Blog</a>

    <div class="blog-posts">

      <!-- Static blog posts -->
      <div class="post" onclick="document.location='key1.html'">
        <img src="sur.jfif" alt="Eco-friendly packaging">
        <h2>Why Eco-Friendly Packaging Matters</h2>
        <p>Discover the environmental impact of traditional packaging and how sustainable alternatives make a difference.</p>
        <a href="blog/why-eco-packaging-matters.html">Read More</a>
      </div>

      <!-- Dynamically load user-submitted blog posts -->
      <?php
      foreach (glob("user_posts/*.html") as $filename) {
        include $filename;
      }
      ?>
    </div>
  </section>
</body>
</html>
