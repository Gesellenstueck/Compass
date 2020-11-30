import styled from "styled-components";

const Input = styled.input`
  display: block;
  border-radius: 1.875rem;
  letter-spacing: 0.07rem;
  font-size: 1.25rem;
  font-family: "Oxygen-Regular";
  color: var(--emphasis-color);
  background: var(--basic-color);
  border: none;
  ::placeholder {
    color: var(--emphasis-color);
  }
  padding: 0.3rem 0 0.3rem 1rem;
`;

export default Input;
