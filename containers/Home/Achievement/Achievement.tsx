import { StyledContainerAchievement, StyledAchievement } from './styles'

import { AchievementProps, Prop } from './interface'

export const Achievement: React.FC<Prop> = ({ achieves }) => {
    return (
        <StyledContainerAchievement>
            {achieves.map((item, index) => (
                <StyledAchievement key={index}>
                    <span>{item.label}</span>
                    <span>{item.content}</span>
                </StyledAchievement>
            ))}
        </StyledContainerAchievement>
    )
}
