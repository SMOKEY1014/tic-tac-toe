import styled from "styled-components";

export const PlayerWrapper = styled.div`
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items: center;
   margin: 6rem;
   ${(props) => props.theme.media.mobile} {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 1rem;
    }
   `

export const AvatarWrapper = styled.div`
div {
   display: flex;
   height: 10rem;
   width: 10rem;
   ${(props) => props.theme.media.mobile} {
      height: 7rem;
      display: flex;
      width: 7rem;
   }
}

`