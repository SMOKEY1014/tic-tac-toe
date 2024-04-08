import styled from "styled-components";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";


export const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    height: 10vh;
    padding: 1rem;

    .logo {
        height: 4rem;
        fill: ${(props) => props.theme.color.text}
    }

`;

export const LightModeIcon = styled(MdOutlineLightMode)`
    color:  ${(props) => props.theme.color.text};
    cursor: pointer;
    font-size: 3rem;
`

export const DarkModeIcon = styled(MdOutlineDarkMode)`
    color:  ${(props) => props.theme.color.text};
    cursor: pointer;
    font-size: 3rem;
`