import styled from "styled-components";
import { colors } from "../globalStyles";
import { useState, useEffect } from "react";
import {
  Dashboard,
  TrendingUp,
  Storefront,
  Person,
  CreditCard,
  Summarize,
  Menu,
} from "@mui/icons-material";
const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 300px;
  height: 90vh;
  padding: 5vh 25px;
`;
const Profile = styled.div`
  background-color: white;
  padding: 10px;
  height: 70px;
  border-radius: 10px;
  margin-top: 10vh;
  box-shadow: 5px 5px 0px ${colors.orange};
  display: flex;
`;
const ProfileIcon = styled.div`
  background-color: white;
  border: 3px solid black;
  border-radius: 50%;
  height: 70px;
  width: 70px;
  margin-left: 10px;
  border-radius: 50%;
  display: inline-block;
`;
const TextContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
`;
const Name = styled.span`
  font-size: 22px;
  font-weight: bold;
  display: block;
`;
const Title = styled.span`
  display: block;
  font-weight: 18px;
  color: grey;
`;
const NavList = styled.ul`
  list-style: none;
  padding-left: 20px;
  font-size: 22px;
  line-height: 22px;
`;
const NavOption = styled.li`
  padding: 20px;
  margin: 10px;
  border-radius: 20px;
  cursor: pointer;
  text-aign: center;
  transition: 0.2s;
  :hover {
    color: ${colors.orange};
    transform: scale(1.05);
  }
  * {
    margin-right: 10px;
  }
`;
const Button = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;
  display: none;
  @media (max-width: 700px) {
    display: block;
  }
`;
export default function Sidebar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <>
      {(toggleMenu || screenWidth > 700) && (
        <Container>
          <Profile>
            <ProfileIcon />
            <TextContainer>
              <Name>Jonathan Leverenz</Name>
              <Title>General Manager</Title>
            </TextContainer>
          </Profile>
          <NavList>
            <NavOption>
              <Dashboard />
              Dashboard
            </NavOption>
            <NavOption>
              <TrendingUp />
              Statistics
            </NavOption>
            <NavOption>
              <Storefront />
              Products
            </NavOption>
            <NavOption>
              <Person />
              Users
            </NavOption>
            <NavOption>
              <CreditCard />
              Transactions
            </NavOption>
            <NavOption>
              <Summarize />
              Reports
            </NavOption>
          </NavList>
        </Container>
      )}
      <Button onClick={toggleNav}>
        <Menu sx={{ "font-size": "50px" }} />
      </Button>
    </>
  );
}
