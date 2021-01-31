import Image from 'next/image';
import Link from 'next/link';

import { Divisor } from '@/components';

import { BiWater } from 'react-icons/bi';

import {
  FooterContainer,
  ContentContainer,
  Content,
  Title,
  Sponsors,
  Sponsor,
} from './styles';

const Footer = () => {
  return (
    <>
      <Divisor height="14rem" />
      <FooterContainer>
        <ContentContainer>
          <Title>
            <BiWater />
            PATROCÍNIO
            <BiWater />
          </Title>
          <Content>
            <Sponsors>
              <Sponsor>
                <Link href="https://www.youtube.com/watch?v=Lynt7znl94k">
                  <a target="_blank">
                    <Image
                      src="/images/sponsors/oboticario.svg"
                      alt="sponsor"
                      layout="fill"
                    />
                  </a>
                </Link>
              </Sponsor>
            </Sponsors>
          </Content>
        </ContentContainer>
      </FooterContainer>
    </>
  );
};

export default Footer;
