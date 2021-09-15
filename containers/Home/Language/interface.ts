import { ThemeEnum } from '@enum'

interface Skill {
    label: string
    percent: number
}

export interface LanguageProps {
    name: string
    skills: Skill[]
}

export interface Props {
    language: LanguageProps[]
}

export interface ProcessRingProps {
    width: number
    strokeWidth: number
    percent?: number
    className?: string
    stroke: string
    strokeBackground: string
    fontColor: string
}
