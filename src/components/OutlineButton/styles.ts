import Ripple from 'react-ripples';

import styled from 'styled-components';

import { colors } from 'styles';

interface IContainer {
  colorBorder?: string;
  width?: string;
}
export const Container = styled(Ripple)<IContainer>`
  display: flex;
  justify-content: center;
  width: ${(props) => props.width || '100%'};
  border: 1.2px solid ${(props) => props.colorBorder || colors.lightGrey};
  padding: 14px 30px;
  border-radius: 10px;
  cursor: pointer;
`;
