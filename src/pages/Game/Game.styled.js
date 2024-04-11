import styled from "styled-components";

export const GameBoardStyle = styled.div`
    /* background-color: red; */
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin: 20px;
    ${(props) => props.theme.media.mobile} {
        gap: 0.5rem;
        margin: 0;
    }
`