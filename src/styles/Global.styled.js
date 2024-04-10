import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-weight: 200;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    ${(props) => props.theme.media.mobile} {
        font-size: 1rem;
    }

}
body {
    background-color: ${props => props.theme.color.primary};
}



`