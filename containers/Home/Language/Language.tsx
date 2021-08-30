import {
    StyledLanguage,
    StyledProcessRing,
    StyledWrapperProcessRing,
    StyledTitleProcessRing,
} from './styles'
import { BackGroundColor, FontColor, GridBreakpoints } from 'style/Theme'

import { LanguageProps, Prop } from './interface'

export const Language: React.FC<Prop> = ({ languages }) => {
    return (
        <StyledLanguage>
            {languages.map((item, index) => (
                <StyledWrapperProcessRing key={index}>
                    <StyledProcessRing
                        width={40}
                        stroke={FontColor.secondary}
                        strokeWidth={2}
                        percent={item.percent}
                    />
                    <StyledTitleProcessRing>
                        {item.label}
                    </StyledTitleProcessRing>
                </StyledWrapperProcessRing>
            ))}
        </StyledLanguage>
    )
}
