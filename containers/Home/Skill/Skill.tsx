import { StyledSkill, StyledProcessBar } from './styles'

import type { SkillProps, Props } from './interface'

export const Skill: React.FC<Props> = ({ skill }) => {
    return (
        <StyledSkill>
            {skill.map((item, index) => (
                <StyledProcessBar label={item.label} percent={item.percent} height={5} key={index} />
            ))}
        </StyledSkill>
    )
}
