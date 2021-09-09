import { ThemeProvider as CustomThemeProvider } from 'context/ThemeContext'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <CustomThemeProvider>
            <Component {...pageProps} />
        </CustomThemeProvider>
    )
}
export default MyApp
