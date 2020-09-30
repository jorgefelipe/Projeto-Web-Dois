import styled from 'styled-components';

export const Container = styled.div`
  h3 {
    color: #6d6d6d;
    font-size: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: normal;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px;
    margin: 0px;
  }

  .quadroTudo {
    margin-left: 100px;
    margin-right: 100px;
    padding-top: 70px;
    display: flex;

    max-width: 1500px;
    justify-content: space-between;
  }

  .quadroUm {
    font-size: 17px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    line-height: 1.7;
    font-weight: normal;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 400px;
    padding-top: 60px;
  }

  .quadroDois {
    font-size: 17px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    line-height: 1.7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 400px;
  }
  .quadroTres {
    font-size: 17px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 400px;
  }
  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 800px) {
    .quadroTudo {
      flex-direction: column;
      justify-content: center;
    }
    h3 {
      justify-content: center;
    }
  }
`;
