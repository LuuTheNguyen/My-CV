import Head from 'next/head'
import { StyledContainerLayout } from './style'
import type { Props } from './interface'
import { useEffect } from 'react'

export const Layout: React.FC<Props> = ({ children, name, version }) => {
    useEffect(
        () => { 
            window.scrollTo(0,0)
        },[]
    )
    return (
        <StyledContainerLayout>
            <Head>
                <title>{name}</title>
                <meta name="description" content={name} />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            {children}
            <footer>
                <p style={{ display: 'none' }}>Version: {version}</p>
            </footer>
        </StyledContainerLayout>
    )
}
