import { StyledContact } from './styles'
import type { Props, ContactProps } from './interface'
import React from 'react'

const propsBuilder = {
    phone(content: string) {
        return { href: `tel:${content}` }
    },
    mail(content: string) {
        return {
            href: `mailto:${content}`,
            target: '_blank',
            rel: 'noreferrer',
        }
    },
    skype(content: string) {
        return {
            href: `skype:${content}?chat`,
        }
    },
}

const HandleOnType: React.FC<ContactProps> = ({ label, content, type }) => {
    const linkPropsBuilder = propsBuilder[type]
    if (linkPropsBuilder) {
        const props = linkPropsBuilder(content)
        return (
            <span>
                <a {...props}> {content} </a>
            </span>
        )
    }
    return <span>{content}</span>
}

export const Contact: React.FC<Props> = ({ contact }) => {
    return (
        <>
            {contact.map((item, index) => (
                <StyledContact key={index}>
                    <span>{item.label}:</span>
                    <HandleOnType {...item} />
                </StyledContact>
            ))}
        </>
    )
}
