import styled from "styled-components"
import { BackGroundColor, FontColor, GridBreakpoints } from 'style/Theme'
import {ListLib} from '../styles/ListLib'

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

export const StyledListLib = styled(ListLib) `
  margin-bottom: 5px;
  display: flex;
  & .material-icons{
    color: ${props => props.color || FontColor.secondary};
    margin-right: 8px;
  }

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