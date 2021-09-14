import { StyledContact } from './styles'
import type { Props, ContactProps } from './interface'
import React from 'react'

const handleType: React.FC<ContactProps> = ({ label, content, type }) => {
    switch (type) {
        case 'phone':
            return (
                <span>
                    <a href={`tel:${content}`}>{content}</a>
                </span>
            )
        case 'mail':
            return (
                <span>
                    <a href={`mailto:${content}`} target="_blank" rel="noreferrer">
                        {content}
                    </a>
                </span>
            )
        case 'skype':
            return (
                <span>
                    <a href={`skype:${content}?chat`}>{content}</a>
                </span>
            )
        default:
            return <span>{content}</span>
    }
}

export const Contact: React.FC<Props> = ({ contact }) => {
    return (
        <>
            {contact.map((item, index) => (
                <StyledContact key={index}>
                    <span>{item.label}:</span>
                    {handleType({ ...item })}
                </StyledContact>
            ))}
        </>
    )
}
