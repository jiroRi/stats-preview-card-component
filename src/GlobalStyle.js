import { createGlobalStyle } from "styled-components";
import "sanitize.css";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 62.5%;
    }

    body {
        width: 100vw;
        height: 100vh;
        max-width: 100vw;
        max-height: 100vh;
        background-color: ${(props) => props.theme.colors.blue900};
    }
`;

export default GlobalStyle;
