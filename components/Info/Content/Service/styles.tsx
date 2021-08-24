import styled from "styled-components"
import { BackGroundColor, FontColor, GridBreakpoints } from 'style/Theme'

export const StyledWrapperService = styled.div`  
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;

  @media(max-width: ${GridBreakpoints.lg}){
    justify-content: center;
  }
`

export const StyledService = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${BackGroundColor.primary};
  width: 300px;
  min-height: 250px;
  margin-bottom: 20px;
  margin-right: 20px;

  @media(max-width: ${GridBreakpoints.lg}){
    width: 100%;
    max-width: 400px;
  }
  
`

export const StyledHeaderService = styled.span`
  color: ${FontColor.default};
  text-transform: capitalize;
  display: flex;
  flex-direction: column;
`

export const StyledHeaderTitleService = styled.span`
  font-weight: 600;
`

export const StyledHeaderSubTitleService = styled.span`
  font-weight: normal;
`

export const StyledContentService = styled.div`
  color: ${FontColor.primary};
  font-size: 14px;
  span {
    text-transform: capitalize;
    font-style: italic;
    font-weight: 600;
  }
  span + span {
    text-transform: none;
    font-weight: normal;
    font-style: normal;
  }
`

export const StyledFooterService = styled.div`
  color: ${FontColor.secondary};  
  font-weight: 600px;
  text-transform: uppercase;
  & button {
    border: none;
    padding: 0;
  }
`