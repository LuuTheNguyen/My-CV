import type { AchievementProps } from '@containers/Home/Achievement'
import type { ServiceProps } from '@containers/Home/Service'
import type { AboutProps } from '@containers/Home/About'
import type { LanguageProps } from '@containers/Home/Language'
import type { SkillProps } from '@containers/Home/Skill'
import type { LibProps } from '@containers/Home/Lib'
import type { ContactProps } from '@containers/Home/Contact'

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
