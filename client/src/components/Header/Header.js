import PropTypes from "prop-types";
import styled from "styled-components/macro";
import Back from "../../assets/icons/Back.svg";
import { useHistory } from "react-router-dom";

const HeaderContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
  img {
    padding: 0;
  }
  h1 {
    margin: 0 0 0 1rem;
    padding: 0 0 0.2rem 0;
  }
`;

export const Header = ({ title }) => {
  const history = useHistory();

  return (
    <HeaderContainer>
      <img src={Back} alt="Back Button" onClick={() => history.goBack()} />
      <h1>{title}</h1>
    </HeaderContainer>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};
