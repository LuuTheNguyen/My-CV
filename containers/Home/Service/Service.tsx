import {
    StyledWrapperService,
    StyledService,
    StyledHeaderService,
    StyledContentService,
    StyledCompany,
} from './styles'

import type { Props } from './interface'
import { useIsPrintMode } from 'hooks'
import moment from 'moment'
import { TypoComponent } from '@components/Typo'

export const Service: React.FC<Props> = ({ service }) => {
    const isPrintMode = useIsPrintMode()
    return (
        <StyledWrapperService>
            {service.map((item, index) => (
                <StyledService key={index}>
                    <StyledHeaderService>
                        <TypoComponent type="content3">
                            {moment(item.from).format('MM/YYYY')} - {moment(item.to).format('MM/YYYY')}
                        </TypoComponent>
                        <TypoComponent type="content1">{item.project}</TypoComponent>
                        {item.company && (
                            <StyledCompany>
                                <TypoComponent type="content4">{item.company}</TypoComponent>
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
                                <TypoComponent type="content5">Main responsibilities:</TypoComponent> <TypoComponent type="content5">{item.responsibilities}</TypoComponent>
                            </div>
                        )}
                        <hr />
                        {item.tech && (
                            <div>
                                <TypoComponent type="content5">Tech stack:</TypoComponent> <TypoComponent type="content5">{item.tech}</TypoComponent>
                            </div>
                        )}
                        <hr />
                        {item.description && (
                            <div>
                                <TypoComponent type="content5">Description:</TypoComponent> <TypoComponent type="content5">{item.description}</TypoComponent>
                            </div>
                        )}
                    </StyledContentService>
                </StyledService>
            ))}
        </StyledWrapperService>
    )
}
