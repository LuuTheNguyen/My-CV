import { Fragment } from "react"
import { 
    StyledSkill, StyledProcessBar
} from "./styles"
import { BackGroundColor, FontColor, GridBreakpoints } from '@components/style'

export interface SkillProps {
    label: string,
    percent: number,
}

interface Props {
    array: Array<SkillProps>
}

export const Skill:React.FC<Props> = ({array}) => {
    return (
        <StyledSkill>
            {array.map(
                (item, index) => (                                                                                            
                        <StyledProcessBar label={item.label} percent={item.percent} height={5} key={index} />
                )
            )}
        </StyledSkill>
    )
}