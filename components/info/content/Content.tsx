import {
    StyledWrapperContent, StyleBanner, StyledBannerContent,
    StyledTitleContent, StyledSubTitleContent, StyledContainerService 
} from './styles'

import { BackGroundColor, FontColor, GridBreakpoints } from '@components/style'
import {Achievement, AchieveProps} from './achieve/Achieve'
import {Service, ServiceProps} from './service/Service'

export interface DataHeadProps {    
    achieves: Array<AchieveProps>,
    services: Array<ServiceProps>,
}
interface HeadProps {
    data: DataHeadProps
}

export const Content: React.FC<HeadProps> = ({data}) => {
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

        <Achievement array={data.achieves}/>

        <StyledContainerService id="service">
            <p>WORKS EXPERIENCE</p>
            <Service array={data.services} />
        </StyledContainerService>
    </StyledWrapperContent>

    )
}