import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  bottom: 0vh;
  width: 100%;
  height: 18vh;
  background-color: #ffffff;
  border-radius: 1.25rem 1.25rem 0 0;
  z-index: 999;
`;

const Wrapper = styled.div`
  padding: 1.5rem 0 0 1.5rem;
  color: #20124d;
`;

const Title = styled.h3`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
`;

const Distance = styled.span`
  margin-right: 3rem;
`;

const LeftQuantity = styled.span``;

const Congestion = styled.p``;

const Overlay = ({ title }) => {
  return (
    <Container>
      <Wrapper>
        <Title>{title}</Title>
        <Distance>0.5 km</Distance>
        <LeftQuantity>15 kg / 50 kg</LeftQuantity>
        <Congestion>혼잡도 : 보통</Congestion>
      </Wrapper>
    </Container>
  );
};

export default Overlay;
