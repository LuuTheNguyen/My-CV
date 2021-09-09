import { ThemeEnum } from '@enum/index'
import { Theme } from './Theme'
import type { DynamicThemeFunc, CreateStyledComponentFunc } from './interface'
import React, { useContext } from 'react'
import { ThemeContext } from '@context/ThemeContext'

export const setTheme =
    (otherProps: Record<any, any> = {}) =>
    ({ theme }: Record<any, any>) => ({ ...otherProps, theme })

export const dynamicTheme: DynamicThemeFunc =
    (darkModeCallback, lightModeCallback) =>
    ({ theme }) => {
        const isLightMode = theme === ThemeEnum.LIGHT
        const themeOptions = Theme[theme]

        if (isLightMode && lightModeCallback) {
            return lightModeCallback(themeOptions)
        }
        return darkModeCallback(themeOptions)
    }

export const CreateStyledComponent: CreateStyledComponentFunc = (
    StyledComponents
) => {
    const result = (props: any, ref: any) => {
        const { theme } = useContext(ThemeContext)
        const componentProps: any = {
            ...props,
            theme,
        }
        return (<StyledComponents {...componentProps} />) as any
    }
    return result as any
}
