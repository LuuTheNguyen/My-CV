import { useIsPrintMode } from 'hooks/useIsPrintMode'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}
export default MyApp
