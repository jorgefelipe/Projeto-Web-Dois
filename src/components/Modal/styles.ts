import styled, { keyframes } from 'styled-components';

import { colors } from 'styles';

interface IContainer {
  color?: string;
}
export const Container = styled.div<IContainer>`
  position: fixed;
  display: flex;
  top: 0px;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex: 1;
  z-index: 2;
`;

const visible = keyframes`
  from {
    transform: translateY(150%);
  }

  to {
    transform: translateY(0);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 14px;
  background-color: ${(props) => props.color || colors.secondary};
  z-index: 3;

  animation: ${visible} 0.3s linear;
`;

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: center;
  padding: 14px;
  background-color: ${colors.primaryLight};
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
`;

export const ContainerChildren = styled.div``;

export const BackDrop = styled.div`
  position: fixed;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: ${colors.grey};
  opacity: 0.3;
`;
