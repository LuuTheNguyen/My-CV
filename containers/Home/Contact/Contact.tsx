import { StyledContact } from '.'
import type { Props } from '.'

export const Contact: React.FC<Props> = ({ contact }) => {
    return (
        <>
            {contact.map((item, index) => (
                <StyledContact key={index}>
                    <span>{item.label}:</span>
                    <span>{item.content}</span>
                </StyledContact>
            ))}
        </>
    )
}
