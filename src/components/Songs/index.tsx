import Image from 'next/image';
import Link from 'next/link';

import { v4 as uuid } from 'uuid';

import formatNumber from '@/utils/formatNumber';

import {
  Container,
  SongsContainer,
  Song,
  SongContent,
  Position,
  Cover,
  PlayIcon,
  Info,
  Plays,
} from './styles';

interface SongProps {
  cover: string;
  title: string;
  link: string;
  artist: string;
  plays: number;
}

interface SongsList {
  songs: SongProps[];
}

const Songs = ({ songs }: SongsList) => {
  return (
    <Container>
      <SongsContainer>
        {songs.map(({ cover, title, link, artist, plays }, index) => (
          <Song key={uuid()} className="song">
            <Link href={link} passHref>
              <SongContent target="_blank">
                <Position>{`${index + 1}º`}</Position>

                <Cover>
                  <PlayIcon>
                    <Image src="/images/play.svg" alt={title} layout="fill" />
                  </PlayIcon>
                  <Image src={cover} alt={title} layout="fill" />
                </Cover>

                <Info>
                  <strong>{title}</strong>
                  <span>{artist}</span>
                </Info>

                <Plays>
                  <span>{formatNumber(plays)}</span>
                </Plays>
              </SongContent>
            </Link>
          </Song>
        ))}
      </SongsContainer>
    </Container>
  );
};

export default Songs;
