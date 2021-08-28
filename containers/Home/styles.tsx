import { BackGroundColor, FontColor, GridBreakpoints } from 'style/Theme'
import styled from 'styled-components'

export const StyledMain = styled.main`
height: auto;
width: 100%;
background-color: ${BackGroundColor.default};
color: ${FontColor.default};
margin: 0;
padding: 10px;
align-items: center;
justify-content: center;

@media(max-width: ${GridBreakpoints.lg}){
  flex-direction: row;
  display: flex;
}
`

export const StyledContainer = styled.div`  
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${BackGroundColor.default};
`