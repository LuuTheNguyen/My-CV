import { ThemeEnum } from '@enum/index'
import { StyledComponent } from 'styled-components'
import React from 'react'

interface BackgroundColor {
    default: string
    primary: string
    secondary: string
    tertiary: string
}

export interface BackgroundColorsProps {
    [key: string]: BackgroundColor
}

export interface Color {
    default: string
    primary: string
    secondary: string
    tertiary: string
}

interface FontHover {
    default: {
        color: string
        textShadow: string
    }
}
interface ButtonHover {
    default: {
        transform: string
    }
}
export interface Hover {
    Font: FontHover
    Button: ButtonHover
}

interface FontColor {
    default: string
    primary: string
    secondary: string
    tertiary: string
}
interface FontSize {
    xs: string
    sm: string
    md: string
    lg: string
}

export interface ThemeOptions {
    fontSize: FontSize
    fontColor: FontColor
    color: Color
    hover: Hover
}

type Callback = (activeTheme: ThemeOptions) => string
type SetAttributeFunc = (attribute: { theme: ThemeEnum }) => string

type DynammicThemeDefault = (callback: Callback) => SetAttributeFunc
type DynammicThemeAlt = (
    darkModeCallback: Callback,
    lightModeCallback?: Callback
) => SetAttributeFunc

export type DynamicThemeFunc = DynammicThemeDefault | DynammicThemeAlt

type OriginalComponent = keyof JSX.IntrinsicElements | React.ComponentType<any>

export type CreateStyledComponentFunc = <
    K extends OriginalComponent,
    T extends StyledComponent<K, any, {}, never>
>(
    StyledComponentImp: T
) => T
