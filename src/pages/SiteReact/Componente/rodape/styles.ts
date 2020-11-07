import Ripple from 'react-ripples';

import styled from 'styled-components';

import { colors } from 'styles';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding: 30px;
  gap: 20px;
`;

export const ContentPost = styled.div`
  padding: 20px;
  max-width: 300px;
`;

export const Description = styled.h1`
  font-size: 17px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: normal;
  margin-top: 10px;
`;

export const Title = styled.h1`
  color: #6d6d6d;
  font-size: 20px;
  line-height: 1.7;

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: normal;
`;

export const ContainerButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

interface IContainerIcons {
  color?: string;
}

export const ContainerIcons = styled(Ripple)<IContainerIcons>`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color || colors.red};
  padding: 12px;
  border-radius: 14px;
`;

export const ContentIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 10px;
`;

export const ContainerImage = styled(Ripple)`
  margin-top: 12px;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.primaryLight};
  border-radius: 14px;
  width: 100%;
  height: 350px;
  max-width: 450px;
  max-height: 450px;
  min-width: 300px;
  min-height: 300px;
`;

export const ImageProduct = styled.img`
  alt: 'img';
  max-width: 100%;
  height: 100%;
`;
