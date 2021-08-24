import {
    StyledWrapperContent, StyleBanner, StyledBannerContent,
    StyledTitleContent, StyledSubTitleContent, StyledContainerService 
} from './styles'

import { BackGroundColor, FontColor, GridBreakpoints } from 'style/Theme'
import {Achievement, AchieveProps} from '../achieve/Achieve'
import {Service, ServiceProps} from '../service/Service'

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

        <StyledContainerService id="service">
            <p>WORKS EXPERIENCE</p>
            <Service services={data.services} />
        </StyledContainerService>
    </StyledWrapperContent>

    )
}