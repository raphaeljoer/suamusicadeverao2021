import styled from 'styled-components';

interface BarProps {
  percentual: number;
}

export const Section = styled.div``;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 100%;

  max-width: 768px;
  margin: 0 auto;
`;

export const Display = styled.h2`
  display: flex;
  align-items: center;

  font-size: 1.4rem;

  svg {
    margin: 0 0.8rem;
  }
`;

export const Box = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: fit-content;
  height: 32rem;

  margin: 2.4rem;
  padding: 3.2rem;

  border-radius: 1.6rem;

  background: linear-gradient(45deg, #532499, #411c78);
  box-shadow: 0 0 2.4rem rgba(0, 0, 0, 0.08);

  &::after {
    content: '';
    z-index: -1;

    position: absolute;
    bottom: 0;

    width: 90%;
    height: 3.2rem;

    border-radius: 1.6rem;

    background-color: white;

    opacity: 0.14;

    transform: translateY(0.8rem);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  width: 100%;
  min-width: 32rem;
`;

export const Indicated = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  width: 100%;
`;

export const Avatar = styled.div`
  position: relative;
  overflow: hidden;

  display: flex;
  flex-shrink: 0;

  width: 6.4rem;
  height: 6.4rem;

  border-radius: 50%;
  border: 0.2rem solid ${(p) => p.theme.color.yellow.normal};

  margin: 0.8rem 0;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  margin-left: 1.6rem;
`;

export const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${(p) => p.theme.color.yellow.normal};
`;

export const Artist = styled.h4`
  font-size: 1rem;
  font-weight: 400;
  color: ${(p) => p.theme.color.pink.normal};

  margin-top: 0.4rem;
`;
export const BarContainer = styled.div`
  display: flex;
  align-items: center;

  margin-top: 0.8rem;
`;

export const Bar = styled.div<BarProps>`
  background: ${(p) => p.theme.color.green.normal};

  transition: 0.4s ease-in-out all;

  width: ${(p) => p.percentual}%;
  height: 1.6rem;

  border-radius: 3.2rem;
`;

export const Percentual = styled.h5`
  display: flex;
  align-items: center;

  font-size: 1.2rem;
  font-weight: 600;

  margin-left: 0.8rem;
`;
