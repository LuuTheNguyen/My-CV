import { ThemeEnum } from '@enum'

export interface LanguageProps {
    label: string
    percent: number
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
