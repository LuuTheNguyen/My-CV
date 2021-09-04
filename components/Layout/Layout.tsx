import Head from 'next/head'
import { StyledContainer } from './style'
import type { Props } from '.'

export const Layout: React.FC<Props> = ({ children, name }) => {
    return (
        <StyledContainer>
            <Head>
                <title>{name}</title>
                <meta name="description" content={name} />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            {children}
            <footer />
        </StyledContainer>
    )
}
