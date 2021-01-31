import Image from 'next/image';
import Link from 'next/link';

import {
  Container,
  Section,
  SongChoiced,
  BoxLayer,
  Avatar,
  Metadata,
  Button,
  ShareSocial,
  SocialButtonsContainer,
  SocialButton,
  CallToAction,
} from './styles';

interface IndicatedProps {
  id: string;
  title: string;
  artist: string;
  imageUrl: string;
}

interface ShareProps {
  indicated: IndicatedProps;
}

const Share = ({ indicated }: ShareProps) => {
  return (
    <Section id="start">
      <Container>
        <h2>Eu votei em</h2>

        <SongChoiced>
          <Avatar>
            <Image src={indicated.imageUrl} layout="fill" />
          </Avatar>

          <Metadata>
            <h3>{indicated.title}</h3>
            <strong>{indicated.artist}</strong>
          </Metadata>

          <Link href="/result" passHref>
            <Button type="button" className="buttonResult">
              <strong>Ver resultado parcial</strong>
            </Button>
          </Link>

          <Link href="/vote" passHref>
            <Button type="button">
              <strong>Votar novamente</strong>
            </Button>
          </Link>

          <BoxLayer />
        </SongChoiced>

        <ShareSocial>
          <strong>Compartilhe</strong>
          <SocialButtonsContainer>
            <SocialButton>
              <a>
                <Image
                  src="/images/stories.svg"
                  layout="fixed"
                  width={32}
                  height={32}
                />
              </a>
              <span>Stories</span>
            </SocialButton>
            <SocialButton>
              <a>
                <Image
                  src="/images/feed.svg"
                  layout="fixed"
                  width={32}
                  height={32}
                />
              </a>
              <span>Feed</span>
            </SocialButton>
            <SocialButton>
              <a>
                <Image
                  src="/images/whatsapp.svg"
                  layout="fixed"
                  width={32}
                  height={32}
                />
              </a>
              <span>Whatsapp</span>
            </SocialButton>
          </SocialButtonsContainer>
          <CallToAction>
            Ajude o <em className="artist">{indicated.artist}</em> a ganhar o{' '}
            <em>Prêmio Sua Música de Verão 2021</em>
          </CallToAction>
        </ShareSocial>
      </Container>
    </Section>
  );
};

export default Share;
