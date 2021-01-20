import styled from "styled-components/macro";
import Input from "../components/Input/Input";

import Button from "../components/Button/Button";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import InputBtn from "../components/Input/InputBtn";
import { useAuthDispatch, useAuthState } from "../context/context";
import { loginUser } from "../context/actions";
import BgImgSrc from "../assets/images/background.svg";

const Wrapper = styled.div`
  display: flex;

  min-height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    color: var(--basic-color);
  }
`;

const BgImg = styled.img`
  position: fixed;
  z-index: -1;
  height: 100%;
`;

const LoginContainer = styled.form`
  width: 19rem;
  height: 20rem;
  padding: 2rem;
  border-radius: 20px;
  background-color: rgba(255, 145, 146, 0.75);
  display: flex;
  flex-direction: column;
  justify-content: center;
  > :nth-child(2) {
    margin-bottom: 3rem;
  }
  > :nth-child(odd) {
    margin-bottom: 0.8rem;
  }
`;

function Login() {
  const [name, setName] = useState("");
  const [team, setTeam] = useState("");
  const history = useHistory();

  const dispatch = useAuthDispatch();
  const { loading, errorMessage } = useAuthState();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await loginUser(dispatch, { name, team });
    if (!response?.user) return;
      history.push("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Wrapper>
      <BgImg src={BgImgSrc} />
      <h1>WELCOME</h1>
      <LoginContainer onSubmit={handleSubmit}>
        <Input
          placeholder="Name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          disabled={loading}
        />
        <select onChange={(event) => setTeam(event.target.value)}>
          <option>Please choose a team</option>
          <option value="Team1"  >Team 1</option>
          <option value="Team2"  >Team 2</option>
          <option value="Team3"  >Team 3</option>
          <option value="Team4"  >Team 4</option>
        </select>

        <InputBtn type="submit" value="Submit" />

        <Button size="large">Sign up</Button>
        {errorMessage && <p>{JSON.stringify(errorMessage)}</p>}
      </LoginContainer>
    </Wrapper>
  );
}

export default Login;
