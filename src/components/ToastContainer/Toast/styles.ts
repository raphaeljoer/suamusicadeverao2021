import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ContainerProps {
  type?: 'success' | 'error' | 'info';
  hasdescription: number;
}

const toastTypeVariations = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,

  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,

  error: css`
    background: #fddede;
    color: #c53030;
  `,
};

export const Container = styled(animated.div)<ContainerProps>`
  width: 32rem;
  position: relative;
  padding: 1.6rem 3.2rem 1.6rem 1.6rem;
  border-radius: 0.8rem;
  box-shadow: 0.2rem 0.2rem 0.8rem rgba(0, 0, 0, 0.2);

  display: flex;

  & + div {
    margin-top: 0.8rem;
  }

  background: #ebf8ff;
  color: #3172b7;

  ${(props) => toastTypeVariations[props.type || 'info']}

  > svg {
    margin: 0.2rem 1.2rem 0 0;
  }

  div {
    flex: 1;
    display: flex;
    flex-direction: column;

    strong {
      font-size: 1.4rem;
      margin-right: 1.6rem;
    }

    p {
      margin-top: 0.8rem;
      font-size: 1.2rem;
      opacity: 0.8;
      line-height: 150%;
    }
  }

  button {
    position: absolute;
    margin-left: 2rem;
    top: 1.6rem;
    right: 1.6rem;
    opacity: 0.6;
    background: transparent;
    color: inherit;
  }

  ${(props) =>
    !props.hasdescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;
