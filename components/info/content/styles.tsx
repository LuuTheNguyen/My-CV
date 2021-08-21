import styled from "styled-components"
import { BackGroundColor, FontColor, GridBreakpoints } from '@components/style'
import Image from 'next/image'


const StyledWrapperContent = styled.div`
  padding: 30px 20px;
  @media(min-width: ${GridBreakpoints.sm}) and (max-width: ${GridBreakpoints.lg}){
    width: auto;
  }
`


const StyleBanner = styled.div`
    display: flex;
  @include media-breakpoint-down(lg){
    flex-direction: column-reverse;
  }
`

const StyledBannerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const StyledTitleContent = styled.div`
  color: ${FontColor.default};
  font-size: 24px;
  text-transform: uppercase;
  font-weight: 600;  
`

const StyledSubTitleContent = styled.div`
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

const StyledContainerAchievement = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const StyledAchievement = styled.div`
  width: fit-content;
  margin-right: 30px;
  padding: 20px 0;
  
  span{
    font-size: 20px;
    color: ${FontColor.secondary};    
    font-weight: 600;
  }

  span + span{
    font-size: 16px;
    color: ${FontColor.default}; 
    margin-left: 0.4rem;   
  }
  
  @media(max-width: ${GridBreakpoints.lg}){
    padding: 10px 0;
    margin-right: 10px;
  }
`

const StyledContainerService = styled.div`
 display: flex;
 flex-direction: column;
`

const StyledWrapperService = styled.div`  
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;

  @media(max-width: ${GridBreakpoints.lg}){
    justify-content: center;
  }
`

const StyledService = styled.div`
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

const StyledHeaderService = styled.span`
  color: ${FontColor.default};
  text-transform: capitalize;
  display: flex;
  flex-direction: column;
`

const StyledHeaderTitleService = styled.span`
  font-weight: 600;
`

const StyledHeaderSubTitleService = styled.span`
  font-weight: normal;
`

const StyledContentService = styled.div`
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

const StyledFooterService = styled.div`
  color: ${FontColor.secondary};  
  font-weight: 600px;
  text-transform: uppercase;
  & button {
    border: none;
    padding: 0;
  }
`

const StyledWrapperMain = styled.div`  
  @media(max-width: ${GridBreakpoints.lg}){
    flex-direction: row;
    display: flex;
  }
`

export {
  StyledWrapperContent, StyleBanner, StyledBannerContent,
  StyledTitleContent, StyledSubTitleContent, StyledContainerAchievement,
  StyledAchievement, StyledContainerService, StyledWrapperService, StyledService,
  StyledHeaderService, StyledContentService, StyledFooterService,
  StyledHeaderSubTitleService, StyledHeaderTitleService, StyledWrapperMain
}