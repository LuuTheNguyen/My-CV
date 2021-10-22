import { ThemeProvider as CustomThemeProvider } from 'context/ThemeContext'
import { useBrowserEffect } from 'hooks/useBrowserEffect'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { handlePreventCopyCutContent, handlePreventInspectElement } from '@utils/page'
import { pageview } from '@utils/google-analytic'
import 'style/global.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
    useBrowserEffect(() => {
        if (process.env.NODE_ENV === 'production') {
            const self = document
            handlePreventCopyCutContent(self)
            handlePreventInspectElement(self)
        }
    }, [])

    const router = useRouter()

    useEffect(() => {
        const handleRouteChange = (url: URL) => {
            pageview(url)
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
