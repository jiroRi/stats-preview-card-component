import React from "react";
import styled from "styled-components";

export const Attribution = () => (
  <Container>
    Challenge by{" "}
    <Link href="https://www.frontendmentor.io?ref=challenge" target="_blank">
      Frontend Mentor
    </Link>
    . Coded by <Link href="https://jiroricaro.netlify.app">Jiro Ricaro</Link>.
  </Container>
);

const Container = styled.p`
  position: relative;
  bottom: 0.25vh;
  left: 50%;
  z-index: 25000;
  width: 200px;

  font-family: "Lexend Deca", sans-serif;
  font-size: ${(props) => props.theme.mobileFontSize.attribution};
  font-weight: 400;
  color: ${(props) => props.theme.colors.white50};
  text-align: center;

  transform: translateX(-50%);

  @media ${(props) => props.theme.device.tablet} {
    position: absolute;
    bottom: 0.5vh;

    width: 100%;
    text-align: center;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.violet};
  font-family: "Lexend Deca", sans-serif;
  font-size: ${(props) => props.theme.mobileFontSize.attribution};
  font-weight: 400;

  &:hover {
    color: ${(props) => props.theme.colors.white200};
  }
`;
