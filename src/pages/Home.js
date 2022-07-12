import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import { colors } from "../globalStyles";
const Container = styled.div`
  width: 90vw;
  padding: 0 10vw;
  background-color: ${colors.tan};
  height: 100vh;
`;
const Main = styled.div``;
export default function Home() {
  return (
    <>
      <Container>
        <Sidebar />
        <Main></Main>
      </Container>
    </>
  );
}
