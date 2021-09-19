import { StyledContainerAchievement, StyledAchievement } from './styles'
import type { Props } from './interface'
import { ultiCountDown } from './ulti'

export const Achievement: React.FC<Props> = ({ achieve }) => {
    return (
        <StyledContainerAchievement>
            {achieve.map((item, index) => {
                let countValue = ultiCountDown(item.counts)
                return (
                    <StyledAchievement key={index}>
                        <span>
                            {countValue}
                            {item.label}
                        </span>
                        <span>{item.content}</span>
                    </StyledAchievement>
                )
            })}
        </StyledContainerAchievement>
    )
}
