import { StyledContact, StyledIcon, StyledWrapCircle } from './styles'
import type { Props, ContactProps } from './interface'
import React, { useState } from 'react'
import { propsBuilder, handlePhoneNumber } from './ultis'
import { useIsMobile, useIsPrintMode } from 'hooks'
import { useSpring } from 'react-spring'
import Image from 'next/image'

const RenderType: React.FC<ContactProps> = ({ label, content, type }) => {
    const linkPropsBuilder = propsBuilder[type]
    const isPrintMode = useIsPrintMode()
    if (linkPropsBuilder) {
        const props = linkPropsBuilder(content)
        switch (type) {
            case 'phone':
                return (
                    <span>
                        <a {...props}> {handlePhoneNumber(content)} </a>
                    </span>
                )
            default:
                return (
                    <span>
                        <a {...props}> {content} </a>
                    </span>
                )
        }
    }
    return <span>{content}</span>
}

const RenderTypeOnMobile: React.FC<ContactProps> = ({ label, content, type }) => {
    const [flip, set] = useState(false)
    const stylesIcon = useSpring({
        reset: true,
        reverse: flip,
        from: { rotateZ: -20 },
        to: { rotateZ: 20 },
        onRest: () => set(!flip),
    })
    const stylesCircle = useSpring({
        reset: true,
        reverse: flip,
        from: { scale: 1, opacity: 0.6 },
        to: { scale: 1.2, opacity: 0.3 },
        onRest: () => set(!flip),
    })
    const handleIcon = (type: string) => {
        switch (type) {
            case 'skype':
                return <Image src="/images/skype.svg" alt="gitIcon" width={18} height={18} />
            case 'mail':
                return <Image src="/images/gmailIcon.svg" alt="gitIcon" width={18} height={18} />
        }
    }
    const [state, setState] = useState(true)
    const prop = useSpring({ x: state ? 0.2 : 0, onRest: () => setState(!state) })

    const linkPropsBuilder = propsBuilder[type]
    if (linkPropsBuilder) {
        const props = linkPropsBuilder(content)
        switch (type) {
            case 'phone':
                return (
                    <span style={{ position: 'relative' }}>
                        <StyledWrapCircle
                            style={{
                                transform: prop.x
                                    .to({
                                        range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                                        output: [1, 1.3, 1.2, 1.1, 1.2, 1.1, 1.03, 1],
                                    })
                                    .to((x) => `scale(${x})`),
                            }}
                        />
                        <StyledIcon style={{ ...stylesIcon }} className="material-icons" {...props}>
                            call
                        </StyledIcon>
                    </span>
                )
            case 'skype':
            case 'mail':
                return (
                    <span style={{ position: 'relative' }}>
                        <StyledWrapCircle style={{ ...stylesCircle }} />
                        <StyledIcon style={{ ...stylesIcon }} className="material-icons" {...props}>
                            {handleIcon(type)}
                        </StyledIcon>
                    </span>
                )
            default:
                return (
                    <span>
                        <a {...props}> {content} </a>
                    </span>
                )
        }
    }
    return <span>{content}</span>
}

export const Contact: React.FC<Props> = ({ contact }) => {
    const isMobile = useIsMobile()
    return (
        <>
            {contact.map((item, index) => (
                <StyledContact key={index}>
                    {isMobile ? (
                        <RenderTypeOnMobile {...item} />
                    ) : (
                        <>
                            <span>{item.label}:</span>
                            <RenderType {...item} />
                        </>
                    )}
                </StyledContact>
            ))}
        </>
    )
}
