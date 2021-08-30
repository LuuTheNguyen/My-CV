import type { AchievementProps } from '@containers/Home/Achievement/interface'
import type { ServiceProps } from '@containers/Home/Service/interface'
import type { AboutProps } from '@containers/Home/About/interface'
import type { LanguageProps } from '@containers/Home/Language/interface'
import type { SkillProps } from '@containers/Home/Skill/interface'
import type { LibProps } from '@containers/Home/Lib/interface'
import type { ContactProps } from '@containers/Home/Contact/interface'

export interface DataHeadProps {
    languages: LanguageProps[]
    contacts: ContactProps[]
    libs: LibProps[]
    abouts: AboutProps[]
    skills: SkillProps[]
}
export interface HeadProps {
    data: DataHeadProps
}

export interface DataContentProps {
    achieves: AchievementProps[]
    services: ServiceProps[]
}
export interface ContentProps {
    data: DataContentProps
}
