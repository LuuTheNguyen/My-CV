import {
    StyledAboutHead, StyledWrapperImage, StyledIcon, StyledWrapperHead,
    StyledName, StyledDescription, StyledAboutBody,
    StyledDownloadCV, StyledAboutFooter, StyledNavBar,
} from './styles'

import { BackGroundColor, FontColor, GridBreakpoints } from 'style/Theme'
import { About, AboutProps } from '@components/Info/Head/About/About'
import { Language, LanguageProps } from '@components/Info/Head/Language/Language'
import { Skill, SkillProps } from '@components/Info/Head/Skill/Skill'
import { Lib, LibProps } from '@components/Info/Head/Lib/Lib'
import { Contact, ContactProps } from '@components/Info/Head/Contact/Contact'

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


const View: React.FC<HeadProps> = ({data}) => (
    <>
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
            <Language languages={data.languages} />
            <hr />
            <Skill skills={data.skills} />
            <hr />
            <Lib libs={data.libs} />
            {/* <hr/> */}
            {/* <StyledDownloadCV>
            <span>Download CV</span>&nbsp;<i className="bi bi-triangle-fill"></i>
            </StyledDownloadCV> */}
        </StyledAboutBody>
        <StyledAboutFooter>
            <Contact contacts={data.contacts} />
        </StyledAboutFooter>
    </>
)

export const Head: React.FC<HeadProps> = ({ data }) => {
    return (
        <>
            <StyledNavBar className="col-12">
                <button className="btn text-reset" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
                    <span className="material-icons">
                        more_vert
                    </span>
                </button>

                <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasTop" aria-labelledby="offcanvasTopLabel">                    
                        <button type="button" className="btn text-reset" data-bs-dismiss="offcanvas" aria-label="Close">
                            <span className="material-icons">
                                more_vert
                            </span>
                        </button>
                        <View data={data}/>                
                </div>
            </StyledNavBar>
            <StyledWrapperHead className="col-sm-12 col-lg-3">
                <View data={data}/>
            </StyledWrapperHead>
        </>
    )
}