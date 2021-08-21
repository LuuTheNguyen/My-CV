import { Fragment } from "react"
import { StyledContact } from "./styles"

interface About {
    label: string,
    content: string,
}

export interface Prop {
    array: Array<About>
}

export const Contact: React.FC<Prop> = ({array}) => {
    return (
        <Fragment>           
            {array.map(
                (item, index) => (
                    <Fragment key={index}>
                         <StyledContact>
                            <span>{item.label}:</span>
                            <span>{item.content}</span>
                        </StyledContact>
                    </Fragment>
                )
            )}
        </Fragment>
    )
}