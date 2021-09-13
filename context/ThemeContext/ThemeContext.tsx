import { ThemeEnum } from '@enum'
import { useBrowserEffect } from 'hooks/useBrowserEffect'
import React, { useCallback, useState } from 'react'

interface ThemeContextProps {
    theme: ThemeEnum
    setTheme: (theme: ThemeEnum) => void
    toggleTheme: () => void
}

const parseThemeName = (name: string | null, defaultTheme = ThemeEnum.DARK): ThemeEnum => {
    switch (name) {
        case ThemeEnum.DARK:
            return ThemeEnum.DARK
        case ThemeEnum.LIGHT:
            return ThemeEnum.LIGHT
        default:
            return defaultTheme
    }
}
export const ThemeContext = React.createContext<ThemeContextProps>({
    theme: ThemeEnum.DARK,
    setTheme: () => {},
    toggleTheme: () => {},
})

export const ThemeProvider: React.FC = ({ children }) => {
    const [theme, _setTheme] = useState<ThemeEnum>(ThemeEnum.DARK)

    useBrowserEffect(() => {
        const storedTheme = parseThemeName(localStorage.getItem('theme'))
        _setTheme(storedTheme)
    }, [theme])

    const toggleTheme = useCallback(() => {
        const targetTheme = theme === ThemeEnum.DARK ? ThemeEnum.LIGHT : ThemeEnum.DARK
        _setTheme(targetTheme)
        localStorage.setItem('theme', targetTheme)
    }, [theme])

    const setTheme = (targetTheme: ThemeEnum) => {
        _setTheme(targetTheme)
        localStorage.setItem('theme', targetTheme)
    }

    return <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>{children}</ThemeContext.Provider>
}
