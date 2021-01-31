import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  z-index: 3;

  top: 0;
  left: 0;
  right: 0;

  backdrop-filter: blur(16px);
  box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.2);

  -webkit-backdrop-filter: blur(16px);
  -moz-backdrop-filter: blur(16px);

  @-moz-document url-prefix() {
    & {
      background-color: rgba(61, 23, 113, 0.95);
    }
  }
`;

export const Logos = styled.div`
  display: flex;
  justify-content: space-around;

  max-width: 32rem;

  margin: 0 auto;
  margin-bottom: 1.6rem;
`;

export const LogoLeft = styled.div`
  position: relative;
  margin-top: 2.4rem;
  width: 8.4rem;
  height: 9rem;

  transition: 0.4s ease-in-out all;
`;

export const LogoRight = styled.div`
  position: relative;
  margin-top: 2.4rem;
  width: 8rem;
  height: 7.6rem;

  transition: 0.4s ease-in-out all;
`;

export const GuideColumns = styled.div`
  display: flex;
  justify-content: space-between;

  max-width: 60rem;
  margin: 0.8rem auto;

  color: ${(p) => p.theme.color.green.normal};

  strong {
    font-size: 1.2rem;
  }

  strong:first-child {
    margin-left: 4rem;
  }

  strong:last-child {
    margin-right: 2.4rem;
  }
`;

export const ElementLeft = styled.div`
  position: absolute;

  left: 0;

  width: 3.2rem;
  height: 8.9rem;

  transform: translateY(-72%);

  @media ${(p) => p.theme.breakpoint.desktop.small} {
    width: 9.6rem;
    height: 25.9rem;
    transform: translateY(-50%);
  }

  @media ${(p) => p.theme.breakpoint.desktop.large} {
    width: 14.4rem;
    height: 38.9rem;
    transform: translateY(-50%);
  }
`;

export const ElementRight = styled.div`
  position: absolute;

  top: 0;
  right: 0;

  width: 4.5rem;
  height: 9.4rem;

  @media ${(p) => p.theme.breakpoint.desktop.small} {
    width: 10.9rem;
    height: 22.7rem;
  }

  @media ${(p) => p.theme.breakpoint.desktop.large} {
    width: 15.7rem;
    height: 32.6rem;
  }
`;
