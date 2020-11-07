import React from 'react';

import { colors } from 'styles';
import { Text } from 'styles/styledComponents';

import Modal from '../Modal';
import OutlineButton from '../OutlineButton';
import { ContainerButtons, ContentButton, Container } from './styles';

interface IProps {
  title: string;
  description: string;
  colorButton?: string;
  textButtonConfirm?: string;
  showCancelButton?: boolean;
  onPressCancel?(): void;
  onPressConfirm?(): void;
  setShow(show: boolean): void;
}

const AlertModal: React.FC<IProps> = ({
  setShow,
  showCancelButton,
  title,
  description,
  colorButton,
  textButtonConfirm,
  onPressCancel,
  onPressConfirm,
}) => (
  <Modal
    title={title}
    backgroundColorTitle={colors.red}
    onBackDropPress={() => setShow(false)}
  >
    <Container>
      <Text size="14px" color={colors.grey}>
        {description}
      </Text>
      <ContentButton>
        {showCancelButton && (
          <ContainerButtons>
            <OutlineButton
              label="Cancela"
              onPress={() => {
                setShow(false);
                if (onPressCancel) onPressCancel();
              }}
            />
          </ContainerButtons>
        )}
        <ContainerButtons>
          <OutlineButton
            label={textButtonConfirm || 'Confirmar'}
            color={colorButton || colors.lightGreen}
            onPress={() => {
              setShow(false);
              if (onPressConfirm) onPressConfirm();
            }}
          />
        </ContainerButtons>
      </ContentButton>
    </Container>
  </Modal>
);

export default AlertModal;
