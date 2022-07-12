import styled from "styled-components";
import { colors } from "../globalStyles";
const Container = styled.div`
  background-color: ${colors.red};
  width: 100%;
  height: 100px;
  position: absolute;
  top: 0;
  left: 400px;
`;
export default function Navbar() {
  return <Container></Container>;
}
