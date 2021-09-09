
import { ReactNode } from 'react'
export interface StyledLinkProp {
    className?: string
    href: string
    text: string
}

export type Prop = { children: ReactNode }
export type Ref = HTMLLinkElement | undefined