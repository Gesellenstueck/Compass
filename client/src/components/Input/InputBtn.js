import PropTypes from "prop-types";
import styled from "styled-components/macro";

const InputBtn = styled.input`
  display: block;
  border-radius: 1.875rem;
  letter-spacing: 0.07rem;
  text-transform: uppercase;
  color: var(--emphasis-color);
  background: var(--basic-color);
  padding: 0.4rem 0;
  font-family: "Oxygen-Bold";
  :active {
    background: var(--emphasis-color);
    color: var(--basic-color);
  }
`;

InputBtn.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
};

export default InputBtn;
