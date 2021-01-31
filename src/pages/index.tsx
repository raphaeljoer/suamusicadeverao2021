import { Header, SEO, Footer } from '@/components';
import { Container, Soon } from '@/styles/pages/Home';

interface SongProps {
  cover: string;
  title: string;
  link: string;
  artist: string;
  plays: number;
}

interface SongsListProps {
  songs: SongProps[];
}

export default function HomePage() {
  return (
    <Container>
      <SEO
        title="Prêmio Sua Música de Verão"
        description="O Verão tá On"
        imageUrl="/images/cover.jpg"
      />
      <Header />

      <Soon>
        <h1>Aguarde</h1>
        <h3>Segunda fase em breve</h3>
      </Soon>

      <Footer />
    </Container>
  );
}
