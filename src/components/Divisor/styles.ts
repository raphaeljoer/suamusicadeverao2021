import styled from 'styled-components';

interface DivProps {
  height: string;
}

export const Section = styled.div<DivProps>`
  display: block;
  width: 100%;
  height: ${(p) => p.height};
`;
