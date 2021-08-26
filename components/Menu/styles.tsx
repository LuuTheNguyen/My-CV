import styled from "styled-components";
import { BackGroundColor, FontColor, GridBreakpoints } from 'style/Theme'
import { StyledLink } from './util'

export const StyledMenuList = styled.div`
  display: flex;
  justify-content: flex-end;

  @media(max-width: ${GridBreakpoints.lg}){
    padding: 0;
    /* min-width: 50px; */
  }
`

export const StyledMenuItem = styled(StyledLink)`
transform: rotate(90deg);  
margin-top: 30px;
a {
  color: ${FontColor.default};
  text-decoration: none;
}
`

export const StyledWrapperMenuList = styled.div`
  position: relative;
  background-color: ${BackGroundColor.secondary};
  width: 100%;
  height: 100%;
`

export const StyledContainerMenuList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: fit-content;
  height: 600px;
  position: fixed;
`


export const StyledHeaderMenu = styled.div`
  min-width: 50px;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${BackGroundColor.primary};
  i {
    cursor: pointer;
  }
`