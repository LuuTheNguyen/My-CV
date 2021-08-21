import styled from "styled-components"
import { BackGroundColor, FontColor, GridBreakpoints } from '@components/style'

export const StyledSkill = styled.div`
  @media(min-width: ${GridBreakpoints.sm}) and (max-width: ${GridBreakpoints.lg}){
    width: 50%;
    padding: 10px;
  }
`

interface PropsProcessBar {
  percent: number;
  label: string;
  className?: string;
  height: number;
}

export const ProcessBar = (props:PropsProcessBar) => {
  return (
    <div className={props.className}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>{props.label}</span>
        <span>{props.percent}</span>
      </div>
      <div className="progress">      
        <div className="progress-bar" role="progressbar" style={{width: `${props.percent}%`}} aria-valuenow={props.percent} aria-valuemin={0} aria-valuemax={100}></div>
      </div>
    </div>
  )
}

export const StyledProcessBar = styled(ProcessBar)`  
  margin-bottom: 10px;
  .progress {
    height:${props =>  `${props.height}px`}
  }
  .progress-bar {
    background-color: ${BackGroundColor.third}
  }
`