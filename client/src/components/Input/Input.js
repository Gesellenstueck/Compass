import PropTypes from "prop-types";
import styled from "styled-components/macro";

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
    color: rgba(0, 47, 214, 0.7);
  }
  padding: 0.4rem 0 0.4rem 1.2rem;
`;

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
