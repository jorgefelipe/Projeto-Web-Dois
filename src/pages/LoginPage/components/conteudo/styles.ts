import styled from 'styled-components';

import { colors } from 'styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  padding: 14px 60px;
  width: 500px;
  height: 350px;

  .name {
    display: flex;
    width: 100%;
    align-items: left;
    margin: 5px;
  }

  .namee {
    display: flex;
    width: 100%;
    align-items: left;
    margin: 5px;
  }
  .botao {
    margin: 15px;
    width: 70%;
    height: 20px;
    padding: 15px;
  }

  input {
    width: 100%;
    height: 15%;
    margin: 2.5%;
    color: ${colors.black};
    align-items: center;
    padding-left: 15px;
    border-radius: 15px;
    font-size: 15px;
  }

  p {
    color: ${colors.white};
    text-align: left;
    text-decoration: underline;
    margin-left: 210px;
    font-size: 13px;
  }
`;
