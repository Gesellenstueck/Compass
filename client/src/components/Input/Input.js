import styled from "styled-components";

const InputField = styled.input`
  border-radius: 1.875rem;
  letter-spacing: 0.07rem;
  color: var(--emphasis-color);
  background: var(--basic-color);
`;

const Input = () => {
  return <InputField />;
};

export default Input;
