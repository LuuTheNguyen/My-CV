import {
    StyledWrapperService,
    StyledService,
    StyledHeaderService,
    StyledContentService,
    StyledCompany,
    StyledHeaderSubTitleService,
    StyledHeaderTitleService,
} from './styles'

import type { Props } from './interface'
import moment from 'moment'
import { useIsPrintMode } from 'hooks'
import { useChain, useSpringRef, useTransition } from '@react-spring/core'

export const Service: React.FC<Props> = ({ service }) => {
    const isPrintMode = useIsPrintMode()
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

    return (
        <StyledWrapperService>
            {transition((style, item) => (
                <StyledService key={item.project} style={{ ...style }}>
                    <StyledHeaderService>
                        <StyledHeaderTitleService>
                            {moment(item.from).format('MM/YYYY')} - {moment(item.to).format('MM/YYYY')}
                        </StyledHeaderTitleService>
                        <StyledHeaderSubTitleService>{item.project}</StyledHeaderSubTitleService>
                        {item.company && (
                            <StyledCompany>
                                <span>{item.company}</span>
                                {!isPrintMode && (
                                    <a target="_blank" rel="noreferrer" href={item.companyHref}>
                                        <span className="material-icons">open_in_new</span>
                                    </a>
                                )}
                            </StyledCompany>
                        )}
                    </StyledHeaderService>
                    <StyledContentService>
                        {item.responsibilities && (
                            <div>
                                <span>Main responsibilities:</span> <span>{item.responsibilities}</span>
                            </div>
                        )}
                        <hr />
                        {item.tech && (
                            <div>
                                <span>Tech stack:</span> <span>{item.tech}</span>
                            </div>
                        )}
                        <hr />
                        {item.description && (
                            <div>
                                <span>Description:</span> <span>{item.description}</span>
                            </div>
                        )}
                    </StyledContentService>
                </StyledService>
            ))}
        </StyledWrapperService>
    )
}
