import {
    StyledWrapperContent, StyleBanner, StyledBannerContent,
    StyledTitleContent, StyledSubTitleContent, StyledContainerService,
    StyledContainerEducation, StyledEducations, StyledEducationItem
} from './styles'

import { BackGroundColor, FontColor, GridBreakpoints } from 'style/Theme'
import {Achievement, AchieveProps} from '@components/Info/Content/Achieve/Achieve'
import {Service, ServiceProps} from '@components/Info/Content/Service/Service'

export interface DataContentProps {    
    achieves:AchieveProps[],
    services:ServiceProps[],
}
interface ContentProps {
    data: DataContentProps
}

export const Content: React.FC<ContentProps> = ({data}) => {
    return(
        <StyledWrapperContent className="col-sm-9">
        <StyleBanner className="row">
            <StyledBannerContent className="col-6">
                <StyledTitleContent>
                    Discoverd my Amazing Art Space!
                </StyledTitleContent>
                <StyledSubTitleContent>
                    <p> &lt;<span className="code">code</span>&gt; I build website &lt;/<span className="code">code</span>&gt;</p>
                    <button type="button" className="btn">
                        <a href="#service">Explore Now</a>
                    </button>
                </StyledSubTitleContent>
            </StyledBannerContent>
        </StyleBanner>

        <Achievement achieves={data.achieves}/>

        <StyledContainerEducation id="education">
            <p>EDUCATION</p>
            <StyledEducations>
                <StyledEducationItem>October 2013 - April 2017</StyledEducationItem>
                <StyledEducationItem>University Ho Chi Minh City - University of Science</StyledEducationItem>
                <StyledEducationItem>Information Technology</StyledEducationItem>
            </StyledEducations>
        </StyledContainerEducation>

        <StyledContainerService id="service">
            <p>WORKS EXPERIENCE</p>
            <Service services={data.services} />
        </StyledContainerService>
    </StyledWrapperContent>

    )
}