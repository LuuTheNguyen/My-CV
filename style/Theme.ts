import { ThemeEnum } from '@enum/index'
import type { BackgroundColorsProps, ThemeOptions } from './interface'

export const FontColor = {
    default: '#fff',
    primary: '#adaea9',
    secondary: '#f5c147',
    third: '#e9ecef',
}

export const FontSize = {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '20px',
}

const BackgroundColors: BackgroundColorsProps = {
    [ThemeEnum.DARK]: {
        default: '#212529',
        primary: '#252531',
        secondary: '#20202a',
        third: '#f5c147',
    },
    [ThemeEnum.LIGHT]: {
        default: '#f0f0f6',
        primary: '#ffffff',
        secondary: '#c0c0ca',
        third: '#f46258',
    }
}

export const BackgroundColor = BackgroundColors[ThemeEnum.DARK]
// export const BackgroundColorV2 = (theme: ThemeEnum) => BackgroundColors[theme]

export const GridBreakpoints = {
    xs: 0,
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px',
}

export const Hover = {
    Font: {
        default: {
            color: '#fafafc',
            'text-shadow': '0 0 3px rgb(250 250 252 / 40%)',
        },
    },
    Button: {
        default: {
            transform: 'translateY(-2px)',
        },
    },
}

export const Theme: { [x in ThemeEnum]: ThemeOptions } = {
    [ThemeEnum.DARK]: {
        fontSize: FontSize,
        fontColor: FontColor,
        Color: {
            default: '#212529',
            primary: '#252531',
            secondary: '#20202a',
            tertiary: '#f5c147',
        }
    },
    [ThemeEnum.LIGHT]: {
        fontSize: FontSize,
        fontColor: FontColor,
        Color: {
            default: '#f0f0f6',
            primary: '#ffffff',
            secondary: '#c0c0ca',
            tertiary: '#f46258',
        }
    }
}

type GridList = keyof typeof GridBreakpoints

export const ResponsiveBetween = (from: GridList, to: GridList) =>
    `@media (min-width: ${GridBreakpoints[from]}) and (max-width: ${GridBreakpoints[to]})`

export const ResponsiveMax = (to: GridList) =>
    `@media (max-width: ${GridBreakpoints[to]})`

export const ResponsiveMin = (from: GridList) =>
    `@media (min-width: ${GridBreakpoints[from]})`

export const MediaPrint = () => `@media print`
