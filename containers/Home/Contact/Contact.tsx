import { StyledContact } from './styles'
import { ContactProps, Prop } from './interface'

export const Contact: React.FC<Prop> = ({ contacts }) => {
    return (
        <>
            {contacts.map((item, index) => (
                <StyledContact key={index}>
                    <span>{item.label}:</span>
                    <span>{item.content}</span>
                </StyledContact>
            ))}
        </>
    )
}
