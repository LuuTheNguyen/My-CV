import styled from "styled-components"
import { BackGroundColor, FontColor, GridBreakpoints } from 'style/Theme'
import { ProcessBar } from './ulti'

export const StyledSkill = styled.div`
  @media(min-width: ${GridBreakpoints.sm}) and (max-width: ${GridBreakpoints.lg}){
    width: 50%;
    padding: 10px;
  }
`

export const StyledProcessBar = styled(ProcessBar)`  
  margin-bottom: 10px;
  .label{
    display: flex;
    justify-content: space-between;
  }
  .progress {
    height:${props =>  `${props.height}px`}
  }
  .progress-bar {
    background-color: ${BackGroundColor.third};
    width: ${props => `${props.percent}%`}
  }
`