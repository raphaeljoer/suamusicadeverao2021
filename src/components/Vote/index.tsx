import { useCallback, useContext } from 'react';
import { load } from 'recaptcha-v3';

import Image from 'next/image';
import { useRouter } from 'next/router';

import axios from 'axios';

import { useToast } from '@/hooks/toast';
import { VoteContext } from '@/context/VoteContext';

import indicateds from '@/data/indicateds';

import {
  Section,
  Container,
  Indicated,
  BoxLayer,
  Avatar,
  Metadata,
  Button,
  Spinner,
} from './styles';

interface IndicatedProps {
  id: string;
  title: string;
  artist: string;
  imageUrl: string;
}

const Vote = () => {
  const {
    isAvailable,
    setIsAvailable,

    isVoting,
    setIsVoting,

    songChoiced,
    setSongChoiced,

    handleAvailability,
    setLastVoteDateToStorage,

    CountDown,
  } = useContext(VoteContext);
  const { addToast } = useToast();
  const router = useRouter();

  const indicatedsList: IndicatedProps[] = indicateds;

  const handleSuccess = useCallback(
    (id, artist) => {
      setIsVoting(false);
      setSongChoiced('');
      setLastVoteDateToStorage();
      setIsAvailable(false);
      handleAvailability();

      addToast({
        type: 'success',
        title: `Você votou em ${artist}`,
        description: 'Você pode votar quantas vezes quiser!',
      });

      const slug = id;
      router.push(`/vote/share/${slug}`);
    },
    [
      addToast,
      handleAvailability,
      router,
      setIsAvailable,
      setIsVoting,
      setLastVoteDateToStorage,
      setSongChoiced,
    ],
  );

  const handleError = useCallback(
    (error: string) => {
      setIsVoting(false);
      setSongChoiced('');

      addToast({
        type: 'error',
        title: 'Ops! Algo deu errado',
        description: error,
      });
    },
    [addToast, setIsVoting, setSongChoiced],
  );

  const handleVote = useCallback(
    async (id, artist): Promise<void> => {
      setIsVoting(true);
      setSongChoiced(id);

      load(process.env.RECAPTCHA_V3_SITE_KEY)
        .then((recaptcha) => {
          recaptcha
            .execute('homepage')
            .then((token) => {
              axios({
                method: 'POST',
                url: '/api/vote',
                timeout: 3000,
                data: { indicatedId: id, token },
              })
                .then(() => handleSuccess(id, artist))
                .catch(() =>
                  handleError('Verifique sua conexão com a internet.'),
                );
            })
            .catch(() => handleError('Precisamos validar o seu voto!'));
        })
        .catch(() => handleError('Precisamos validar o seu voto!'));
    },

    [handleError, handleSuccess, setIsVoting, setSongChoiced],
  );

  return (
    <Section>
      <Container>
        {indicatedsList.map(({ title, artist, imageUrl, id }) => (
          <Indicated
            key={id}
            className={id}
            isAvailable={isAvailable}
            songChoiced={songChoiced}
          >
            <Avatar>
              <Image src={imageUrl} layout="fill" />
            </Avatar>

            <Metadata>
              <h3>{title}</h3>
              <strong>{artist}</strong>
            </Metadata>

            <Button
              type="submit"
              isAvailable={isAvailable}
              disabled={!isAvailable}
              songChoiced={songChoiced}
              className={id}
              onClick={() => handleVote(id, artist)}
            >
              <strong>
                {isVoting && id === songChoiced && <Spinner />}
                {isVoting && id === songChoiced && <span>Votando</span>}
                {isVoting && id !== songChoiced && <span>Votar</span>}

                {!isVoting && !isAvailable && <CountDown />}
                {!isVoting && isAvailable && 'Votar'}
              </strong>
            </Button>
            <BoxLayer />
          </Indicated>
        ))}
      </Container>
    </Section>
  );
};

export default Vote;
