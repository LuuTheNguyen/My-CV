import { ThemeEnum } from '@enum/index'
import type { ThemeOptions } from './interface'

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
        images: {
            git: {
                src: '/images/GitHub-Mark-32px.png',
                filter: 'invert(64%) sepia(29%) saturate(13%) hue-rotate(32deg) brightness(102%) contrast(92%)',
                hover: {
                    filter: 'invert(93%) sepia(1%) saturate(397%) hue-rotate(201deg) brightness(106%) contrast(98%)',
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
            primary: '#f8f9fa',
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
        images: {
            git: {
                src: '/images/GitHub-Mark-32px.png',
                filter: 'invert(58%) sepia(9%) saturate(336%) hue-rotate(201deg) brightness(95%) contrast(92%)',
                hover: {
                    filter: 'invert(9%) sepia(5%) saturate(3052%) hue-rotate(202deg) brightness(92%) contrast(91%)',
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
