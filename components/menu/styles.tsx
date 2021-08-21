import styled from "styled-components";
import { BackGroundColor, FontColor, GridBreakpoints } from '@components/style'

import Link from 'next/link'

const StyledMenuList = styled.div`
  display: flex;
  justify-content: flex-end;

  @media(max-width: ${GridBreakpoints.lg}){
    padding: 0;
    /* min-width: 50px; */
  }
`


const StyledLink = (props: any) =>{
    return (
      <div className={props.className}>
        <Link href={props.href}><a>{props.text}</a></Link>
      </div>
    )
  }

const StyledMenuItem = styled(StyledLink)`
transform: rotate(90deg);  
margin-top: 30px;
a {
  color: ${FontColor.default};
  text-decoration: none;
}
`



const StyledWrapperMenuList = styled.div`
  position: relative;
  background-color: ${BackGroundColor.secondary};
  width: 100%;
  height: 100%;
`

const StyledContainerMenuList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: fit-content;
  height: 600px;
  position: fixed;
`


const StyledHeaderMenu = styled.div`
  min-width: 50px;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${BackGroundColor.primary};
  i {
    cursor: pointer;
  }
`

export { StyledMenuList, StyledWrapperMenuList, StyledHeaderMenu,
    StyledContainerMenuList, StyledMenuItem }