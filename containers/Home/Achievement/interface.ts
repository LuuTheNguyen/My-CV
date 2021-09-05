export interface AchievementProps {
    label?: string
    content: string
    counts: number
}

export interface Props {
    achieve: AchievementProps[]
}
