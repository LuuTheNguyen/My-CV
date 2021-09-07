import { FontSize, FontColor } from './Theme'
import { ThemeEnum } from '@enum/index'

interface BackgroundColor {
    default: string,
    primary: string,
    secondary: string,
    third: string,
}

export interface BackgroundColorsProps{
    [key:string]: BackgroundColor,
}

export interface Colors {
    default: string,
    primary: string,
    secondary: string,
    tertiary: string,
}


export interface ThemeOptions {
    fontSize: typeof FontSize
    fontColor: typeof FontColor
    Color: Colors
}

export type Callback = (activeTheme: ThemeOptions) => string
export type SetAttributeFunc = (parameters: { theme: ThemeEnum }) => string

export type DynammicThemeDefault = (callback: Callback) => SetAttributeFunc
export type DynammicThemeAlt = (darkModeCallback: Callback, lightModeCallback?: Callback) => SetAttributeFunc
export type DynamicThemeFunc = DynammicThemeDefault | DynammicThemeAlt