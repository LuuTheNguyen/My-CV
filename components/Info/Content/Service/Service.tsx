import { Fragment } from "react"
import {  StyledWrapperService, StyledService,
    StyledHeaderService, StyledContentService, StyledFooterService,
    StyledHeaderSubTitleService, StyledHeaderTitleService
} from "./styles"

export interface ServiceProps {
    time: string,
    project: string,
    responsibilities?: string,
    tech?: string,
    description?: string,
    company?: string,
}

interface Props {
    services: ServiceProps[]
}

export const Service: React.FC<Props> = ({services}) => {
    return (
        <StyledWrapperService>
            {services.map(
                (item, index) => (
                    <StyledService key={index}>
                        <StyledHeaderService>
                            <StyledHeaderTitleService>
                                {item.time}
                            </StyledHeaderTitleService>
                            <StyledHeaderSubTitleService>
                                {item.project}
                            </StyledHeaderSubTitleService>
                        </StyledHeaderService>
                        <StyledContentService>
                            {item.responsibilities && <div><span>Main responsibilities:</span> <span>{item.responsibilities}</span></div>}
                            {item.tech && <div><span>Tech stack:</span> <span>{item.tech}</span></div>}
                            {item.description && <div><span>Description:</span> <span>{item.description}</span></div>}
                        </StyledContentService>
                        <StyledFooterService>
                            <span>{item.company||""}</span>
                        </StyledFooterService>
                    </StyledService>
                )
            )}
        </StyledWrapperService>

    )
}