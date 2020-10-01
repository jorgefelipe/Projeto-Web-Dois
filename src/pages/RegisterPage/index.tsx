import React from 'react';

import CampusLogin from './components/conteudo';
import ImagemFundo from './components/fundo';
import { Content } from './styles';

const RegisterPage: React.FC = () => (
  <>
    <ImagemFundo />
    <Content>
      <CampusLogin />
    </Content>
  </>
);

export default RegisterPage;
