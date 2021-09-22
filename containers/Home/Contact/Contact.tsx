import { StyledContact } from './styles'
import type { Props } from './interface'
import React from 'react'
import { RenderOnType } from './RenderTypeContact'

export const Contact: React.FC<Props> = ({ contact }) => {
    return (
        <>
            {contact.map((item, index) => (
                <StyledContact key={index}>
                    <RenderOnType {...item} />
                </StyledContact>
            ))}
        </>
    )
}
