import styled from "styled-components";
import Input from "../components/Input/Input";
import bgImg from "../assets/images/background.svg";
import Button from "../components/Button/Button";

const Wrapper = styled.div`
  display: flex;
  background-image: url(${bgImg});
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LoginContainer = styled.div`
  width: 200px;
  height: 200px;
  padding: 20px;
  border-radius: 20px;
  background-color: rgba(255, 145, 146, 0.75);
  display: flex;
  flex-direction: column;
  justify-content: center;
  > :nth-child(2) {
    margin-bottom: 1.5rem;
  }
  > :nth-child(odd) {
    margin-bottom: 0.5rem;
  }
`;

function Login() {
  return (
    <Wrapper>
      <h2>Login</h2>
      <LoginContainer>
        <Input placeholder="E-mail address" />
        <Input placeholder="Password" />
        <Button size="large">Login</Button>
        <Button size="large">Sign up</Button>
      </LoginContainer>
    </Wrapper>
  );
}

export default Login;
