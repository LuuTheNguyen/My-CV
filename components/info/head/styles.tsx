import styled from "styled-components"
import { BackGroundColor, FontColor, GridBreakpoints } from '@components/style'
import Image from 'next/image'

export const StyledWrapperHead = styled.div`
  @media(min-width: ${GridBreakpoints.sm}) and (max-width: ${GridBreakpoints.lg}){
    width: auto;
  }
`

export const StyledAboutHead = styled.div`
background-color: ${BackGroundColor.primary};
display: flex;
align-items: center;
justify-content: center;
padding: 20px;
flex-direction: column;
`

export const StyledWrapperImage = styled.div`
  width: 80px;
  height: 80px;
  position: relative;
/* & ::before{
  content:"";
  width: 10px;
  height: 10px;
  background-color: ${FontColor.secondary};
  border-radius: 5px;
  display: block;
  position: absolute;
  bottom: 10px;
  right: 10px;
  z-index: 1;
  box-shadow: 0 0 2px 2px ${FontColor.primary};
} */
`

export const StyledIcon = styled(Image)`
border-radius: 40px;
img{
  width: 100px;
  height: 100px;
}
position: relative;

`
export const StyledName = styled.span`
  font-size: 14px;
  color: ${FontColor.default};
  font-weight: 600;
`

export const StyledDescription = styled.span`
  font-size: 12px;
  color: ${FontColor.primary};
`

export const StyledAboutBody = styled.div`
  background-color: ${BackGroundColor.secondary};
  padding: 20px 20px 20px 20px;

  @media(min-width: ${GridBreakpoints.sm}) and (max-width: ${GridBreakpoints.lg}){
    display: flex;
    flex-wrap: wrap;
  }
`

export const StyledDownloadCV = styled.div`
  color: ${FontColor.primary};
  text-transform: uppercase;
  font-weight: 600;

  @media(min-width: ${GridBreakpoints.sm}) and (max-width: ${GridBreakpoints.lg}){
    padding: 10px;
  }

  i {
    font-size: 10px;
  }
`

export const StyledAboutFooter = styled.div`
  background-color: ${BackGroundColor.primary};
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
  flex-wrap: wrap;
`