import styled from "styled-components/macro";
import Card from "../components/Card/Card";
import Teamicon from "../assets/icons/Team.svg";
import Lockicon from "../assets/icons/Lock.svg";
import Addicon from "../assets/icons/Add.svg";
import Surveyicon from "../assets/icons/Smiley.svg";
import Overview from "../assets/icons/Overview.svg";
import Chat from "../assets/icons/Chat.svg";
import { ReactComponent as MenuIcon } from "../assets/icons/List.svg";
import { getUserById, getUsers } from "../api/users";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
  padding: 2rem 0 0 1.5rem;

  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr; */
  grid-template-rows: repeat(8, auto);
  grid-column-gap: 1.5rem;
`;

const CardContainer = styled.div`
  /* padding: 1rem 0 2rem; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1.5rem;
  overflow: auto;
  padding-bottom: 2rem;

  div {
    min-width: 16rem;
    max-width: 30rem;
    grid-row-start: 2;
  }
`;
const SingleCardContainer = styled.div`
  /* padding: 1rem 0 2rem; */
  display: grid;
  overflow: auto;
  padding-bottom: 2rem;
  div {
    min-width: 16rem;
    max-width: 30rem;
    grid-row-start: 2;
  }
`;

const HeaderContainer = styled.div`
  margin: 1rem 0 2rem;
`;

const displayName = () => {
  const name = localStorage.getItem("name");
  return name;
};

function Dashboard() {
  const [username, setUsername] = useState("User");

  /*  useEffect(() => {
    const doFetch = async () => {
      const user = await getUserById(1);
      console.log(user.title);
      setUsername(user.title);
    };
    doFetch();
  }, []); */

  return (
    <Wrapper>
      <MenuIcon />

      <HeaderContainer>
        <h1>Hello {displayName()},</h1>
        <h4>how are you doing today? </h4>
      </HeaderContainer>

      <h2>Your Boards</h2>
      <CardContainer>
        <Card
          bgColor="primaryDark"
          label="Team Board"
          imgSrc={Teamicon}
          alt="Lock Icon"
          subline="Marie Groß, Lucas Naas..."
        />
        <Card
          bgColor="primaryLight"
          label="Private Board"
          imgSrc={Lockicon}
          alt="Lock Icon"
          subline="Marie Groß, Lucas Naas..."
        />
        <Card bgColor="secondaryDark" imgSrc={Addicon} alt="Plus Icon" />
      </CardContainer>
      <h2>Mood Survey</h2>
      <CardContainer>
        <Card
          bgColor="secondaryDark"
          label="This Week's Survey"
          imgSrc={Surveyicon}
          alt="Smiley"
          subline="Completed by 7/11"
        />
        <Card
          bgColor="primaryDark"
          label="Overview"
          imgSrc={Overview}
          alt="Graph"
        />
        <Card
          bgColor="primaryLight"
          label="Feedback"
          imgSrc={Surveyicon}
          alt=""
        />
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
