import { ThemeEnum } from '@enum/index'
import { Theme } from './Theme'
import type { DynamicThemeFunc, CreateStyledComponentFunc } from './interface'
import React, { useContext } from 'react'
import { ThemeContext } from '@context/ThemeContext'

export const dynamicTheme: DynamicThemeFunc =
    (darkModeCallback, lightModeCallback) =>
    ({ dataTheme }) => {
        if(!dataTheme) {
            return darkModeCallback(Theme[ThemeEnum.DARK])
        }
        const isLightMode = dataTheme === ThemeEnum.LIGHT
        const themeOptions = Theme[dataTheme]

        if (isLightMode && lightModeCallback) {
            return lightModeCallback(themeOptions)
        }
        return darkModeCallback(themeOptions)
    }

export const CreateStyledComponent: CreateStyledComponentFunc = (StyledComponents) => {
    const Result = (props: any) => {
        const { theme } = useContext(ThemeContext)
        const componentProps: any = {
            ...props,
            ['data-theme']: theme,
        }
        return (<StyledComponents {...componentProps} />) as any
    }
    return Result as any
}
