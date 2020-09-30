import InputMask from 'react-input-mask';

import styled from 'styled-components';

import { colors, fontSize } from '.';

interface IText {
  color?: string;
  size?: string;
  align?: string;
  marginTop?: string;
  weight?: string;
}

export const Text = styled.h1<IText>`
  color: ${(props) => props.color || colors.primary};
  font-size: ${(props) => props.size || `${fontSize.xlarge}px`};
  margin-top: ${(props) => props.marginTop || '0px'};
  font-weight: ${(props) => props.weight || 800};
  text-align: ${(props) => props.align || 'left'};
`;

interface ITextMask {
  color?: string;
  fontSize?: string;
  align?: string;
  marginTop?: string;
  weight?: string;
  mask?: string;
}

export const TextMask = styled(InputMask).attrs((props: ITextMask) => ({
  mask: props.mask,
  disabled: true,
}))<ITextMask>`
  border: none;
  background-color: ${colors.transparent};
  color: ${(props) => props.color || colors.primary};
  font-size: ${(props) => props.fontSize || `${fontSize.xlarge}px`};
  margin-top: ${(props) => props.marginTop || '0px'};
  font-weight: ${(props) => props.weight || 800};
  text-align: ${(props) => props.align || 'left'};
`;

export const TextError = styled.h1`
  font-size: 12px;
  color: ${colors.red};
  margin-left: 5px;
`;

export const TextOffer = styled.h1<IText>`
  color: ${(props) => props.color || colors.lightGrey};
  font-size: ${(props) => props.size || `${fontSize.xlarge}px`};
  margin-top: ${(props) => props.marginTop || '0px'};
  font-weight: ${(props) => props.weight || 800};
  text-align: ${(props) => props.align || 'left'};
  text-decoration: line-through;
`;

export const Image = styled.img.attrs({
  alt: 'img',
})`
  max-width: 100%;
  max-height: 100%;
  border-radius: 50%;
`;

interface IDivider {
  margin?: number;
  height?: number;
}
export const Divider = styled.div<IDivider>`
  width: 100%;
  height: ${(props) => props.height || 1}px;
  margin: ${(props) => props.margin || 0}px 0;
  background-color: ${colors.lightGrey};
`;
