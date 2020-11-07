import React, { FunctionComponent, SVGProps } from 'react';

import { colors } from 'styles';
import { Text, TextError } from 'styles/styledComponents';

import { Container, ContainerInput } from './styles';

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label?: string;
  labelColor?: string;
  labelSize?: string;
  errorMsg?: string;
  marginTop?: string;
  IconLeft?: FunctionComponent<
    SVGProps<SVGSVGElement> & { title?: string | undefined }
  >;
  IconRight?: FunctionComponent<
    SVGProps<SVGSVGElement> & { title?: string | undefined }
  >;
  disableInput?: boolean;
  clickIconRight?(): void;
}

const Input: React.FC<InputProps> = (props) => {
  const {
    label,
    errorMsg,
    labelColor,
    labelSize,
    marginTop,
    IconLeft,
    IconRight,
    disableInput,
    clickIconRight,
  } = props;
  return (
    <Container>
      {label && (
        <Text
          color={labelColor || colors.lightBlack}
          size={labelSize || '14px'}
          marginTop={marginTop || '5px'}
        >
          {label}
        </Text>
      )}
      <ContainerInput>
        {IconLeft && <IconLeft />}
        <input {...props} disabled={disableInput} />
        {IconRight && <IconRight onClick={clickIconRight} />}
      </ContainerInput>
      {errorMsg && <TextError>{errorMsg}</TextError>}
    </Container>
  );
};

export default Input;
