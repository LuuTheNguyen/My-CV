export interface ProcessBarProps {
    percent: number
    label: string
    className?: string
    height: number
}

export interface SkillProps {
    label: string
    percent: number
}

export interface Prop {
    skills: SkillProps[]
}
