import {
    StyledWrapperService,
} from './styles'

import type { Props } from './interface'
import { useChain, useSpringRef, useTransition } from '@react-spring/core'
import { Service } from './Service'
import { useAmp } from 'next/amp'

export const ServiceList: React.FC<Props> = ({ service }) => {
    service = service.sort((current, next) => current.from - next.from)
    const transApi = useSpringRef()
    const transition = useTransition(service, {
        ref: transApi,
        trail: 1000 / service.length,
        from: { opacity: 0, scale: 0 },
        enter: { opacity: 1, scale: 1 },
        leave: { opacity: 0, scale: 0 },
    })
    useChain([transApi], [0, 0.1])
    const isAmp = useAmp()

    return (
        <StyledWrapperService>
            {isAmp ? service.map((item) => (
                <Service key={item.project} item={item} />
            )) : transition((style, item) => (
                <Service key={item.project} style={style} item={item} />
            ))}
        </StyledWrapperService>
    )
}
