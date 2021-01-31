import React from 'react';
import { useTransition } from 'react-spring';

import { ToastMessage } from '@/hooks/toast';
import Toast from './Toast';

import { Container } from './styles';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer = ({ messages }: ToastContainerProps) => {
  const messagesWithTransitions = useTransition(
    messages,
    (message) => message.id,
    {
      from: { right: '-120%', opacity: -1 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: -1 },
    },
  );

  return (
    <Container>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Toast key={key} style={props} message={item} />
      ))}
    </Container>
  );
};

export default ToastContainer;