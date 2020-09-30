import React, { FunctionComponent, SVGProps } from 'react';
import { Spinner } from 'react-activity';
import 'react-activity/dist/react-activity.css';

import { colors } from 'styles';
import { Text } from 'styles/styledComponents';

import { Container } from './styles';

export interface IProps {
  label?: string;
  Icon?: FunctionComponent<
    SVGProps<SVGSVGElement> & { title?: string | undefined }
  >;
  fontSize?: number;
  iconSize?: number;
  loading?: boolean;
  onPress?(): void;
  width?: string;
}

const Button: React.FC<IProps> = ({
  label,
  Icon,
  fontSize,
  iconSize,
  loading,
  onPress,
  width,
}) => (
  <Container onClick={loading ? undefined : onPress} width={width}>
    {loading ? (
      <Spinner
        color={colors.secondary}
        size={fontSize ? fontSize + 20 : iconSize ? iconSize + 20 : 12}
      />
    ) : (
      <>
        {Icon && (
          <Icon
            style={{
              width: iconSize || 20,
              height: iconSize || 20,
              marginRight: label ? 13 : 0,
            }}
            fill={colors.secondary}
          />
        )}
        {label && (
          <Text
            size={fontSize ? `${fontSize}px` : '14px'}
            color={colors.secondary}
          >
            {label}
          </Text>
        )}
      </>
    )}
  </Container>
);

export default Button;
