import { BackGroundColor, FontColor, GridBreakpoints } from '@components/style'
import styled from 'styled-components'

export const StyledMain = styled.main`
height: auto;
width: 100%;
background-color: ${BackGroundColor.default};
color: ${FontColor.default};
padding: 10px;
max-width: 1990px;

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