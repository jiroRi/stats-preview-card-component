import React from "react";
import styled from "styled-components";

export const Text = (props) => (
  <>
    {props.variant === "title" && <Title {...props}>{props.children}</Title>}
    {props.variant === "body" && <Body>{props.children}</Body>}
    {props.variant === "label" && <Label>{props.children}</Label>}
    {props.variant === "description" && (
      <Description>{props.children}</Description>
    )}
  </>
);

const Title = styled.h1`
  color: ${(props) => props.theme.colors.white50};
  font-family: "Inter", sans-serif;
  font-size: ${(props) => props.theme.mobileFontSize.title};
  font-weight: 700;
  line-height: 1.25;
  margin-bottom: 14px;

  strong {
    color: ${(props) => props.theme.colors.violet};
    font-family: "Inter", sans-serif;
    font-size: ${(props) => props.theme.mobileFontSize.title};
    font-weight: 700;
    line-height: 1.25;

    @media ${(props) => props.theme.device.tablet} {
      font-size: ${(props) => props.theme.desktopFontSize.title};
    }
  }

  @media ${(props) => props.theme.device.tablet} {
    font-size: ${(props) => props.theme.desktopFontSize.title};
    margin-bottom: 24px;
  }
`;

const Body = styled.p`
  color: ${(props) => props.theme.colors.white100};
  font-family: "Inter", sans-serif;
  font-size: ${(props) => props.theme.mobileFontSize.body};
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: 40px;

  @media ${(props) => props.theme.device.tablet} {
    font-size: ${(props) => props.theme.desktopFontSize.body};
  }

  @media ${(props) => props.theme.device.laptop} {
    margin-bottom: 76px;
  }
`;

const Label = styled.h2`
  color: ${(props) => props.theme.colors.white50};
  font-family: "Inter", sans-serif;
  font-size: ${(props) => props.theme.mobileFontSize.label};
  font-weight: 700;
  line-height: 1;
  margin-bottom: 14px;

  @media ${(props) => props.theme.device.tablet} {
    font-size: ${(props) => props.theme.desktopFontSize.label};
    margin-bottom: 12px;
  }
`;

const Description = styled.h5`
  color: ${(props) => props.theme.colors.white200};
  font-family: "Lexend Deca", sans-serif;
  font-size: ${(props) => props.theme.mobileFontSize.description};
  font-weight: 400;
  line-height: 1;
  letter-spacing: 1px;

  @media ${(props) => props.theme.device.tablet} {
    font-size: ${(props) => props.theme.desktopFontSize.description};
  }
`;
