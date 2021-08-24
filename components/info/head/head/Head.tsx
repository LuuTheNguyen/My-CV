import {
    StyledAboutHead, StyledWrapperImage, StyledIcon, StyledWrapperHead,
    StyledName, StyledDescription, StyledAboutBody,    
    StyledDownloadCV, StyledAboutFooter,
} from './styles'

import { BackGroundColor, FontColor, GridBreakpoints } from 'style/Theme'
import {About, AboutProps} from '../about/About'
import {Language, LanguageProps} from '../language/Language'
import {Skill, SkillProps} from '../skill/Skill'
import {Lib, LibProps} from '../lib/Lib'
import {Contact, ContactProps} from '../contact/Contact'

export interface DataHeadProps {    
    languages: LanguageProps[],
    contacts: ContactProps[],
    libs: LibProps[],
    abouts: AboutProps[],
    skills: SkillProps[],
}
export interface HeadProps {
    data: DataHeadProps
}

export const Head: React.FC<HeadProps> = ({data}) => {    
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
                                    <About abouts={data.abouts} />
                                    <hr />
                                    <Language languages={data.languages}/>
                                    <hr />
                                    <Skill skills={data.skills}/>
                                    <hr />
                                    <Lib libs={data.libs} />
                                    {/* <hr/> */}
                                    {/* <StyledDownloadCV>
                    <span>Download CV</span>&nbsp;<i className="bi bi-triangle-fill"></i>
                  </StyledDownloadCV> */}
                                </StyledAboutBody>
                                <StyledAboutFooter>
                                    <Contact contacts={data.contacts}/>
                                </StyledAboutFooter>
                            </StyledWrapperHead>

    )
}