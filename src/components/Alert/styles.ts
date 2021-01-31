import styled, { css } from 'styled-components';

interface AlertProps {
  isOpen: boolean;
}

export const Container = styled.div<AlertProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${(p) => p.theme.color.pink.normal};
  z-index: 20;

  transition: transform 0.2s ease-out;

  ${(p) =>
    p.isOpen
      ? css`
          transform: translateY(0);
        `
      : css`
          transform: translateY(-110%);
        `}
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: fit-content;

  max-width: 60rem;
  margin: 0 auto;
`;

export const Text = styled.p`
  font-size: 1.6rem;
  line-height: 150%;
  color: ${(p) => p.theme.color.purple.dark};
  padding: 1.6rem;
`;

export const CloseButton = styled.button`
  margin: 2.4rem;

  svg {
    height: 2.4rem;
    width: 2.4rem;
    color: ${(p) => p.theme.color.purple.dark};
  }
`;
