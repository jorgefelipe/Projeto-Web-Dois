import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 100%;
`;

export const ImagemFundo = styled.img`
  overflow: hidden;
  width: 100%;
  position: fixed;
  z-index: -1;
  filter: brightness(30%);
  height: 100%;
`;

export const Ico = styled.img`
  display: flex;
  max-width: 40%;
  margin-top: 0px;
  margin: 0px;
  padding: 0px;
  float: 0px;
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
  padding: 0 20px;
`;
