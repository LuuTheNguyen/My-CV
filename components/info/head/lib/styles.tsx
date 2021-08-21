import styled from "styled-components"
import { BackGroundColor, FontColor, GridBreakpoints } from '@components/style'

export const StyledLib = styled.div`
  @media(min-width: ${GridBreakpoints.sm}) and (max-width: ${GridBreakpoints.lg}){
      width: 50%;
      justify-content: flex-start;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      padding: 10px;
  }
`

interface PropsListLib {
  color?: string;
  text: string;
  className?: string;
}

export const ListLib = (props:PropsListLib) => {
  const color = props.color || FontColor.secondary
  return (
    <p className={props.className}>
    <span className="material-icons" style={{ color: color }}>
      done
    </span>
      <span>{props.text}</span>
    </p>
  )
}

export const StyledListLib = styled(ListLib) `
  margin-bottom: 5px;
  display: flex;

  @media(min-width: ${GridBreakpoints.sm}) and (max-width: ${GridBreakpoints.lg}){
      justify-content: flex-start;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin-right: 10px;
  }

  i{
    margin-right: 5px;
  }
`