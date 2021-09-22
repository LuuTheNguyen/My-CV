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
import { useIsPrintMode } from 'hooks'
import moment from 'moment'

export const Service: React.FC<Props> = ({ service }) => {
    const isPrintMode = useIsPrintMode()
    return (
        <StyledWrapperService>
            {service.map((item, index) => (
                <StyledService key={index}>
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
