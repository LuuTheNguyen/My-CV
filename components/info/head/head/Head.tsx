import {
    StyledAboutHead, StyledWrapperImage, StyledIcon, StyledWrapperHead,
    StyledName, StyledDescription, StyledAboutBody,    
    StyledDownloadCV, StyledAboutFooter,
} from './styles'

import { BackGroundColor, FontColor, GridBreakpoints } from 'style/Theme'
import {About, AboutProps} from '@components/Info/Head/About/About'
import {Language, LanguageProps} from '@components/Info/Head/Language/Language'
import {Skill, SkillProps} from '@components/Info/Head/Skill/Skill'
import {Lib, LibProps} from '@components/Info/Head/Lib/Lib'
import {Contact, ContactProps} from '@components/Info/Head/Contact/Contact'

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