import styled from 'styled-components';

import { colors } from 'styles';

export const Container = styled.div`
  width: 400px;
  padding: 20px;
`;

export const TextArea = styled.textarea`
  display: flex;
  width: 100%;
  height: 200px;
  align-items: center;
  border: 1px solid ${colors.lightGrey};
  padding: 12px;
  background-color: ${colors.white};
  border-radius: 10px;
  margin-top: 2px;

  ::placeholder {
    color: ${colors.lightGrey};
    size: 12px;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  margin: 12px 0px;
  gap: 10px
`;
