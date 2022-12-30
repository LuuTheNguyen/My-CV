import { StyledContainerAchievement, StyledAchievement } from './styles'
import type { Props, AchievementProps } from './interface'
import { useCount } from '@hooks'
import { Fragment } from 'react'
import { TypoComponent } from '@components/Typo'

export const RenderAchievementItem: React.FC<AchievementProps> = (item) => {
    const countValue = useCount(item.counts)
    return (
        <StyledAchievement>
            <TypoComponent type='content2'>
                {countValue}
                {item.label}
            </TypoComponent> &nbsp;
            <TypoComponent type='content2'>{item.content}</TypoComponent>
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
