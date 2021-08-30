import {
    StyledWrapperService,
    StyledService,
    StyledHeaderService,
    StyledContentService,
    StyledCompany,
    StyledHeaderSubTitleService,
    StyledHeaderTitleService,
} from './styles'

import { ServiceProps, Prop } from './interface'

export const Service: React.FC<Prop> = ({ services }) => {
    return (
        <StyledWrapperService>
            {services.map((item, index) => (
                <StyledService key={index}>
                    <StyledHeaderService>
                        <StyledHeaderTitleService>
                            {item.time}
                        </StyledHeaderTitleService>
                        <StyledHeaderSubTitleService>
                            {item.project}
                        </StyledHeaderSubTitleService>
                        {item.company && (
                            <StyledCompany>
                                <span>{item.company}</span>
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href={item.companyHref}>
                                    <span className="material-icons">
                                        open_in_new
                                    </span>
                                </a>
                            </StyledCompany>
                        )}
                    </StyledHeaderService>
                    <StyledContentService>
                        {item.responsibilities && (
                            <div>
                                <span>Main responsibilities:</span>{' '}
                                <span>{item.responsibilities}</span>
                            </div>
                        )}
                        <hr />
                        {item.tech && (
                            <div>
                                <span>Tech stack:</span>{' '}
                                <span>{item.tech}</span>
                            </div>
                        )}
                        <hr />
                        {item.description && (
                            <div>
                                <span>{item.description}</span>
                            </div>
                        )}
                    </StyledContentService>
                </StyledService>
            ))}
        </StyledWrapperService>
    )
}
