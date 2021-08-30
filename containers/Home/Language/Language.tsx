import {
    StyledLanguage,
    StlyedProcessRing,
    StyledWrapperProcessRing,
    StlyedTitleProcessRing,
} from './styles'
import { BackGroundColor, FontColor, GridBreakpoints } from 'style/Theme'

import { LanguageProps, Prop } from './interface'

export const Language: React.FC<Prop> = ({ languages }) => {
    return (
        <StyledLanguage>
            {languages.map((item, index) => (
                <div key={index}>
                    <StyledWrapperProcessRing>
                        <StlyedProcessRing
                            width={40}
                            stroke={FontColor.secondary}
                            strokeWidth={2}
                            percent={item.percent}
                        />
                        <StlyedTitleProcessRing>
                            {item.label}
                        </StlyedTitleProcessRing>
                    </StyledWrapperProcessRing>
                </div>
            ))}
        </StyledLanguage>
    )
}
