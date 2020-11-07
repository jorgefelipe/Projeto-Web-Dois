import React from 'react';

import { colors } from 'styles';
import { Text } from 'styles/styledComponents';

import {
  Container,
  ContainerHeader,
  BackDrop,
  ContainerChildren,
  Content,
} from './styles';

interface IProps {
  title?: string;
  backgroundColorTitle?: string;
  onBackDropPress?(): void;
}

const Modal: React.FC<IProps> = ({
  children,
  title,
  onBackDropPress,
  backgroundColorTitle,
}) => (
  <>
    <Container>
      <BackDrop onClick={onBackDropPress} />

      <Content>
        <ContainerHeader color={backgroundColorTitle}>
          {title && (
            <Text color={colors.secondary} size="14px">
              {title}
            </Text>
          )}
        </ContainerHeader>
        <ContainerChildren>{children}</ContainerChildren>
      </Content>
    </Container>
  </>
);

export default Modal;
