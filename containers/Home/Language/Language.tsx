import { StyledLanguage, StyledProcessRing, StyledWrapperProcessRing, StyledTitleProcessRing } from './styles'
import { Theme } from 'style/Theme'

import type { Props } from './interface'
import { useContext } from 'react'
import { ThemeContext } from '@context/ThemeContext'

export const Language: React.FC<Props> = ({ language }) => {
    const { theme } = useContext(ThemeContext)

    const currentTheme = Theme[theme]

    return (
        <StyledLanguage>
            {language.map((item, index) => (
                <StyledWrapperProcessRing key={index}>
                    <StyledProcessRing
                        width={60}
                        stroke={currentTheme.fontColor.secondary}
                        strokeBackground={currentTheme.fontColor.tertiary}
                        strokeWidth={3}
                        percent={item.percent}
                        fontColor={currentTheme.fontColor.primary}
                    />
                    <StyledTitleProcessRing>{item.label}</StyledTitleProcessRing>
                </StyledWrapperProcessRing>
            ))}
        </StyledLanguage>
    )
}
