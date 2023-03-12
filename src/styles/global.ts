import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Ubuntu', sans-serif;
  }

  body {
    background-color: ${(props) => props.theme.colors.black800};
    color: ${(props) => props.theme.colors.white};
  }
`;
