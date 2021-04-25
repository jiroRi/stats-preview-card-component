import GlobalStyle from "./GlobalStyle";
import styled, { ThemeProvider } from "styled-components";
import { theme, Text, Main, Stat, Image, Attribution } from "./components";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Page>
        <Content>
          <Main>
            <Text variant="title">
              Get <strong>insights</strong> that help your business grow.
            </Text>
            <Text variant="body">
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </Text>
            <Stats>
              <Stat>
                <Text variant="label">10k+</Text>
                <Text variant="description">COMPANIES</Text>
              </Stat>
              <Stat>
                <Text variant="label">314</Text>
                <Text variant="description">TEMPLATES</Text>
              </Stat>
              <Stat>
                <Text variant="label">12M+</Text>
                <Text variant="description">QUERIES</Text>
              </Stat>
            </Stats>
          </Main>
          <Image />
        </Content>
      </Page>
      <Attribution />
    </ThemeProvider>
  );
};

const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  width: 100%;

  @media ${(props) => props.theme.device.tablet} {
    height: 100vh;
  }
`;

const Content = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.blue800};
  overflow: hidden;

  @media ${(props) => props.theme.device.tablet} {
    max-width: 560px;
  }

  @media ${(props) => props.theme.device.laptop} {
    flex-flow: row;
    max-width: 1110px;
  }
`;

const Stats = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  justify-content: center;

  @media ${(props) => props.theme.device.tablet} {
    flex-flow: row;
    justify-content: space-evenly;
  }

  @media ${(props) => props.theme.device.laptop} {
    flex-flow: row;
    justify-content: flex-start;
  }
`;

export default App;
