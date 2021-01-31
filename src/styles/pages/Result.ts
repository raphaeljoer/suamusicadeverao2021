import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  margin-bottom: 2.4rem;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32rem;
  height: 4.8rem;

  margin: 1.6rem auto;

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
`;
