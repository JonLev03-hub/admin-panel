import styled from "styled-components";
import { colors } from "../globalStyles";
export default function Footer() {
  const Container = styled.footer`
    width: calc(100%-50px;);
    padding: 20px 50px;
  `;
  return (
    <Container>
      <span>COPYRIGHT © 2022 JONATHAN LEVERENZ - ALL RIGHTS RESERVED.</span>
    </Container>
  );
}
