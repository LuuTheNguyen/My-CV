import Link from 'next/link'
import { StyledLinkProp } from './interface'

export const StyledLink: React.FC<StyledLinkProp> = (props) => {
    return (
        <div className={props.className}>
            <Link href={props.href}>
                <a>{props.text}</a>
            </Link>
        </div>
    )
}
