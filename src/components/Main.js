import React from "react";
import styled from "styled-components";

export const Main = ({ children }) => <Container>{children}</Container>;

const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  padding: 32px;
  order: 2;

  text-align: center;

  @media ${(props) => props.theme.device.laptop} {
    justify-content: flex-start;
    padding: 24px 40px;
    order: 1;
    max-height: 446px;

    text-align: left;

    & > * {
      max-width: 378px;
    }
  }

  @media ${(props) => props.theme.device.desktopS} {
    justify-content: flex-start;
    padding: 48px 120px 68px 72px;
    order: 1;
    max-height: 446px;

    text-align: left;

    & > * {
      max-width: 378px;
    }
  }
`;
