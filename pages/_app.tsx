import { ThemeProvider as CustomThemeProvider } from 'context/ThemeContext'
import { useBrowserEffect } from 'hooks/useBrowserEffect'
import type { AppProps } from 'next/app'
import 'style/global.css'
import { handlePreventCopyCutContent, handlePreventInspectElement } from 'utils/page'

const MyApp = ({ Component, pageProps }: AppProps) => {
    useBrowserEffect(() => {
        if (process.env.NODE_ENV === 'production') {
            ;(function () {
                const self = document
                handlePreventCopyCutContent(self)
                handlePreventInspectElement(self)
            })()
        }
    }, [])

    return (
        <CustomThemeProvider>
            <Component {...pageProps} />
        </CustomThemeProvider>
    )
}
export default MyApp
