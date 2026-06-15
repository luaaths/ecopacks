const { MongoClient } = require('mongodb');

const uri = process.env.MONGO_URI;

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Only POST allowed' };
  }

  const client = new MongoClient(uri);
  const data = JSON.parse(event.body);

  try {
    await client.connect();
    const db = client.db('blogDB');
    const result = await db.collection('posts').insertOne(data);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Post added!', id: result.insertedId }),
    };
  } catch (error) {
    return { statusCode: 500, body: `Error: ${error.message}` };
  } finally {
    await client.close();
  }
};
