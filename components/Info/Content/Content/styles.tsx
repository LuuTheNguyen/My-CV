import styled from "styled-components"
import { BackGroundColor, FontColor, GridBreakpoints } from 'style/Theme'
import Image from 'next/image'


export const StyledWrapperContent = styled.div`
  padding: 30px 20px;
  @media(min-width: ${GridBreakpoints.sm}) and (max-width: ${GridBreakpoints.lg}){
    width: auto;
  }
`


export const StyleBanner = styled.div`
    display: flex;
  @include media-breakpoint-down(lg){
    flex-direction: column-reverse;
  }
`

export const StyledBannerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const StyledTitleContent = styled.div`
  color: ${FontColor.default};
  font-size: 24px;
  text-transform: uppercase;
  font-weight: 600;  
`

export const StyledSubTitleContent = styled.div`
  color: ${FontColor.default};
  .code {
    color: ${FontColor.secondary};
  }
  button{
    background-color: ${BackGroundColor.third}
  }

  
  a {
    text-decoration: none;
    color: inherit;
    font-weight: 600;   
  }
`

export const StyledContainerService = styled.div`
 display: flex;
 flex-direction: column;
`

export const StyledWrapperMain = styled.div`  
  @media(max-width: ${GridBreakpoints.lg}){
    flex-direction: row;
    display: flex;
  }
`

export const StyledContainerEducation = styled.div`
 display: flex;
 flex-direction: column;
`

export const StyledEducationItem = styled.span`
 font-size: 16px;
 color: ${FontColor.default};
`

export const StyledEducations = styled.div`
 display: flex;
 flex-direction: row;
 margin-bottom: 30px;
 ${StyledEducationItem} + ${StyledEducationItem} {
   margin-left: 20px;
 }
`