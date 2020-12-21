import PropTypes from "prop-types";
import styled, { css } from "styled-components/macro";
import Back from "../../assets/icons/Back.svg";
import { useHistory } from "react-router-dom";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 1rem;
  h2 {
    margin: 0 0 0 1rem;
  }
`;

export const Header = ({ title }) => {
  const history = useHistory();

  return (
    <HeaderContainer>
      <img src={Back} alt="Back Button" onClick={() => history.goBack()} />
      <h2>{title}</h2>
    </HeaderContainer>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};
