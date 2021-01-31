import { GetStaticProps } from 'next';
import { MongoClient, Db } from 'mongodb';

import { Header, SEO, Vote, Result, Footer } from '@/components';
import { Container } from '@/styles/pages/Vote';

import indicatedsData from '@/data/indicateds';

interface IIndicated {
  id: string;
  title: string;
  artist: string;
  imageUrl: string;
  votes?: number;
  percentual?: number;
}

interface IResultPageProps {
  result: IIndicated[];
}

export default function VotePage({ result }: IResultPageProps) {
  return (
    <Container>
      <SEO
        title="Votação | Prêmio Sua Música de Verão"
        description="O Verão tá On"
        imageUrl="/images/cover.jpg"
      />
      <Header />
      <Vote />
      <Result result={result} />
      <Footer />
    </Container>
  );
}

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

export const getStaticProps: GetStaticProps = async () => {
  const secondsInDay = 86400;
  const uri = process.env.MONGODB_URI;
  const db = await connectToDataBase(uri);
  const votes = db.collection('votes');

  const getCountVotes = (indicated: IIndicated) =>
    votes.countDocuments({ indicatedId: indicated.id });

  const sumTotalVotes = (acc: number, countVotes: number) => acc + countVotes;

  const totalAllVotes = await Promise.all(
    indicatedsData.map(getCountVotes),
  ).then((response) => response.reduce(sumTotalVotes));

  const getPercentualVotes = async (indicated: IIndicated) => {
    const percentual = ((await getCountVotes(indicated)) / totalAllVotes) * 100;
    return Math.floor(percentual);
  };

  const result = await Promise.all(
    indicatedsData.map(async (indicated) => {
      return {
        artist: indicated.artist,
        title: indicated.title,
        imageUrl: indicated.imageUrl,
        votes: await getCountVotes(indicated),
        percentual: await getPercentualVotes(indicated),
      };
    }),
  );

  return {
    props: {
      totalAllVotes,
      result,
    },
    revalidate: secondsInDay,
  };
};
