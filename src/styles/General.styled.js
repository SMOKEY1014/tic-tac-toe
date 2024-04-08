import styled from "styled-components";

export const Title = styled.h1`
    color: ${(props) => props.theme.color.text};
    font-size: 3em;
    font-family: 'Pacifico', cursive;
    background-color: transparent;
`

export const SubTitle = styled.h2`
    font-size: 24px;
    font-weight: 200;
    color: ${(props) => props.theme.color.text};
    background-color: transparent;
`