import styled from "styled-components/macro";
import Input from "../components/Input/Input";
import bgImg from "../assets/images/background.svg";
import Button from "../components/Button/Button";

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
`;

const LoginContainer = styled.div`
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
  return (
    <Wrapper>
      <h1>WELCOME</h1>
      <LoginContainer>
        <Input placeholder="E-mail" />
        <Input placeholder="Password" />
        <Button size="large">Login</Button>
        <Button size="large">Sign up</Button>
      </LoginContainer>
    </Wrapper>
  );
}

export default Login;
