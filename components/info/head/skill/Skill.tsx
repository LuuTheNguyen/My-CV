import { Fragment } from "react"
import { 
    StyledSkill, StyledProcessBar
} from "./styles"
import { BackGroundColor, FontColor, GridBreakpoints } from '@components/style'

interface Skill {
    label: string,
    percent: number,
}

export interface Prop {
    array: Array<Skill>
}

export const Skill:React.FC<Prop> = ({array}) => {
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