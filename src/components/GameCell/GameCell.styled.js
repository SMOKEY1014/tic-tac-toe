import styled from "styled-components";

export const CellStyle = styled.button`
    background-color: ${(props) => props.iswinningcell ? (props.isgamedrawn ? (props.theme.color.yellow) : (props.theme.color.green)) : (props.theme.color.secondary)};
    color: ${(props) => props.theme.color.primary};
    font-size: 3rem;
    border: none;
    border-radius: 2.5rem;
    height: 10rem;
    width: 10rem;
    box-shadow: 5px 10px ${(props) => props.theme.color.gray};
    /* box-shadow: 5px 10px grey; */
    cursor: pointer;
    padding: 3rem;
    ${(props) => props.theme.media.mobile} {
        /* font-size: 1rem; */
        height: 6rem;
        width: 6rem;
        position: relative;
        .markedItem {
        path {
            color: ${(props) => props.theme.color.secondary};
        }
        position: absolute;
        color: aqua;
        width: 4rem;
        height: 4rem;
        top: 15%;
        right: 15%;
    }
    }
    .markedItem {
        path {
            fill: ${(props) => props.theme.color.primary};
        }
    }
    .outlineIcon {
        path {
            stroke: ${(props) => props.theme.color.primary};
            stroke-width: 0;
        }
    }
    &:hover {
        .outlineIcon {
        path {
            stroke-width: 2;
        }
    }
    }
`