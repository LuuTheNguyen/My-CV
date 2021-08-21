import { Fragment } from "react"
import { 
    StyledLib, StyledListLib
} from "./styles"
import { BackGroundColor, FontColor, GridBreakpoints } from '@components/style'

interface Lib {
    label: string,
}

export interface Prop {
    array: Array<Lib>
}

export const Lib:React.FC<Prop> = ({array}) => {
    return (
        <StyledLib>
            {array.map(
                (item, index) => (                                                                                            
                    <StyledListLib text={item.label} key={index} />
                )
            )}
        </StyledLib>
    )
}