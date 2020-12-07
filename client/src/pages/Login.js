import styled from "styled-components/macro";
import Input from "../components/Input/Input";
import bgImg from "../assets/images/background.svg";
import Button from "../components/Button/Button";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { postUser } from "../api/users";
import InputBtn from "../components/Input/InputBtn";

const Wrapper = styled.div`
  display: flex;
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-position: center;
  min-height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    color: var(--basic-color);
  }
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

function setLocalStorage(name) {
  localStorage.setItem("name", name);
}

function Login() {
  const [name, setName] = useState("");
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLocalStorage(name);
    await postUser({
      name,
    });
    history.push(`/dashboard`);
  };

  return (
    <Wrapper>
      <h1>WELCOME</h1>

      <LoginContainer onSubmit={handleSubmit}>
        <Input
          placeholder="Name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <Input placeholder="Password" />

        <InputBtn type="submit" value="Submit" />

        <Button size="large">Sign up</Button>
      </LoginContainer>
    </Wrapper>
  );
}

export default Login;
