/* eslint-disable @typescript-eslint/camelcase */
import { NowRequest, NowResponse } from '@vercel/node';
import { MongoClient, Db } from 'mongodb';

let cachedDb: Db = null;

const connectToDataBase = async (uri: string) => {
  const url = new URL(uri);

  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const dbName = url.pathname.substr(1);
  const db = client.db(dbName);

  cachedDb = db;

  return db;
};

export default async (request: NowRequest, response: NowResponse) => {
  const { indicatedId, token } = request.body;

  if (!token) {
    return response.status(500).json({
      message: 'You must have a valid token',
    });
  }

  const uri = process.env.MONGODB_URI;
  const db = await connectToDataBase(uri);
  const collection = db.collection('votes');

  try {
    await collection.insertOne({
      indicatedId,
      votedAt: new Date(),
    });

    return response.status(201).json({ success: indicatedId });
  } catch (err) {
    return response.status(500).json({
      error: err,
    });
  }
};
