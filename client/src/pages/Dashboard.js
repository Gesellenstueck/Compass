import styled from "styled-components/macro";
import { AddCard, Card } from "../components/Card/Card";
import Teamicon from "../assets/icons/Team.svg";
import Lockicon from "../assets/icons/Lock.svg";
import Addicon from "../assets/icons/Add.svg";
import Surveyicon from "../assets/icons/Smiley.svg";
import Overview from "../assets/icons/Overview.svg";
import Chat from "../assets/icons/Chat.svg";
import { ReactComponent as MenuIcon } from "../assets/icons/List.svg";
import { useHistory } from "react-router-dom";
import getDate from "../utils/Date";
import monsYellowSrc from "../assets/images/monsYellow.svg";
import { useEffect, useState } from "react";
import { checkUserId } from "../api/results";

const Wrapper = styled.div`
  padding-top: 2rem;

  display: grid;
  overflow: hidden;
  grid-template-rows: repeat(8, auto);
  grid-column-gap: 1.5rem;

  svg {
    margin-left: 2rem;
  }
`;

const SingleCardContainer = styled.div`
  display: grid;
  overflow: auto;
  padding: 0 1.5rem 2rem;
  grid-template-columns: 1fr auto;
  grid-column-gap: 1.5rem;

  div {
    min-width: 16rem;
    max-width: 30rem;
    grid-row-start: 2;
  }
`;
const CardContainer = styled(SingleCardContainer)`
  grid-template-columns: auto 1fr 1fr 1fr auto;
  padding: 0 0 2rem 0;
  div :last-child,
  div :first-child {
    width: 1px;
    height: auto;
    min-width: 0;
  }
`;

const HeaderContainer = styled.div`
  margin: 1rem 0 2rem;
`;

const MonsYellow = styled.img`
  position: fixed;
  z-index: -1;
  transform: rotate(210deg);
  right: -20%;
  top: -18%;
  opacity: 50%;
`;

const displayName = () => {
  const data = JSON.parse(localStorage.getItem("currentUser") || "{}");
  const { name: userName } = data;
  return userName;
};

function Dashboard() {
  const history = useHistory();
  const [disabled, setDisabled] = useState(false);
  const dateObj = getDate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("currentUser") || "{}");
    const { _id: userID } = data;

    const doFetch = async () => {
      const checkedUserId = await checkUserId(userID);

      const dateMatch = checkedUserId.filter(
        (object) => object.date === dateObj.weekNumber
      );
      if (dateMatch.length > 1) {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
    };
    doFetch();
  });

  return (
    <Wrapper>
      <MenuIcon />
      <MonsYellow src={monsYellowSrc} />

      <HeaderContainer>
        <h1>Hello {displayName()},</h1>
        <h4>how are you doing today? </h4>
      </HeaderContainer>

      <h2>Your Boards</h2>

      <CardContainer>
        <div></div>
        <Card
          bgColor="primaryDark"
          label="Team Board"
          imgSrc={Teamicon}
          alt="Lock Icon"
          subline="Marie Groß, Lucas Naas..."
          onClick={() => history.push("/whiteboard")}
        />

        <Card
          bgColor="primaryLight"
          label="Private Board"
          imgSrc={Lockicon}
          alt="Lock Icon"
          subline="Marie Groß, Lucas Naas..."
        />
        <AddCard bgColor="secondaryDark" imgSrc={Addicon} alt="Plus Icon" />
        <div></div>
      </CardContainer>
      <h2>Mood Survey</h2>
      <CardContainer>
        <div></div>
        <Card
          bgColor="secondaryDark"
          label="This Week's Survey"
          imgSrc={Surveyicon}
          alt="Smiley"
          subline={dateObj.date}
          isDisabled={disabled}
          onClick={() =>
            history.push("/survey/5fd09e58342aac296ab18e06") &&
            setDisabled(true)
          }
        />
        <Card
          bgColor="primaryDark"
          label="Overview"
          imgSrc={Overview}
          alt="Graph"
          onClick={() => history.push("/overview")}
        />
        <Card
          bgColor="primaryLight"
          label="Feedback"
          imgSrc={Surveyicon}
          alt=""
        />
        <div></div>
      </CardContainer>
      <h2>Challenge of the week</h2>
      <SingleCardContainer>
        <Card
          bgColor="primaryLight"
          label="Making new friends"
          imgSrc={Chat}
          alt="Chat bubble"
          subline="Start a conservation with someone you don't speak to very often."
        />
      </SingleCardContainer>
    </Wrapper>
  );
}

export default Dashboard;
