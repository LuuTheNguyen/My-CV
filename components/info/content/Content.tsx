import {
    StyledWrapperContent, StyleBanner, StyledBannerContent,
    StyledTitleContent, StyledSubTitleContent, StyledContainerAchievement,
    StyledAchievement, StyledContainerService, StyledWrapperService, StyledService,
    StyledHeaderService, StyledContentService, StyledFooterService, StyledHeaderSubTitleService, StyledHeaderTitleService, 
} from './styles'

import { BackGroundColor, FontColor, GridBreakpoints } from '@components/style'

export const Content: React.FC = () => {
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

        <StyledContainerAchievement>
            <StyledAchievement>
                <span>2 +</span>
                <span>Years Experience</span>
            </StyledAchievement>
            <StyledAchievement>
                <span>9</span>
                <span>Complete Projects</span>
            </StyledAchievement>
        </StyledContainerAchievement>

        <StyledContainerService id="service">
            <p>WORKS EXPERIENCE</p>
            <StyledWrapperService>
                <StyledService>
                    <StyledHeaderService>
                        <StyledHeaderTitleService>
                            April 2017 - February 2018
                        </StyledHeaderTitleService>
                        <StyledHeaderSubTitleService>
                            Saddlier Connect
                        </StyledHeaderSubTitleService>
                    </StyledHeaderService>
                    <StyledContentService>
                        <div><span>Main responsibilities:</span> <span>Frontend Developer</span></div>
                        <div><span>Tech stack:</span> <span>JQuery</span></div>
                        <div><span>Description:</span> <span>A leading e-learning platform in US, my responsibility was to ensure
                            the front-office match the template and content</span>
                        </div>
                    </StyledContentService>
                    <StyledFooterService>
                        <span>Ban Vien Company</span>
                    </StyledFooterService>
                </StyledService>

                <StyledService>
                    <StyledHeaderService>
                        <StyledHeaderTitleService>
                            February 2018 - January 2020
                        </StyledHeaderTitleService>
                        <StyledHeaderSubTitleService>
                            Perform military service
                        </StyledHeaderSubTitleService>
                    </StyledHeaderService>
                </StyledService>

                <StyledService>
                    <StyledHeaderService>
                        <StyledHeaderTitleService>
                            May 2020 - June 2021
                        </StyledHeaderTitleService>
                        <StyledHeaderSubTitleService>
                            TikTik
                        </StyledHeaderSubTitleService>
                    </StyledHeaderService>
                    <StyledContentService>
                        <div><span>Main responsibilities:</span> <span>Frontend Developer</span></div>
                        <div><span>Tech stack:</span> <span>BEM, Material UI, React Core UI, Jira, Git Kraken, Slack</span></div>
                        <div><span>Description:</span> <span>Website manage store and cards discount of store, with many
                            package service, my responsibility was to ensure the front-office match the template and content, make sure correct flow and functional of web</span>
                        </div>
                    </StyledContentService>
                    <StyledFooterService>
                        <span>Intelin Company</span>
                    </StyledFooterService>
                </StyledService>

                <StyledService>
                    <StyledHeaderService>
                        <StyledHeaderTitleService>
                            March 2021 - April 2021
                        </StyledHeaderTitleService>
                        <StyledHeaderSubTitleService>
                            Web builder for real estate agency
                        </StyledHeaderSubTitleService>
                    </StyledHeaderService>
                    <StyledContentService>
                        <div><span>Main responsibilities:</span> <span>Frontend Developer</span></div>
                        <div><span>Tech stack:</span> <span>Material UI, React Core UI, Trello, Git Kraken</span></div>
                        <div><span>Description:</span> <span>A system support real estate agency to build their own website.
                            Based on Next.JS and ReactJS we delivered a handy system support user to manage their estate as well as content with built-in themes. My responsibility is to create and maintenance the built-in theme, ensure pixel-to-pixel match with Figma design
                        </span>
                        </div>
                    </StyledContentService>
                    <StyledFooterService>
                        <span></span>
                    </StyledFooterService>
                </StyledService>

            </StyledWrapperService>
        </StyledContainerService>
    </StyledWrapperContent>

    )
}