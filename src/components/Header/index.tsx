import Image from 'next/image';

import { Divisor } from '@/components';

import {
  Container,
  Logos,
  LogoLeft,
  LogoRight,
  GuideColumns,
  ElementLeft,
  ElementRight,
} from './styles';

interface HeaderProps {
  isChart?: boolean;
}

const Header = ({ isChart = false }: HeaderProps) => {
  return (
    <>
      <Container>
        <Logos>
          <LogoLeft>
            <Image src="/images/logo-veraotaon.png" layout="fill" />
          </LogoLeft>

          <LogoRight>
            <Image
              src="/images/logo-premio-suamusicadeverao.png"
              layout="fill"
            />
          </LogoRight>
        </Logos>

        {isChart && (
          <GuideColumns>
            <strong>Música</strong>
            <strong>Plays</strong>
          </GuideColumns>
        )}

        <ElementLeft>
          <Image src="/images/tree-left.png" layout="fill" />
        </ElementLeft>

        <ElementRight>
          <Image src="/images/tree-right.png" layout="fill" />
        </ElementRight>
      </Container>
      <Divisor height="16rem" />
    </>
  );
};

export default Header;
