import { GetStaticPaths, GetStaticProps } from 'next';

import { Header, SEO, Share, Footer, Confetti } from '@/components';
import { Container } from '@/styles/pages/Vote';

import indicateds from '@/data/indicateds';

interface IndicatedProps {
  id: string;
  title: string;
  artist: string;
  imageUrl: string;
}

interface SharePageProps {
  slug: string;
}

export default function SharePage({ slug }: SharePageProps) {
  const findById = (indicated: IndicatedProps) => indicated.id === slug;
  const indicated = indicateds.find(findById);

  return (
    <Container>
      <SEO
        title="Compartilhe | Prêmio Sua Música de Verão"
        description="O Verão tá On"
        imageUrl="/images/cover.jpg"
      />
      <Confetti />
      <Header />

      <Share indicated={indicated} />

      <Footer />
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = indicateds.map((indicated) => {
    return {
      params: { slug: indicated.id },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params;

  return {
    props: {
      slug,
    },
  };
};
