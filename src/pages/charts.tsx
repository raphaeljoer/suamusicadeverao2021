import { Header, Songs, Alert, SEO, Footer } from '@/components';
import { Container } from '@/styles/pages/Home';
import { GetStaticProps } from 'next';

interface ISongProps {
  cover: string;
  title: string;
  link: string;
  artist: string;
  plays: number;
}

interface IChartsPageProps {
  songs: ISongProps[];
}

export default function ChartsPage({ songs }: IChartsPageProps) {
  return (
    <Container>
      <SEO
        title="As mais tocadas | Prêmio Sua Música de Verão"
        description="O Verão tá On"
        imageUrl="/images/cover.jpg"
      />
      <Alert />
      <Header isChart />
      <Songs songs={songs} />
      <Footer />
    </Container>
  );
}

export const getStaticProps: GetStaticProps<IChartsPageProps> = async () => {
  const response = await fetch(process.env.API_URL);
  const songsListJson = await response.json();
  const secondsInDay = 86400;

  const getFirst50 = (_, index: number) => index < 50;

  const convertPlaysToNumber = (song: ISongProps) => ({
    ...song,
    plays: Number(song.plays),
  });

  const songs = songsListJson.filter(getFirst50).map(convertPlaysToNumber);

  return {
    props: {
      songs,
    },
    revalidate: secondsInDay,
  };
};
