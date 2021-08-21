import {
    StyledWrapperContent, StyleBanner, StyledBannerContent,
    StyledTitleContent, StyledSubTitleContent, StyledContainerService 
} from './styles'

import { BackGroundColor, FontColor, GridBreakpoints } from '@components/style'
import {Achievement} from './achieve/Achieve'
import {Service} from './service/Service'

export const Content: React.FC = () => {
    const achieveData = [
        { label: '2 +', content: 'Years Experience' },
        { label: '9', content: 'Complete Projects' }
    ]
    const contentData = [
        {
            time: 'April 2017 - February 2018',
            project: 'Saddlier Connect',
            responsibilities: 'Frontend Developer',
            tech: 'JQuery',
            description: 'A leading e-learning platform in US, my responsibility was to ensure the front-office match the template and content',
            company: 'Ban Vien Company',
        },
        {
            time: 'February 2018 - January 2020',
            project: 'Perform military service',
        },
        {
            time: 'May 2020 - June 2021',
            project: 'TikTik',
            responsibilities: 'Frontend Developer',
            tech: 'BEM, Material UI, React Core UI, Jira, Git Kraken, Slack',
            description: 'Website manage store and cards discount of store, with many package service, my responsibility was to ensure the front-office match the template and content, make sure correct flow and functional of web',
            company: 'Intelin Company',
        },
        {
            time: 'March 2021 - April 2021',
            project: 'Web builder for real estate agency',
            responsibilities: 'Frontend Developer',
            tech: 'Material UI, React Core UI, Trello, Git Kraken',
            description: 'A system support real estate agency to build their own website. Based on Next.JS and ReactJS we delivered a handy system support user to manage their estate as well as content with built-in themes. My responsibility is to create and maintenance the built-in theme, ensure pixel-to-pixel match with Figma design',
        }
    ]
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

        <Achievement array={achieveData}/>

        <StyledContainerService id="service">
            <p>WORKS EXPERIENCE</p>
            <Service array={contentData} />
        </StyledContainerService>
    </StyledWrapperContent>

    )
}