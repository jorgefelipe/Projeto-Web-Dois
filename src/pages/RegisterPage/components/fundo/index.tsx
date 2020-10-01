import React from 'react';

import FundoPNG from 'assets/images/fundooo.jpg';

import { Container, ImagemFundo } from '../../styles';

const imagemFundo: React.FC = () => (
  <Container>
    <ImagemFundo alt="fundo" src={FundoPNG} />
  </Container>
);

export default imagemFundo;
