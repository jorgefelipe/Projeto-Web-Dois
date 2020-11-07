import React from 'react';
import { AiOutlineLogout } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Simbolo from 'assets/images/simbolo.png';

import { userLogout } from 'store/user';

import { Container, ContainerLogout } from './styles';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onPressLogout = () => {
    dispatch(userLogout());
    history.replace('/');
  };

  return (
    <Container>
      <ContainerLogout onClick={onPressLogout}>
        <AiOutlineLogout color="#ffffff" size="20px" />
      </ContainerLogout>

      <div className="titulo">
        Black Lives Matter.
        <a href="https://support.eji.org/give/153413/#!/donation/checkout">
          Support the Equal Justice Initiative.
        </a>
      </div>

      <div className="menu">
        <div className="parte">
          <div className="parteUm">
            <img src={Simbolo} alt="" />
            <a href="wwww.google.com">
              <strong>React</strong>
            </a>
          </div>

          <div className="parteDois">
            <a href="wwww.google.com">Docs</a>
            <a href="wwww.google.com">Tutorial</a>
            <a href="wwww.google.com">Blog</a>
            <a href="wwww.google.com">Community</a>
          </div>

          <div className="inp">
            <input type="text" value="          Search" />
          </div>

          <div className="parteTres">
            <a href="wwww.google.com" className="ff">
              v16.13.1
            </a>
            <a href="wwww.google.com" className="penultimo">
              Languages
            </a>
            <a className="ultimo" href="wwww.google.com">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </Container>
);
};

export default Header;
