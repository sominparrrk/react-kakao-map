import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 10vh;
  background-color: #744aff;
`;
const Title = styled.h2`
  color: #ffffff;
`;

const Icon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`;

const NavBar = () => {
  return (
    <Container>
      <Icon src="/img/hamburger-menu.svg" alt="menu" />
      <Title>반배기</Title>
      <Icon src="/img/info-icon.svg" alt="info" />
    </Container>
  );
};

export default NavBar;
