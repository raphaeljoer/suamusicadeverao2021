/* eslint-disable @typescript-eslint/camelcase */
import { NowRequest, NowResponse } from '@vercel/node';
import { MongoClient, Db } from 'mongodb';

import indicatedsData from '@/data/indicateds';

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

interface Indicated {
  id: string;
  title: string;
  artist: string;
  imageUrl: string;
}

export default async (request: NowRequest, response: NowResponse) => {
  const uri = process.env.MONGODB_URI;
  const db = await connectToDataBase(uri);
  const votes = db.collection('votes');

  const getCountVotes = (indicated: Indicated) =>
    votes.countDocuments({ indicatedId: indicated.id });

  const countVotesList = await Promise.all(indicatedsData.map(getCountVotes));

  const sumTotalVotes = (acc: number, countVotes: number) => acc + countVotes;
  const totalAllVotes = countVotesList.reduce(sumTotalVotes);

  const getPercentualVotes = async (indicated: Indicated) => {
    const percentual = ((await getCountVotes(indicated)) / totalAllVotes) * 100;
    return Math.floor(percentual);
  };

  const result = await Promise.all(
    indicatedsData.map(async (indicated) => {
      return {
        indicated: {
          artist: indicated.artist,
          title: indicated.title,
          imageUrl: indicated.imageUrl,
          votes: await getCountVotes(indicated),
          percentual: await getPercentualVotes(indicated),
        },
      };
    }),
  );

  return response.status(201).json({
    totalAllVotes,
    result,
  });
};
