
import styled from "styled-components"
import Image from 'next/image'
import Link from 'next/link'

const FontColor = {
  default: '#fff',
  primary: '#adaea9',
  secondary: '#f5c147',
}

const BackGroundColor = {
  default: '#212529',
  primary: '#252531',
  secondary: '#20202a',  
  third: '#f5c147',
}

const GridBreakpoints = {
  xs: 0,
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px',
}

const StyledContainer = styled.div`  
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${BackGroundColor.default}
`

const StyledMain = styled.main`
  height: auto;
  width: 100%;
  background-color: ${BackGroundColor.default};
  color: ${FontColor.default};
  padding: 10px;
  > .container {
    max-width: 1990px;
  }
`

const StyledAboutHead = styled.div`
  background-color: ${BackGroundColor.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  flex-direction: column;
`

const StyledWrapperImage = styled.div`
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

const StyledIcon = styled(Image)`
  border-radius: 40px;
  img{
    width: 100px;
    height: 100px;
  }
  position: relative;
`

const StyledLink = (props: any) =>{
  return (
    <div className={props.className}>
      <Link href={props.href}><a>{props.text}</a></Link>
    </div>
  )
}

const StyledMenuList = styled.div`
  display: flex;
  justify-content: flex-end;

  @media(max-width: ${GridBreakpoints.lg}){
    padding: 0;
    /* min-width: 50px; */
  }
`

const StyledMenuItem = styled(StyledLink)`
transform: rotate(90deg);  
margin-top: 30px;
a {
  color: ${FontColor.default};
  text-decoration: none;
}
`

const StyledName = styled.span`
  font-size: 14px;
  color: ${FontColor.default};
  font-weight: 600;
`

const StyledDescription = styled.span`
  font-size: 12px;
  color: ${FontColor.primary};
`

const StyledAboutBody = styled.div`
  background-color: ${BackGroundColor.secondary};
  padding: 20px 20px 40px 20px;

  @media(min-width: ${GridBreakpoints.sm}) and (max-width: ${GridBreakpoints.lg}){
    display: flex;
    flex-wrap: wrap;
  }
`

const StyledAbout = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  
  @media(min-width: ${GridBreakpoints.sm}) and (max-width: ${GridBreakpoints.lg}){
    width: 50%;
    padding: 10px;
  }

  & span{
    color: ${FontColor.default};
    width: 40%;
  }

  & span + span{
    color: ${FontColor.primary};
    width: 60%;
    text-align: right;
  }
`

const StyledLanguage = styled.div`
  justify-content: space-between;
  color: ${FontColor.default};
  display: flex;

  @media(min-width: ${GridBreakpoints.sm}) and (max-width: ${GridBreakpoints.lg}){
    width: 50%;
    padding: 10px;
  }
`

interface PropsProcessRing {
  width: number;
  strokeWidth: number;
  percent?: number;
  className?: string;
  stroke: string;
}

const ProcessRing = (props:PropsProcessRing) => {
  
  /* https://codepen.io/jeremenichelli/pen/vegymB */
  const radius:number = (props.width/2) - (props.strokeWidth*2);
  const circumference:number = radius * 2 * Math.PI;
  const percent:number = (props.percent && props.percent > 0 && props.percent < 101) ? props.percent : 100
  const offset:number = circumference - percent / 100 * circumference;
  return ( 
  <svg
    className={props.className}
    width={props.width}
    height={props.width}>
    <text x={props.width/2} y={props.width/2 + props.width/10} fontSize={props.width/4} fill={`${FontColor.default}`}>{props.percent ? props.percent : 100}%</text>
    <circle
      stroke= {props.stroke}
      strokeWidth= {props.strokeWidth}
      fill= "transparent"
      r= {radius}
      cx= {props.width/2}
      cy= {props.width/2}
      strokeDasharray= {`${circumference} ${circumference}`}
      strokeDashoffset= {`${offset}`}
    />
  </svg>
)}

const StlyedProcessRing = styled(ProcessRing)`
  text {
    text-anchor:middle;
  }
  circle {
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
  }
`

const StyledWrapperProcessRing = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StlyedTitleProcessRing = styled.div`
  color: ${FontColor.default};
  margin: auto auto;
  font-size: 10px;
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

const StyledSkill = styled.div`
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

const ProcessBar = (props:PropsProcessBar) => {
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

const StyledProcessBar = styled(ProcessBar)`  
  .progress {
    height:${props =>  `${props.height}px`}
  }
  .progress-bar {
    background-color: ${BackGroundColor.third}
  }
`

const StyledLib = styled.div`
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

const ListLib = (props:PropsListLib) => {
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

const StyledListLib = styled(ListLib) `
  margin-bottom: 5px;

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

const StyledDownloadCV = styled.div`
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

const StyledAboutFooter = styled.div`
  background-color: ${BackGroundColor.primary};
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
  flex-wrap: wrap;
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

const StyledWrapperContent = styled.div`
  padding: 30px 20px;
  @media(min-width: ${GridBreakpoints.sm}) and (max-width: ${GridBreakpoints.lg}){
    width: auto;
  }
`

const StyledWrapperHead = styled.div`
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

const StyledInfo = styled.div`  
  display: flex;
  flex-direction: row;

  @media(max-width: ${GridBreakpoints.lg}) {
    flex-direction: column;
  }
`

const StyledWrapperMain = styled.div`  
  @media(max-width: ${GridBreakpoints.lg}){
    flex-direction: row;
    display: flex;
  }
`

const StyledWrapperInfo = styled.div`
  display: flex;
  flex-direction: row;
  
  @media(max-width: ${GridBreakpoints.lg}){
    flex-direction: column
  }
`

const StyledContact = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  
  span{
    font-weight: 600;
  }
  span + span{
    margin-left: 10px;
    font-weight: normal;
  }
`

export { StyledContainer, StyledMain, StyledAboutHead, StyledWrapperImage, StyledIcon,  
    StyledMenuList, StyledName, StyledDescription, StyledAboutBody, StyledAbout,
    StyledLanguage, StlyedProcessRing, FontColor, StyledWrapperProcessRing,
    StlyedTitleProcessRing, StyledWrapperMenuList, StyledSkill, StyledProcessBar,
    StyledLib, StyledListLib, StyledDownloadCV, StyledAboutFooter, StyledHeaderMenu,
    StyledWrapperContent, StyledWrapperHead, StyleBanner, StyledBannerContent,
    StyledTitleContent, StyledSubTitleContent, StyledContainerAchievement,
    StyledAchievement, StyledContainerService, StyledWrapperService, StyledService,
    StyledHeaderService, StyledContentService, StyledFooterService, StyledContainerMenuList,
    StyledHeaderSubTitleService, StyledHeaderTitleService, StyledMenuItem, StyledInfo,
    StyledWrapperMain, StyledWrapperInfo, StyledContact
}