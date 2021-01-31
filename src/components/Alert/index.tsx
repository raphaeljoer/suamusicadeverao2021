import { useState } from 'react';
import { FiXCircle } from 'react-icons/fi';

import { Container, Content, Text, CloseButton } from './styles';

const Alert = () => {
  const [isOpen, SetIsOpen] = useState(true);

  return (
    <Container isOpen={isOpen}>
      <Content>
        <Text>
          Dados extraídos dos players de CDs e Singles na plataforma, a partir
          de 01/12/2020.
        </Text>
        <CloseButton onClick={() => SetIsOpen((prevState) => !prevState)}>
          <FiXCircle />
        </CloseButton>
      </Content>
    </Container>
  );
};

export default Alert;
