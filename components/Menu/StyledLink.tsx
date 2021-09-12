import Link from 'next/link'
import type { StyledLinkProp } from './interface'
import { StyledItemLink } from './styles'

export const StyledLink: React.FC<StyledLinkProp> = (props) => {
    return (
        <div className={props.className}>
            <Link href={props.href} passHref>
                <StyledItemLink ref={props.ref}>{props.text}</StyledItemLink>
            </Link>
        </div>
    )
}
