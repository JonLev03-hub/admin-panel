import styled from "styled-components";
import { colors } from "../globalStyles";
const Container = styled.div`
  height: 100vh;
`;
const Disapear = styled.div``;
const Main = styled.main`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  background-color: white;
  padding: 20px;
  width: 40%;
  max-width: 400px;
  border: 2px solid;
  border-radius: 20px;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: lighter;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 80%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background: ${colors.blue};
  color: white;
  cursor: pointer;
  margin: 20px 0;
`;
const Link = styled.a`
  font-size: 14px;
  margin: 3px;
  width: 100%;
  cursor: pointer;
  text-decoration: underline;
`;

export default function Login() {
  return (
    <Container>
      <Main>
        <Wrapper>
          <Title>Login</Title>
          <Form>
            <Input type="text" placeholder="Email / Username" />
            <Input type="text" placeholder="Password" />
            <Button>Login</Button>
            <Link>Forgot Username / Password</Link>
            <Link>Create Account</Link>
          </Form>
        </Wrapper>
      </Main>
    </Container>
  );
}
