import { Fragment } from "react"
import { 
    StyledLib, StyledListLib
} from "./styles"
import { BackGroundColor, FontColor, GridBreakpoints } from '@components/style'

export interface LibProps {
    label: string,
}

interface Props {
    array: Array<LibProps>
}

export const Lib:React.FC<Props> = ({array}) => {
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