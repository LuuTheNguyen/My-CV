import { Fragment } from "react"
import { StyledAbout } from "./styles"

interface About {
    label: string,
    content: string,
}

export interface Prop {
    array: Array<About>
}

export const About:React.FC<Prop> = ({array}) => {
    return (
        <StyledAbout>
            {array.map(
                (item, index) => (
                    <Fragment key={index}>
                        <span>{item.label}</span> <span>{item.content}</span>
                        <br />
                    </Fragment>
                )
            )}
        </StyledAbout>
    )
}