import Link from 'next/link'

export const StyledLink = (props: any) =>{
    return (
      <div className={props.className}>
        <Link href={props.href}><a>{props.text}</a></Link>
      </div>
    )
}