import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface IndicatedProps {
  isAvailable: boolean;
  songChoiced: string;
}

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 4rem;
`;

export const Spinner = styled.div`
  display: flex;

  width: 1.6rem;
  height: 1.6rem;

  border: solid 4px transparent;
  border-top-color: ${(p) => p.theme.color.purple.normal};
  border-left-color: ${(p) => p.theme.color.purple.normal};
  border-radius: 50%;

  -webkit-animation: spinner 400ms linear infinite;
  animation: spinner 400ms linear infinite;

  @-webkit-keyframes spinner {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;

  max-width: 1280px;
  margin: 0 auto;

  @media ${(p) => p.theme.breakpoint.tablet.large} {
    flex-direction: row;
  }
`;

export const Indicated = styled.div<IndicatedProps>`
  position: relative;

  display: flex;
  align-items: center;
  flex-direction: column;

  min-height: 22rem;

  width: 100%;
  margin: 4.4rem 0;

  border-radius: 1.6rem;
  background-color: ${(p) => p.theme.color.purple.lighter};

  background: linear-gradient(45deg, #532499, #411c78);
  box-shadow: 0 0 2.4rem rgba(0, 0, 0, 0.08);

  transition: all 0.2s ease-in-out;
  ${(p) =>
    p.songChoiced === p.className &&
    css`
      transform: scale(0.96);
    `}

  @media ${(p) => p.theme.breakpoint.tablet.large} {
    width: 33%;
    margin: 0.8rem;
  }
`;

export const BoxLayer = styled.div`
  z-index: -1;

  position: absolute;
  bottom: 0;

  width: 90%;
  height: 0.8rem;

  border-radius: 0 0 1.6rem 1.6rem;
  opacity: 0.12;
  background-color: white;
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

  box-shadow: 0 0 2.4rem rgba(0, 0, 0, 0.2);
`;

export const Metadata = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  h3 {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;

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

export const Button = styled.button<IndicatedProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 90%;
  height: 4.8rem;

  margin: 0 auto;
  margin-bottom: 1.6rem;

  font-weight: 700;

  color: ${(p) => p.theme.color.purple.normal};
  background: ${(p) => p.theme.color.green.normal};

  box-shadow: 0 0 2.4rem rgba(0, 0, 0, 0.1);

  border-radius: 1.2rem;

  transition: all 0.24s ease-out;

  &:hover {
    transform: scale(0.98);
    box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.3);
    background-color: ${shade(0.11, '#00C98E')};
  }

  ${(p) =>
    p.isAvailable === false &&
    css`
      cursor: not-allowed;
      opacity: 0.9;
    `}

  strong {
    display: flex;
    align-items: center;

    span {
      margin-left: 0.8rem;
    }
  }
`;

export const WaitToVote = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  text-align: center;
`;
