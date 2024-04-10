import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: ${(props) => props.columnBased ? "column" : "row"};
    height: 80vh;
    width: 100vw;
    background-color: ${(props) => props.theme.color.primary};
    padding: 0 1.5rem;
    text-align: center;
    `