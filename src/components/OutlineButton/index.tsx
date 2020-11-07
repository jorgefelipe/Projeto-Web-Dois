import React from 'react';
import { Spinner } from 'react-activity';

import { colors } from 'styles';
import { Text } from 'styles/styledComponents';

import { Container } from './styles';

import 'react-activity/dist/react-activity.css';

interface IProps {
  color?: string;
  label: string;
  width?: string;
  loading?: boolean;
  onPress?(): void;
}

const OutlineButton: React.FC<IProps> = ({
  color,
  label,
  onPress,
  width,
  loading,
}) => (
  <Container colorBorder={color} onClick={onPress} width={width}>
    {loading ? (
      <Spinner color={color || colors.lightGrey} size={10} />
    ) : (
      <Text color={color || colors.lightGrey} size="12px">
        {label}
      </Text>
    )}
  </Container>
);

export default OutlineButton;
