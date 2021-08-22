import { Fragment } from "react"
import { StyledContact } from "./styles"

export interface ContactProps {
    label: string,
    content: string,
}

export interface Props {
    contacts: ContactProps[]
}

export const Contact: React.FC<Props> = ({contacts}) => {
    return (
        <>           
            {contacts.map(
                (item, index) => (
                    <div key={index}>
                         <StyledContact>
                            <span>{item.label}:</span>
                            <span>{item.content}</span>
                        </StyledContact>
                    </div>
                )
            )}
        </>
    )
}