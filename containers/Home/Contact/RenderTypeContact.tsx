import { StyledIcon, StyledWrapCircle } from './styles'
import type { ContactProps, RenderTypeProps } from './interface'
import React, { useState } from 'react'

import { decodePhoneNumber, propsBuilder } from './ultis'
import { useIsMobile, useIsPrintMode } from 'hooks'
import { useSpring } from 'react-spring'
import Image from 'next/image'

const HandleRenderTypeOnPrintMode: React.FC<RenderTypeProps> = ({ label, type, linkProps, content }) => {
    switch (type) {
        case 'phone':
            return <a {...linkProps}> {decodePhoneNumber(content)} </a>
        default:
            return <a {...linkProps}> {content} </a>
    }
}

const HandleRenderTypeOnDesktop: React.FC<RenderTypeProps> = ({ type, linkProps, content }) => {
    const isMobile = useIsMobile()

    const propStyleCircleMobile = useSpring({ from: { scale: 0, opacity: 0.6 }, scale: 1.2, opacity: 1, reset: true })
    const [{ scale, opacity }, setPropStyleCircle] = useSpring(() => ({
        from: { scale: 0, opacity: 0.6 },
        scale: 1.2,
        opacity: 1,
    }))
    const [flip, set] = useState(false)
    const propStyleIconMobile = useSpring({ from: { rotateZ: 0 }, rotateZ: 1, reverse: flip, onRest: () => set(!flip) })
    const [{ rotateZ }, setPropStyleIcon] = useSpring(() => ({
        from: { rotateZ: 0 },
        rotateZ: 1,
        reverse: flip,
        onRest: () => set(!flip),
    }))
    const propStyleCircle = isMobile ? propStyleCircleMobile : { scale, opacity }
    const propStyleIcon = isMobile ? propStyleIconMobile : { rotateZ }

    const stylesIcon = {
        transform: propStyleIcon.rotateZ
            .to({
                range: [0, 0.25, 0.5, 0.75, 1],
                output: [0, -20, 20, -10, 0],
            })
            .to((rotateZ) => `rotateZ(${rotateZ}deg)`),
    }
    const stylesCircle = {
        transform: propStyleCircle.scale
            .to({
                range: [0, 0.25, 0.5, 0.75, 1],
                output: [1.05, 1.1, 1.2, 1.1, 1.05],
            })
            .to((scale) => `scale(${scale})`),
        opacity: propStyleCircle.opacity
            .to({
                range: [0, 0.25, 0.5, 0.75, 1],
                output: [1, 0.6, 0.3, 0.6, 1],
            })
            .to((opacity) => opacity),
    }

    const handleIcon = (type: string) => {
        switch (type) {
            case 'skype':
                return <Image src="/images/skype.svg" alt="gitIcon" width={18} height={18} />
            case 'mail':
                return <Image src="/images/gmailIcon.svg" alt="gitIcon" width={18} height={18} />
            case 'phone':
                return 'call'
        }
    }
    const handleOnMouseEnter = () => {
        setPropStyleCircle({ scale: 1.2, opacity: 1, reset: true, loop: true })
        setPropStyleIcon({ rotateZ: 1, loop: true })
    }
    const handleOnMouseLeave = () => {
        setPropStyleCircle({ scale: 0, opacity: 0.6, reset: false, loop: false })
        setPropStyleIcon({ rotateZ: 0, loop: false })
    }

    const isAnimatedContent = ['phone', 'skype', 'mail'].indexOf(type) > -1
    if (isAnimatedContent) {
        return (
            <span style={{ position: 'relative' }}>
                <StyledWrapCircle style={stylesCircle} />
                <StyledIcon
                    {...linkProps}
                    style={stylesIcon}
                    className="material-icons"
                    onMouseEnter={handleOnMouseEnter}
                    onMouseLeave={handleOnMouseLeave}>
                    {handleIcon(type)}
                </StyledIcon>
            </span>
        )
    } else {
        return (
            <span>
                <a {...linkProps}> {content} </a>
            </span>
        )
    }
}

export const RenderOnType: React.FC<ContactProps> = ({ label, content, type }) => {
    const isPrintMode = useIsPrintMode()

    const linkPropsBuilder = propsBuilder[type]
    if (linkPropsBuilder) {
        const linkProps = linkPropsBuilder(content)
        return isPrintMode ? <>
                <span>{label}:</span>
                <span>
                    <HandleRenderTypeOnPrintMode label={label} type={type} linkProps={linkProps} content={content} />
                </span>
            </> : <HandleRenderTypeOnDesktop type={type} linkProps={linkProps} content={content} />
    }
    return <span>{content}</span>
}
