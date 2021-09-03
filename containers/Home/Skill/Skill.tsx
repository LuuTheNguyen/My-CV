import { StyledSkill, StyledProcessBar } from './styles'

import { SkillProps, Prop } from './interface'

export const Skill: React.FC<Prop> = ({ skills }) => {
    return (
        <StyledSkill>
            {skills.map((item, index) => (
                <StyledProcessBar
                    label={item.label}
                    percent={item.percent}
                    height={5}
                    key={index}
                />
            ))}
        </StyledSkill>
    )
}
