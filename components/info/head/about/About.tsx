import { Fragment } from "react"
import { StyledAbout } from "./styles"

export interface AboutProps {
    label: string,
    content: string,
}

interface Props {
    array: Array<AboutProps>
}

export const About:React.FC<Props> = ({array}) => {
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