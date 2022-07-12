import styled from "styled-components";
import { colors } from "../globalStyles";
import { useState } from "react";
const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 400px;
  height: 100%;
  background-color: ${colors.blue};
  border-right: 4px solid white;
`;
export default function Sidebar() {
  const [open, setOpen] = useState(true);
  return <Container></Container>;
}
