import { StyledInfo, StyledWrapperInfo } from './styles'

import { BackGroundColor, FontColor, GridBreakpoints } from 'style/Theme'
import {Head, DataHeadProps} from '@components/Info/Head/Head/Head'
import {Content, DataContentProps} from '@components/Info/Content/Content/Content'
import {AchieveProps} from '@components/Info/Content/Achieve/Achieve'
import {ServiceProps} from '@components/Info/Content/Service/Service'
import {AboutProps} from '@components/Info/Head/About/About'
import {LanguageProps} from '@components/Info/Head/Language/Language'
import {SkillProps} from '@components/Info/Head/Skill/Skill'
import {LibProps} from '@components/Info/Head/Lib/Lib'
import {ContactProps} from '@components/Info/Head/Contact/Contact'

export interface InfoProps {
    achieves: AchieveProps[],
    services: ServiceProps[], 
    languages: LanguageProps[],
    contacts: ContactProps[],
    libs: LibProps[],
    abouts: AboutProps[],
    skills: SkillProps[],
}

export const Info: React.FC<InfoProps> = ({achieves, services, languages, contacts, libs, abouts, skills}) => {
    const contentData = {
        achieves: achieves,
        services: services,
    }
    const headData = {
        languages: languages,
        contacts: contacts,
        libs: libs,
        abouts: abouts,
        skills: skills
    }
    return(
        <StyledInfo 
            // className="col-11"
            className="col-12"
        >
            <StyledWrapperInfo className="row">
                <Head data={headData} />
                <Content data={contentData}/>                        
            </StyledWrapperInfo>
        </StyledInfo>
                    
    )
}