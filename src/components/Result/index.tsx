import Image from 'next/image';
import { v4 as uuid } from 'uuid';

import { BiWater } from 'react-icons/bi';

import {
  Section,
  Container,
  Display,
  Box,
  Content,
  Indicated,
  Avatar,
  Info,
  Title,
  Artist,
  BarContainer,
  Bar,
  Percentual,
} from './styles';

interface IIndicated {
  id: string;
  title: string;
  artist: string;
  imageUrl: string;
  votes?: number;
  percentual?: number;
}

interface ResultProps {
  result: IIndicated[];
}

const Result = ({ result }: ResultProps) => {
  return (
    <Section>
      <Container>
        <Display>
          <BiWater />
          RESULTADO PARCIAL
          <BiWater />
        </Display>
        <Box>
          <Content>
            {result.map(({ title, artist, imageUrl, percentual }) => (
              <Indicated key={uuid()}>
                <Avatar>
                  <Image src={imageUrl} layout="fill" />
                </Avatar>
                <Info>
                  <Title>{title}</Title>
                  <Artist>{artist}</Artist>
                  <BarContainer>
                    <Bar percentual={percentual} />
                    <Percentual>{percentual}%</Percentual>
                  </BarContainer>
                </Info>
              </Indicated>
            ))}
          </Content>
        </Box>
      </Container>
    </Section>
  );
};

export default Result;
