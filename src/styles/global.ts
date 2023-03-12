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

  button {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
    font-size: 1.5rem;
    font-weight: bold;
    padding: 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: ${(props) => props.theme.colors.secondary};
    }
  }

  input {
    background-color: ${(props) => props.theme.colors.black700};
    color: ${(props) => props.theme.colors.white};
    border: none;
    min-height: 1.6875rem;
    border-radius: 0.25rem;
    padding-left: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    
    &::placeholder {
      color: ${(props) => props.theme.colors.gray300};
      font-size: 1.0625rem;
      font-weight: 500;
    }

    &:focus {
      outline: none;
    }
  }
`;
