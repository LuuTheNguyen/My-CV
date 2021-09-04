import { StyledContainerAchievement, StyledAchievement } from './styles'

import type { Props } from '.'

export const Achievement: React.FC<Props> = ({ achieve }) => {
    return (
        <StyledContainerAchievement>
            {achieve.map((item, index) => (
                <StyledAchievement key={index}>
                    <span>{item.label}</span>
                    <span>{item.content}</span>
                </StyledAchievement>
            ))}
        </StyledContainerAchievement>
    )
}
