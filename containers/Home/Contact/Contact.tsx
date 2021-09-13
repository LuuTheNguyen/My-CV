import { StyledContact } from './styles'
import type { Props } from './interface'

export const Contact: React.FC<Props> = ({ contact }) => {
    return (
        <>
            {contact.map((item, index) => (
                <StyledContact key={index}>
                    <span>{item.label}:</span>
                    <span>{item.type !== 'phone' ? item.content : <a href="tel:+84829549118">{item.content}</a>}</span>
                </StyledContact>
            ))}
        </>
    )
}
