import Ripple from 'react-ripples';

import styled from 'styled-components';

import { colors } from 'styles';

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

export const ImagePlaceholder = styled.img`
  alt: 'img';
  width: 200px;
  height: 180px;
`;

export const ContainerPlaceholder = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerPencil = styled.div`
  display: flex;
  position: absolute;
  background-color: ${colors.primaryLight};
  border-radius: 14px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  bottom: 0;
  right: 0;
`;
