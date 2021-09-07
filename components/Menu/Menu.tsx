
import { useContext, useMemo } from 'react'
import {
    StyledMenuList,
    StyledWrapperMenuList,
    StyledHeaderMenu,
    StyledContainerMenuList,
    StyledMenuItem,
    StyledContainerMenuItem,
    StyledContainerSwitchTheme,
    StyledWrapSwitchTheme,
    StyledSlider
} from '.'

import { ThemeEnum } from '@enum/index'
import { ThemeContext } from '@context/ThemeContext'

export const Menu: React.FC = () => {
    const { toggleTheme, theme } = useContext(ThemeContext)
    const themeIcon = useMemo(() => theme === ThemeEnum.DARK ? 'dark_mode' : 'light_mode', [theme])

    return (
        <StyledMenuList className="col-1">
            <StyledContainerMenuList>
                <StyledHeaderMenu>
                    <span className="material-icons">
                        menu
                    </span>
                </StyledHeaderMenu>
                <StyledWrapperMenuList>
                    <StyledContainerMenuItem>
                        <StyledMenuItem href="/" text="HOME" />
                    </StyledContainerMenuItem>

                    <StyledContainerSwitchTheme>
                        <StyledSlider>
                            <StyledWrapSwitchTheme onClick={toggleTheme} isDarkTheme={theme === ThemeEnum.DARK} >
                                <span className="material-icons">
                                    {themeIcon}
                                </span>
                            </StyledWrapSwitchTheme>
                        </StyledSlider>
                    </StyledContainerSwitchTheme>
                </StyledWrapperMenuList>
            </StyledContainerMenuList>
        </StyledMenuList>
    )
}
