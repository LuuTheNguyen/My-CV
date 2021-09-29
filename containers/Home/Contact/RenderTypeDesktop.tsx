import { useSpring } from 'react-spring'
import Image from 'next/image'
import { useIsMobile } from 'hooks'
import { StyledIcon, StyledWrapCircle } from './styles'
import { event as GaEvent } from '@utils/google-analytic'
import React, { useEffect, useState } from 'react'
import type { TypesProps } from './interface'
import type { RenderTypeProps } from './interface'

const RenderIcon: React.FC<TypesProps> = ({ type }) => {
    switch (type) {
        case 'skype':
            return <Image src="/images/skype.svg" alt="skypeIcon" width={18} height={18} />
        case 'mail':
            return <Image src="/images/gmailIcon.svg" alt="mailIcon" width={18} height={18} />
        case 'phone':
            return <span>call</span>
        default:
            return <Image src="/images/warning-error.svg" alt="error" width={18} height={18} />
    }
}

const handleOnClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    linkProps: Record<any, any>,
    type: string
) => {
    if (event) {
        event.preventDefault()
    }
    GaEvent({
        eventName: 'contact',
        eventParams: {
            event_category: type,
            event_label: 'contact',
        },
    })

    const link = document.createElement('a')
    Object.keys(linkProps).forEach((prop) => {
        link.setAttribute(prop, linkProps[prop])
    })
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}

export const RenderTypeOnDesktop: React.FC<RenderTypeProps> = ({ type, linkProps, content }) => {
    const isMobile = useIsMobile()
    const duration = 1000
    const propStyleCircleMobile = useSpring({
        from: { scale: 0, opacity: 0.6 },
        config: { duration: duration },
        scale: 1.2,
        opacity: 1,
        reset: true,
    })
    const [{ scale, opacity }, setPropStyleCircle] = useSpring(() => ({
        from: { scale: 0, opacity: 0.6 },
        scale: 1.2,
        opacity: 1,
        config: { duration: duration },
    }))
    const [flip, set] = useState(false)
    const propStyleIconMobile = useSpring({
        from: { rotateZ: 0 },
        config: { duration: duration },
        rotateZ: 1,
        reverse: flip,
        onRest: () => set(!flip),
    })
    const [{ rotateZ }, setPropStyleIcon] = useSpring(() => ({
        from: { rotateZ: 0 },
        rotateZ: 1,
        reverse: flip,
        config: { duration: duration },
        onRest: () => set(!flip),
    }))
    const propStyleCircle = isMobile ? propStyleCircleMobile : { scale, opacity }
    const propStyleIcon = isMobile ? propStyleIconMobile : { rotateZ }

    useEffect(() => {
        const restartStyleAnimation = () => {
            setPropStyleIcon({
                from: { rotateZ: 0 },
                rotateZ: 1,
                reverse: flip,
                onRest: () => set(!flip),
            })
            setPropStyleCircle({
                from: { scale: 0, opacity: 0.6 },
                scale: 1.2,
                opacity: 1,
            })
        }
        window.addEventListener('resize', restartStyleAnimation)

        return () => {
            window.addEventListener('resize', restartStyleAnimation)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
    const handleOnMouseEnter = () => {
        if (!isMobile) {
            setPropStyleCircle({ scale: 1.2, opacity: 1, config: { duration: duration }, reset: true, loop: true })
            setPropStyleIcon({ rotateZ: 1, loop: true, config: { duration: duration } })
        }
    }
    const handleOnMouseLeave = () => {
        if (!isMobile) {
            setPropStyleCircle({ scale: 0, opacity: 0.6, reset: false, loop: false })
            setPropStyleIcon({ rotateZ: 0, loop: false })
        }
    }

    const isAnimatedContent = ['phone', 'skype', 'mail'].indexOf(type) > -1
    if (isAnimatedContent) {
        return (
            <span style={{ position: 'relative' }}>
                <StyledWrapCircle style={stylesCircle} />
                <StyledIcon
                    style={stylesIcon}
                    className="material-icons"
                    onMouseEnter={handleOnMouseEnter}
                    onMouseLeave={handleOnMouseLeave}
                    onClick={(event) => handleOnClick(event, linkProps, type)}>
                    <RenderIcon type={type} />
                </StyledIcon>
            </span>
        )
    }
    return (
        <span>
            <a onClick={(event) => handleOnClick(event, linkProps, type)}> {content} </a>
        </span>
    )
}
