const { MongoClient } = require('mongodb');

const uri = process.env.MONGO_URI;

exports.handler = async () => {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('blogDB');
    const posts = await db.collection('posts').find().sort({ _id: -1 }).toArray();

    return {
      statusCode: 200,
      body: JSON.stringify(posts),
    };
  } catch (error) {
    return { statusCode: 500, body: `Error: ${error.message}` };
  } finally {
    await client.close();
  }
};
