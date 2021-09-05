export interface LanguageProps {
    label: string
    percent: number
}

export interface Props {
    language: LanguageProps[]
}

export interface ProcessRingProp {
    width: number
    strokeWidth: number
    percent?: number
    className?: string
    stroke: string
    strokeBackground: string
}
