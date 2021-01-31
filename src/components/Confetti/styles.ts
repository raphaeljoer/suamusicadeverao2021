import styled from 'styled-components';

export const Section = styled.div`
  overflow: hidden;
  position: absolute;
  height: 100%;
  width: 100%;

  .confetti {
    left: 50%;
    width: 1.6rem;
    height: 1.6rem;
    position: absolute;
    transform-origin: left top;
    animation: confetti 5s ease-in-out -2s infinite;
  }

  .confetti:nth-child(1) {
    left: 10%;
    animation-delay: 0;
    background-color: ${(p) => p.theme.color.pink.normal};
  }

  .confetti:nth-child(2) {
    left: 20%;
    animation-delay: -5s;
    background-color: ${(p) => p.theme.color.purple.normal};
  }

  .confetti:nth-child(3) {
    left: 30%;
    animation-delay: -3s;
    background-color: ${(p) => p.theme.color.yellow.normal};
  }

  .confetti:nth-child(4) {
    left: 40%;
    animation-delay: -2.5s;
    background-color: ${(p) => p.theme.color.green.normal};
  }

  .confetti:nth-child(5) {
    left: 50%;
    animation-delay: -4s;
    background-color: ${(p) => p.theme.color.pink.light};
  }

  .confetti:nth-child(6) {
    left: 60%;
    animation-delay: -6s;
    background-color: ${(p) => p.theme.color.yellow.light};
  }

  .confetti:nth-child(7) {
    left: 70%;
    animation-delay: -1.5s;
    background-color: ${(p) => p.theme.color.purple.lighter};
  }

  .confetti:nth-child(8) {
    left: 80%;
    animation-delay: -2s;
    background-color: ${(p) => p.theme.color.green.normal};
  }

  .confetti:nth-child(9) {
    left: 90%;
    animation-delay: -3.5s;
    background-color: ${(p) => p.theme.color.yellow.normal};
  }

  .confetti:nth-child(10) {
    left: 100%;
    animation-delay: -2.5s;
    background-color: ${(p) => p.theme.color.pink.lighter};
  }

  @keyframes confetti {
    0% {
      transform: rotateZ(15deg) rotateY(0deg) translate(0, 0);
    }
    25% {
      transform: rotateZ(5deg) rotateY(360deg) translate(-5vw, 20vh);
    }
    50% {
      transform: rotateZ(15deg) rotateY(720deg) translate(5vw, 60vh);
    }
    75% {
      transform: rotateZ(5deg) rotateY(1080deg) translate(-10vw, 80vh);
    }
    100% {
      transform: rotateZ(15deg) rotateY(1440deg) translate(10vw, 110vh);
    }
  }
`;
