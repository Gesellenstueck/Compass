import styled from "styled-components";
import Input from "../components/Input/Input";
import bgImg from "../assets/images/background.svg";
import Button from "../components/Button/Button";

const Wrapper = styled.div`
  background-image: url(${bgImg});
  height: 100vh;
  text-align: center;
`;

const LoginContainer = styled.div`
  display: grid;
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
