import { StyledInfo, StyledWrapperInfo } from './styles'

import { BackGroundColor, FontColor, GridBreakpoints } from 'style/Theme'
import {Head, DataHeadProps} from './head/Head'
import {Content, DataContentProps} from './content/Content'
import {AchieveProps} from '@components/info/content/achieve/Achieve'
import {ServiceProps} from '@components/info/content/service/Service'
import {AboutProps} from '@components/info/head/about/About'
import {LanguageProps} from '@components/info/head/language/Language'
import {SkillProps} from '@components/info/head/skill/Skill'
import {LibProps} from '@components/info/head/lib/Lib'
import {ContactProps} from '@components/info/head/contact/Contact'

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
        <StyledInfo className="col-11">
                        <StyledWrapperInfo className="container">
                            <Head data={headData} />
                            <Content data={contentData}/>                        
                        </StyledWrapperInfo>

                    </StyledInfo>
                    
    )
}