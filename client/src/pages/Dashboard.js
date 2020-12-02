import styled from "styled-components/macro";
import Card from "../components/Card/Card";
import Teamicon from "../assets/icons/Team.svg";
import Lockicon from "../assets/icons/Lock.svg";
import Addicon from "../assets/icons/Add.svg";
import { ReactComponent as MenuIcon } from "../assets/icons/List.svg";

const Wrapper = styled.div`
  padding: 2rem;
  h1,
  p {
    color: var(--emphasis-color);
  }

  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr; */
  grid-template-rows: 56px auto 1fr;
  grid-column-gap: 1.5rem;
`;

const CardContainer = styled.div`
  overflow: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1.5rem;

  div {
    min-width: 16rem;
    max-width: 30rem;
  }
`;

function Dashboard() {
  return (
    <Wrapper>
      <MenuIcon />
      <h1>Hello User,</h1>
      <p>how are you doing today? </p>

      <CardContainer>
        <Card
          type="teamBoard"
          label="Team Board"
          imgSrc={Teamicon}
          alt="Team Icon"
          subline="Marie Groß, Lucas Naas..."
        />
        <Card
          type="privateBoard"
          label="Private Board"
          imgSrc={Lockicon}
          alt="Lock Icon"
          subline="Marie Groß, Lucas Naas..."
        />
        <Card type="addBoard" imgSrc={Addicon} alt="Plus Icon" />
      </CardContainer>
    </Wrapper>
  );
}

export default Dashboard;
