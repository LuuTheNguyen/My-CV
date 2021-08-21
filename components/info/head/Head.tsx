import {
    StyledAboutHead, StyledWrapperImage, StyledIcon, StyledWrapperHead,
    StyledName, StyledDescription, StyledAboutBody,    
    StyledDownloadCV, StyledAboutFooter,
} from './styles'

import { BackGroundColor, FontColor, GridBreakpoints } from '@components/style'
import {About} from './about/About'
import {Language} from './language/Language'
import {Skill} from './skill/Skill'
import {Lib} from './lib/Lib'
import {Contact} from './contact/Contact'

export const Head: React.FC = () => {
    const languageData = [{label: 'Viet Nam', percent:100}, {label:'City', percent:50}]
    const contactData = [{label: 'Phone', content:'(+84)829549118'}, {label:'Skype', content:'nguyenluu121094'}]
    const libData = [{label: 'Boostrap'}, {label:'SCSS'}, {label:'Webpack'}, {label:'Git knowledge'}, {label:'Nextjs'}, {label:'Reactjs/ React Native'}]
    const aboutData = [{label: 'Residence', content:'Viet Nam'}, {label:'City', content:'Ho Chi Minh'}, {label:'Age', content:'27'}]
    const skillData = [{label: 'HTML', percent:80}, {label:'CSS', percent:70}, {label:'JS', percent:70}, {label:'TS', percent:60}]
    return(
        <StyledWrapperHead className="col-sm-3">
                                <StyledAboutHead>
                                    <StyledWrapperImage>
                                        <StyledIcon src="/logo.jpg" layout="fill" objectFit="cover" />
                                    </StyledWrapperImage>
                                    <StyledName>Nguyen Luu</StyledName>
                                    <StyledDescription>Frontend Dev</StyledDescription>
                                </StyledAboutHead>
                                <StyledAboutBody>
                                    <About array={aboutData} />
                                    <hr />
                                    <Language array={languageData}/>
                                    <hr />
                                    <Skill array={skillData}/>
                                    <hr />
                                    <Lib array={libData} />
                                    {/* <hr/> */}
                                    {/* <StyledDownloadCV>
                    <span>Download CV</span>&nbsp;<i className="bi bi-triangle-fill"></i>
                  </StyledDownloadCV> */}
                                </StyledAboutBody>
                                <StyledAboutFooter>
                                    <Contact array={contactData}/>
                                </StyledAboutFooter>
                            </StyledWrapperHead>

    )
}