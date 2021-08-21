import {
    StyledAboutHead, StyledWrapperImage, StyledIcon, StyledWrapperHead,
    StyledName, StyledDescription, StyledAboutBody, StyledContact,    
    StyledDownloadCV, StyledAboutFooter,
} from './styles'

import { BackGroundColor, FontColor, GridBreakpoints } from '@components/style'
import {About} from './about/About'
import {Language} from './language/Language'
import {Skill} from './skill/Skill'
import {Lib} from './lib/Lib'

export const Head: React.FC = () => {
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
                                    <About array={[{label: 'Residence', content:'Viet Nam'}, {label:'City', content:'Ho Chi Minh'}, {label:'Age', content:'27'}]} />
                                    <hr />
                                    <Language array={[{label: 'Viet Nam', percent:100}, {label:'City', percent:50}]}/>
                                    <hr />
                                    <Skill array={[{label: 'HTML', percent:80}, {label:'CSS', percent:70}, {label:'JS', percent:70}, {label:'TS', percent:60}]}/>
                                    <hr />
                                    <Lib array={[{label: 'Boostrap'}, {label:'SCSS'}, {label:'Webpack'}, {label:'Git knowledge'}, {label:'Nextjs'}, {label:'Reactjs/ React Native'}]} />
                                    {/* <hr/> */}
                                    {/* <StyledDownloadCV>
                    <span>Download CV</span>&nbsp;<i className="bi bi-triangle-fill"></i>
                  </StyledDownloadCV> */}
                                </StyledAboutBody>
                                <StyledAboutFooter>
                                    <StyledContact>
                                        <span>Phone:</span>
                                        <span>(+84)829549118</span>
                                    </StyledContact>
                                    <StyledContact>
                                        <span>Skype:</span>
                                        <span>nguyenluu121094</span>
                                    </StyledContact>
                                </StyledAboutFooter>
                            </StyledWrapperHead>

    )
}