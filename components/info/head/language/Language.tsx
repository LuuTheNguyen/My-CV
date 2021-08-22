import { Fragment } from "react"
import { 
 StyledLanguage, StlyedProcessRing, StyledWrapperProcessRing, StlyedTitleProcessRing
} from "./styles"
import { BackGroundColor, FontColor, GridBreakpoints } from '@components/style'

export interface LanguageProps {
    label: string,
    percent: number,
}

interface Props {
    array: Array<LanguageProps>
}

export const Language:React.FC<Props> = ({array}) => {
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