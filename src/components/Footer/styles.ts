import styled from 'styled-components';

export const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const ContentContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  margin-top: 3.2rem;

  padding: 0.8rem 0.8rem;

  background-color: rgba(61, 23, 113, 1);

  &:before {
    position: absolute;
    top: 0;
    left: 0;

    pointer-events: none;

    content: '';

    width: 100%;
    height: 6.4rem;

    background: linear-gradient(
      to bottom,
      rgba(61, 23, 113, 0),
      rgba(61, 23, 113, 1)
    );

    transform: translateY(-99.7%);
  }
`;

export const Content = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  height: 6.4rem;
  width: 100%;

  padding-right: 0.8rem;
  border-radius: 1.6rem;

  max-width: 60rem;
  margin: 0 auto;

  background-color: ${(p) => p.theme.color.pink.light};
`;

export const Title = styled.h3`
  display: flex;
  align-items: center;

  color: ${(p) => p.theme.color.white.normal};
  font-size: 1rem;

  margin-bottom: 1.2rem;

  svg {
    margin: 0 0.4rem;
  }
`;

export const Sponsors = styled.div`
  display: flex;
`;

export const Sponsor = styled.div`
  position: relative;
  width: 9.2rem;
  height: 1.2rem;

  margin-right: 1.6rem;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
`;
