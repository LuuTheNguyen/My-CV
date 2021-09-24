import { ThemeProvider as CustomThemeProvider } from 'context/ThemeContext'
import { useBrowserEffect } from 'hooks/useBrowserEffect'
import type { AppProps } from 'next/app'
import 'style/global.css'
import { handlePreventCopyCutContent, handlePreventInspectElement } from 'utils/page'
import { useRouter } from 'next/router'
import * as ga from 'utils/ga'
import { useEffect } from 'react'

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

    const router = useRouter()

    useEffect(() => {
        const handleRouteChange = (url: URL) => {
            ga.pageview(url)
        }
        router.events.on('routeChangeComplete', handleRouteChange)

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])

    return (
        <CustomThemeProvider>
            <Component {...pageProps} />
        </CustomThemeProvider>
    )
}
export default MyApp
