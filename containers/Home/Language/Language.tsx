import {
    StyledLanguage,
    StyledProcessRing,
    StyledWrapperProcessRing,
    StyledTitleProcessRing,
    StyledWrapperLanguage,
    StyledContainerProcessRings,
} from './styles'
import { Theme } from 'style/Theme'

import type { Props } from './interface'
import { useContext } from 'react'
import { ThemeContext } from '@context/ThemeContext'

export const Language: React.FC<Props> = ({ language }) => {
    const { theme } = useContext(ThemeContext)

    const currentTheme = Theme[theme]

    return (
        <StyledLanguage>
            {language.map((item, idx) => (
                <StyledWrapperLanguage key={idx}>
                    <p>{item.name}</p>
                    <StyledContainerProcessRings>
                        {item.skills.map((skill, index) => (
                            <StyledWrapperProcessRing key={index}>
                                <StyledProcessRing
                                    width={60}
                                    stroke={currentTheme.fontColor.secondary}
                                    strokeBackground={currentTheme.fontColor.tertiary}
                                    strokeWidth={3}
                                    percent={skill.percent}
                                    fontColor={currentTheme.fontColor.primary}
                                />
                                <StyledTitleProcessRing>{skill.label}</StyledTitleProcessRing>
                            </StyledWrapperProcessRing>
                        ))}{' '}
                    </StyledContainerProcessRings>
                </StyledWrapperLanguage>
            ))}
        </StyledLanguage>
    )
}
