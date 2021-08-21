import { Fragment } from "react"
import {  StyledWrapperService, StyledService,
    StyledHeaderService, StyledContentService, StyledFooterService,
    StyledHeaderSubTitleService, StyledHeaderTitleService
} from "./styles"

interface Service {
    time: string,
    project: string,
    responsibilities?: string,
    tech?: string,
    description?: string,
    company?: string,
}

export interface Prop {
    array: Array<Service>
}

export const Service: React.FC<Prop> = ({array}) => {
    return (
        <StyledWrapperService>
            {array.map(
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