import type { ContactProps } from './interface'
import React from 'react'

import { propsBuilder } from './utils'
import { useIsPrintMode } from 'hooks'
import { RenderTypeOnDesktop } from './RenderTypeDesktop'
import { RenderTypeOnPrintMode } from './RenderTypeOnPrintMode'

export const RenderOnType: React.FC<ContactProps> = ({ label, content, type }) => {
    const isPrintMode = useIsPrintMode()

    const linkPropsBuilder = propsBuilder[type]
    if (linkPropsBuilder) {
        const linkProps = linkPropsBuilder(content)
        return isPrintMode ? (
            <RenderTypeOnPrintMode label={label} type={type} linkProps={linkProps} content={content} />
        ) : (
            <RenderTypeOnDesktop type={type} linkProps={linkProps} content={content} />
        )
    }
    return <span>{content}</span>
}
