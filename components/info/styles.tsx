import { BackGroundColor, FontColor, GridBreakpoints } from 'style/Theme'
import styled from 'styled-components'


const StyledInfo = styled.div`  
display: flex;
flex-direction: row;

@media(max-width: ${GridBreakpoints.lg}) {
  flex-direction: column;
}
`


const StyledWrapperInfo = styled.div`
display: flex;
flex-direction: row;

@media(max-width: ${GridBreakpoints.lg}){
  flex-direction: column
}
`

export {  StyledInfo, StyledWrapperInfo
}