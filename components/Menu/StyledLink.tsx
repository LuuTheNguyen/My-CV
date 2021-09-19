import Link from 'next/link'
import type { StyledLinkProps } from './interface'
import { StyledItemLink } from './styles'

export const StyledLink: React.FC<StyledLinkProps> = (props) => {
    return (
        <div className={props.className}>
            <Link href={props.href} passHref>
                <StyledItemLink ref={props.ref}>{props.text}</StyledItemLink>
            </Link>
        </div>
    )
}
