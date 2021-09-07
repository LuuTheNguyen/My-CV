import { ThemeEnum } from '@enum/index'
import { FontSize, FontColor, Theme } from './Theme'
import type { Colors, DynamicThemeFunc  } from './interface'

export const setTheme = (otherProps: Record<any, any> = {}) => ({ theme }: Record<any, any>) => ({ ...otherProps, theme })

export const dynamicTheme: DynamicThemeFunc = (darkModeCallback, lightModeCallback) => ({ theme }) => {
    const isLightMode = theme === ThemeEnum.LIGHT
    const themeOptions = Theme[theme]

    if (isLightMode && lightModeCallback) {
        return lightModeCallback(themeOptions)
    }
    return darkModeCallback(themeOptions)
}