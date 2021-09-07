import {
    StyledLanguage,
    StyledProcessRing,
    StyledWrapperProcessRing,
    StyledTitleProcessRing,
} from '.'
import { BackgroundColor, FontColor, GridBreakpoints } from 'style/Theme'

import type { Props } from '.'

export const Language: React.FC<Props> = ({ language }) => {
    return (
        <StyledLanguage>
            {language.map((item, index) => (
                <StyledWrapperProcessRing key={index}>
                    <StyledProcessRing
                        width={50}
                        stroke={FontColor.secondary}
                        strokeBackground={FontColor.third}
                        strokeWidth={3}
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
