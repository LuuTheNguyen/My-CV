import { ReactNode } from 'react'
export interface StyledLinkProps {
    className?: string
    href: string
    text: string
    ref: any
}

export type Props = { children: ReactNode }
export type Ref = HTMLLinkElement | undefined
