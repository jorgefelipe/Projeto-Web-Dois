import styled from 'styled-components';

import { colors } from 'styles';

export const ContainerLogout = styled.div`
  margin: 10px;
  cursor: pointer;
  display: flex;
  position: absolute;
  flex: 1;
  padding: 10px;
  background-color: ${colors.red};
  border-radius: 50%;
`;

export const Container = styled.div`
  body {
    padding: 0;
    margin: 0;
  }

  .titulo {
    padding: 10px;
    background-color: #20232a;
    color: #ffffff;
    text-align: center;
    font-size: 25px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  }

  .titulo a {
    color: #61dafb;
    text-decoration: none;
    font-size: 25px;
  }

  .menu {
    padding-top: 10px;
    padding-bottom: 20px;
    background-color: #20232a;
    margin-top: 0px;
    display:flex;
    justify-content:center;
  }

  .parte a {
    text-decoration: none;
    color: #ffffff;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 18px;
    margin-left: 40px;

  }
  .parte {
    width: 100%;
    display:flex;
    justify-content:space-between;
  }
  .parteUm a {
    color: #61dafb;
  }
  .parteUm img {
    width: 17px;
    height: 17px;
    text-align: center;
    margin-left: 100px  }

  .parteUm {
    margin-top: 0;
    font-size: 20px;

    float: left;
    /* background-color: green; */
    text-align: right;
    flex-direction: row;
    display:flex;
    justify-content:center;
}
  }
  .parteDois {
    margin-top: 0;
    font-size: 10px;
    text-align: center;
    float: left;
    /* background-color: hotpink;  */


    flex-wrap: wrap;
  }

  .parteTres {
    font-size: 15px;

    float: left;
    /* background-color: indianred; */
    text-align: center;
    word-spacing: 25px;

  }

    .ultimo{
      margin-right:100px;
    }

  .inp input {
    background-color: transparent;
    color: #dfdfdf;
    border: none;
    font-size: 15px;
    background-image: url(pesquisar.png);
    background-repeat: no-repeat;
    height: 22px;
    border: none;
  }

  .inp {

    float: left;
    /* background-color: indigo; */
    text-align: center;
  }

  @media ( max-width:1200px){
    .ultimo{
      display:none;
    };
    .penultimo{
      margin-right:50px;
    }
  }
  @media ( max-width:1000px){
    .inp{
      display:none;
    };

  }
  @media ( max-width:900px){
    .ff{
      display:none;
    };
    .penultimo{
      margin-right:50px;
    };

    .parteUm img{
      margin-left:31px;
    }

  }

  @media ( max-width:700px){
    .parte{
      flex-direction: column;
      width:100%;
      justify-content:center;
    };
    .parteDois{

      flex-direction: column;
      width:100%;
      justify-content:center;
    };
    .parteUm img{
     display:none;
    };

    .parteUm{
      margin:0px;
    }
`;
