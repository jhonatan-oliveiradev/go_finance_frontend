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

  input, select {
    background-color: ${(props) => props.theme.colors.black700};
    color: ${(props) => props.theme.colors.white};
    border: none;
    min-height: 1.6875rem;
    border-radius: 0.25rem;
    padding: 0.5rem 1rem;
    
    &::placeholder {
      color: ${(props) => props.theme.colors.gray300};
      font-size: 1.0625rem;
      font-weight: 500;
    }

    &:focus {
      outline: none;
    }
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    background-color: ${(props) => props.theme.colors.black700};
    transition: background-color: 5000s ease-in-out 0s;
    -webkit-text-fill-color: ${(props) => props.theme.colors.white};
    ::-webkit-input-placeholder {
      color: ${(props) => props.theme.colors.gray300};
      font-size: 12px;
      font-weight: 500;
    }
  }

  input[type="date"] {
    ::-webkit-calendar-picker-indicator {
      background-image: url(/calendar.png);
      cursor: pointer;
    }
  }

  select {
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 9.375rem;
    background-image:
      linear-gradient(45deg, transparent 50%, ${(props) =>
				props.theme.colors.primary} 50%),
      linear-gradient(135deg, ${(props) =>
				props.theme.colors.primary} 50%, transparent 50%);
    background-position: 
      calc(100% - 20px) calc(1em + 2px),
      calc(100% - 15px) calc(1em + 2px),
      calc(100% - 0.5em) 0.5em;
    background-size: 5px 5px, 5px 5px, 1.5em 1.5em;
    background-repeat: no-repeat;
    select::-ns-expand {
      display: none;
    }
 }
`;
