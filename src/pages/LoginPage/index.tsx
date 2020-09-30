import React from 'react';

import CampusLogin from './components/conteudo';
import ImagemFundo from './components/fundo';
import Icone from './components/icone';
import { Content } from './styles';

const LoginPage: React.FC = () => (
  <>
    <ImagemFundo />
    <Content>
      <Icone />
      <CampusLogin />
    </Content>
  </>
);

export default LoginPage;
