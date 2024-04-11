import styled from "styled-components";

export const Title = styled.h1`
    color: ${(props) => props.primary ? props.theme.color.primary : props.theme.color.text};
    font-size: 3rem;
    font-family: 'Pacifico', cursive;
    background-color: transparent;
`

export const SubTitle = styled.h2`
    font-size: 24px;
    font-weight: 300;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: ${(props) => props.primary ? props.theme.color.primary : props.theme.color.text};
    background-color: transparent;
`