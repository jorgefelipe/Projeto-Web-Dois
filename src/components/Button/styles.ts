import Ripple from 'react-ripples';

import styled from 'styled-components';

import { colors } from 'styles';

interface IContainer {
  width?: string;
}
export const Container = styled(Ripple)<IContainer>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  background-color: ${colors.primaryLight};
  padding: 12px 34px;
  border-radius: 43px;

  margin: 8px 0;
  cursor: pointer;

  width: ${(props) => props.width || '100%'};

  transition: all 0.3s;

  :hover {
    background-color: ${colors.primary};
  }
`;
