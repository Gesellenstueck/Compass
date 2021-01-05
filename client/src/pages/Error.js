import { useHistory } from "react-router-dom";
import styled from "styled-components/macro";
import monsPinkSrc from "../assets/images/monsPink.svg";
import monsYellowSrc from "../assets/images/monsYellow.svg";
import Button from "../components/Button/Button";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  min-width: 100vw;
  overflow: hidden;
  align-items: center;
`;

const MonsPink = styled.img`
  position: fixed;
  z-index: -1;
  transform: rotate(30deg);
  bottom: -10%;
  left: -10%;
`;

const MonsYellow = styled.img`
  position: fixed;
  z-index: -1;
  transform: rotate(210deg);
  right: -10%;
  top: -10%;
`;

const TextContainer = styled.div`
  margin: 1rem 0 2rem;
`;

const DashboardButton = styled(Button)`
  font-size: 0.75rem;
  padding: 0.4rem 1rem;
  margin: 2rem 0 0 2rem;
  border: 0.1rem solid var(--emphasis-color);
`;

function Error() {
  const history = useHistory();
  return (
    <Wrapper>
      <MonsYellow src={monsYellowSrc} />
      <TextContainer>
        <h1>Error 404</h1>
        <h4>This page cannot be found.</h4>
        <DashboardButton
          size="small"
          onClick={() => history.push("/dashboard")}
        >
          Go back to dashboard
        </DashboardButton>
      </TextContainer>
      <MonsPink src={monsPinkSrc} />
    </Wrapper>
  );
}

export default Error;
