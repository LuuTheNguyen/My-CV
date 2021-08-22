import { Fragment } from "react"
import { StyledContact } from "./styles"

export interface ContactProps {
    label: string,
    content: string,
}

export interface Props {
    array: Array<ContactProps>
}

export const Contact: React.FC<Props> = ({array}) => {
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