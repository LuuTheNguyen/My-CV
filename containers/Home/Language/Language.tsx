import {
    StyledLanguage,
    StyledProcessRing,
    StyledWrapperProcessRing,
    StyledTitleProcessRing,
} from '.'
import { BackGroundColor, FontColor, GridBreakpoints } from 'style/Theme'

import type { Props } from '.'

export const Language: React.FC<Props> = ({ language }) => {
    return (
        <StyledLanguage>
            {language.map((item, index) => (
                <StyledWrapperProcessRing key={index}>
                    <StyledProcessRing
                        width={40}
                        stroke={FontColor.secondary}
                        strokeBackground={FontColor.third}
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
