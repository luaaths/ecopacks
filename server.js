const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse incoming request bodies
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ecoBlog', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Blog post schema (structure of a blog post)
const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  image: String,
  link: String
});

// Blog model based on the schema
const Blog = mongoose.model('Blog', blogSchema);

// Route to get all blog posts
app.get('/posts', async (req, res) => {
  const posts = await Blog.find();
  res.json(posts);
});

// Route to create a new blog post
app.post('/posts', async (req, res) => {
  const newPost = new Blog({
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
    link: req.body.link
  });

  await newPost.save();
  res.status(201).send('Blog post created!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
