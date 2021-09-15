import { ThemeEnum } from '@enum/index'
import type { BackgroundColorsProps, ThemeOptions } from './interface'

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
        fontSize: {
            xs: '12px',
            sm: '14px',
            md: '16px',
            lg: '20px',
        },
        fontColor: {
            default: '#fff',
            primary: '#adaea9',
            secondary: '#f5c147',
            tertiary: '#191923',
        },
        color: {
            default: '#191923',
            primary: '#252531',
            secondary: '#20202a',
            tertiary: '#f5c147',
        },
        hover: {
            Font: {
                default: {
                    color: '#fafafc',
                    textShadow: '0 0 3px rgb(250 250 252 / 40%)',
                },
            },
            Button: {
                default: {
                    transform: 'translateY(-2px)',
                },
            },
        },
    },
    [ThemeEnum.LIGHT]: {
        fontSize: {
            xs: '12px',
            sm: '14px',
            md: '16px',
            lg: '20px',
        },
        fontColor: {
            default: '#1e1e28',
            primary: '#7e7e8e',
            secondary: '#f46258',
            tertiary: '#c0c0ca',
        },
        color: {
            default: '#e0e0e6',
            primary: '#ffffff',
            secondary: '#f4f4f6',
            tertiary: '#f46258',
        },
        hover: {
            Font: {
                default: {
                    color: '#1e1e28',
                    textShadow: '0 0 3px rgb(250 250 252 / 40%)',
                },
            },
            Button: {
                default: {
                    transform: 'translateY(-2px)',
                },
            },
        },
    },
}

type GridList = keyof typeof GridBreakpoints

export const ResponsiveBetween = (from: GridList, to: GridList) =>
    `@media (min-width: ${GridBreakpoints[from]}) and (max-width: ${GridBreakpoints[to]})`

export const ResponsiveMax = (to: GridList) => `@media (max-width: ${GridBreakpoints[to]})`

export const ResponsiveMin = (from: GridList) => `@media (min-width: ${GridBreakpoints[from]})`

export const MediaPrint = () => `@media print`
