import Link from 'next/link'
import type { StyledLinkProp } from '.'

export const StyledLink: React.FC<StyledLinkProp> = (props) => {
    return (
        <div className={props.className}>
            <Link href={props.href}>
                <a>{props.text}</a>
            </Link>
        </div>
    )
}
