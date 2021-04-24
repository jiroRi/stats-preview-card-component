import React from "react";
import styled from "styled-components";

export const Stat = ({ children }) => <Container>{children}</Container>;

const Container = styled.div`
  display: flex;
  flex-flow: column;
  margin-bottom: 32px;

  &:last-child {
    margin-bottom: 0px;
  }

  @media ${(props) => props.theme.device.laptop} {
    margin-bottom: 0;
    margin-right: 64px;

    &:last-child {
      margin-right: 0px;
    }
  }
`;
