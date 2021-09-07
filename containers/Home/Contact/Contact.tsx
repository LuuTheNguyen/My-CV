import { StyledContact } from './styles'
import type { Props } from './interface'
import { useContext } from 'react'
import { ThemeContext } from 'context/ThemeContext'

export const Contact: React.FC<Props> = ({ contact }) => {

    const { theme } = useContext(ThemeContext)

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
