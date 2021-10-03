import React, { useContext, useMemo } from 'react'
import {
    StyledMenuItem,
    StyledContainerMenuItem,
    StyledWrapperMenuItem,
    StyledWrapperMenuList,
    StyledContainerSwitchTheme,
    StyledWrapSwitchTheme,
    StyledSlider,
} from './styles'
import { ThemeEnum } from '@enum/index'
import { ThemeContext } from '@context/ThemeContext'

export const MenuList: React.FC = () => {
    const { toggleTheme, theme } = useContext(ThemeContext)
    const themeIcon = useMemo(() => (theme === ThemeEnum.DARK ? 'dark_mode' : 'light_mode'), [theme])
    return (
        <StyledWrapperMenuList>
            <StyledContainerMenuItem>
                <StyledWrapperMenuItem>
                    <StyledMenuItem href="#summary" text="Summary" />
                    <StyledMenuItem href="#education" text="Education" />
                    <StyledMenuItem href="#service" text="Experience" />
                </StyledWrapperMenuItem>
            </StyledContainerMenuItem>

            <StyledContainerSwitchTheme>
                <StyledSlider>
                    <StyledWrapSwitchTheme onClick={toggleTheme}>
                        <span className="material-icons">{themeIcon}</span>
                    </StyledWrapSwitchTheme>
                </StyledSlider>
            </StyledContainerSwitchTheme>
        </StyledWrapperMenuList>
    )
}
