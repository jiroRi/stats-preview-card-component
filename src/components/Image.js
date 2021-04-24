import React from "react";
import styled from "styled-components";
import mobileImage from "../images/image-header-mobile.jpg";
import desktopImage from "../images/image-header-desktop.jpg";

export const Image = () => <Container />;

const Container = styled.div`
  position: relative;

  width: 100%;
  height: 240px;
  background-image: url(${mobileImage});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  order: 1;

  &::after {
    position: absolute;
    top: 0;
    left: 0;

    content: "";
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.violet};
    mix-blend-mode: multiply;
    opacity: 1;
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;

    content: "";
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.violet};
    opacity: 0.1;
  }

  @media ${(props) => props.theme.device.tablet} {
    background-image: url(${desktopImage});
    height: 400px;
  }

  @media ${(props) => props.theme.device.laptop} {
    max-width: 540px;
    height: 446px;
    order: 2;
  }
`;
