import styled from 'styled-components';
import { shade } from 'polished';

export const Section = styled.div`
  margin-bottom: 1.6rem;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  max-width: 32rem;
  margin: 0 auto;

  h2 {
    margin-bottom: 7.2rem;
  }
`;

export const SongChoiced = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  flex-direction: column;

  width: 88%;

  margin: 0.8rem;

  transition: all 0.2s ease-in-out;

  border-radius: 1.6rem;

  background: linear-gradient(45deg, #532499, #411c78);
  box-shadow: 0 0 2.4rem rgba(0, 0, 0, 0.08);
`;

export const BoxLayer = styled.div`
  z-index: -1;

  position: absolute;
  bottom: 0;

  width: 90%;
  height: 0.8rem;

  border-radius: 0 0 1.6rem 1.6rem;

  background-color: white;

  opacity: 0.1;

  transform: translateY(0.8rem);
`;

export const Avatar = styled.div`
  position: relative;
  overflow: hidden;

  width: 12rem;
  height: 12rem;

  margin-top: -6.4rem;
  margin-bottom: 1.6rem;

  border-radius: 50%;
  border: 0.4rem solid ${(p) => p.theme.color.yellow.normal};
`;

export const Metadata = styled.div`
  h3 {
    font-size: 1.6rem;
    text-align: center;
    color: ${(p) => p.theme.color.yellow.normal};

    margin: 0 2.4rem;
    margin-bottom: 1.6rem;
  }

  strong {
    display: block;

    font-size: 1.2rem;
    font-weight: 400;
    text-align: center;

    color: ${(p) => p.theme.color.pink.normal};
    margin-bottom: 1.6rem;
  }
`;

export const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;

  width: 90%;
  height: 4.8rem;

  margin: 0 auto;
  margin-bottom: 2.4rem;

  color: ${(p) => p.theme.color.purple.normal};
  background: ${(p) => p.theme.color.green.normal};

  border-radius: 1.2rem;

  transition: all 0.2s ease-out;

  &:hover {
    transform: scale(0.99);
    box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.3);
    background: ${shade(0.1, '#00C98E')};
  }

  &.buttonResult {
    color: white;
    background-color: ${(p) => p.theme.color.pink.normal};
    margin-bottom: 1.2rem;

    &:hover {
      background: ${shade(0.16, '#FF2A80')};
    }
  }
`;

export const ShareSocial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 3.2rem 2.4rem;
`;

export const SocialButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 1.6rem;
`;

export const SocialButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & + div {
    margin-left: 1.6rem;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 6.4rem;
    height: 6.4rem;

    border-radius: 0.8rem;

    color: ${(p) => p.theme.color.purple.normal};
    background-color: ${(p) => p.theme.color.pink.normal};
  }

  span {
    font-size: 1.2rem;
    margin-top: 0.8rem;
  }
`;

export const CallToAction = styled.span`
  font-size: 1.3rem;
  text-align: center;
  margin-top: 3.2rem;
  line-height: 150%;

  em {
    color: ${(p) => p.theme.color.yellow.normal};
  }

  .artist {
    color: ${(p) => p.theme.color.pink.normal};
  }
`;
