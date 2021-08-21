import { Fragment } from "react"
import { 
 StyledLanguage, StlyedProcessRing, StyledWrapperProcessRing, StlyedTitleProcessRing
} from "./styles"
import { BackGroundColor, FontColor, GridBreakpoints } from '@components/style'

interface Language {
    label: string,
    percent: number,
}

export interface Prop {
    array: Array<Language>
}

export const Language:React.FC<Prop> = ({array}) => {
    return (
        <StyledLanguage>
            {array.map(
                (item, index) => (
                    <Fragment key={index}>                        
                        <StyledWrapperProcessRing>
                            <StlyedProcessRing width={40} stroke={FontColor.secondary} strokeWidth={2} percent={item.percent} />
                            <StlyedTitleProcessRing>{item.label}</StlyedTitleProcessRing>
                        </StyledWrapperProcessRing>
                    </Fragment>
                )
            )}
        </StyledLanguage>
    )
}