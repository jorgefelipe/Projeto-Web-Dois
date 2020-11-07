import styled from 'styled-components';

import { colors } from 'styles';

export const Container = styled.div``;

export const ContainerInput = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  border: 1px solid ${colors.lightGrey};
  padding: 12px;
  background-color: ${colors.white};
  border-radius: 10px;
  margin-top: 2px;

  input {
    border: none;
    display: flex;
    flex: 1;
    margin-left: 5px;
    margin-right: 5px;
    background-color: ${colors.transparent};

    ::placeholder {
      color: ${colors.lightGrey};
      size: 12px;
    }
  }
`;
