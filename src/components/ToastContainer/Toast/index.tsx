import React, { useEffect, useState } from 'react';
import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from 'react-icons/fi';

import { ToastMessage, useToast } from '@/hooks/toast';
import { Container } from './styles';

interface ToastProps {
  message: ToastMessage;
  style: object;
}

const icons = {
  info: <FiInfo size={24} />,
  error: <FiAlertCircle size={24} />,
  success: <FiCheckCircle size={24} />,
};

const Toast = ({ message, style }: ToastProps) => {
  const { removeToast } = useToast();
  const [isHoverToast, setHoverToast] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isHoverToast) {
        removeToast(message.id);
      }
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [message.id, removeToast, isHoverToast]);

  return (
    <Container
      type={message.type}
      hasdescription={Number(!!message.description)}
      style={style}
      onMouseEnter={() => setHoverToast(true)}
      onMouseLeave={() => setHoverToast(false)}
    >
      {icons[message.type || 'info']}

      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <button onClick={() => removeToast(message.id)} type="button">
        <FiXCircle size={20} />
      </button>
    </Container>
  );
};

export default Toast;
