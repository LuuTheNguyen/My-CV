import { StyledContainerAchievement, StyledAchievement } from './styles'
import type { Props, AchievementProps } from './interface'
import { useCount } from '@hooks'
import { Fragment } from 'react'

export const RenderAchievementItem: React.FC<AchievementProps> = (item) => {
    const countValue = useCount(item.counts)
    return (
        <StyledAchievement>
            <span>
                {countValue}
                {item.label}
            </span>
            <span>{item.content}</span>
        </StyledAchievement>
    )
}

export const Achievement: React.FC<Props> = ({ achieve }) => {
    return (
        <StyledContainerAchievement>
            {achieve.map((item, index) => (
                <Fragment key={index}>
                    <RenderAchievementItem {...item} />
                </Fragment>
            ))}
        </StyledContainerAchievement>
    )
}
