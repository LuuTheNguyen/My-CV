import Head from 'next/head'
import { StyledContainerLayout } from './style'
import type { Props } from './interface'

export const Layout: React.FC<Props> = ({ children, name }) => {
    return (
        <StyledContainerLayout>
            <Head>
                <title>{name}</title>
                <meta name="description" content={name} />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            {children}
            <footer />
        </StyledContainerLayout>
    )
}
