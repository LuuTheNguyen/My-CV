import { Layout } from '@components/Layout'
import {
    StyledMain,
    StyledInfo,
    StyledWrapperInfo,
    StyledWrapperContent,
    StyledBanner,
    StyledBannerContent,
    StyledTitleContent,
    StyledSubTitleContent,
    StyledContainerService,
    StyledContainerEducation,
    StyledTitleItems,
} from './styles'

import { Achievement } from './Achievement'
import { ServiceList } from './Service'
import { Education } from './Education'
import type { HomeProps } from './interface'

export const HomePage: React.FC<HomeProps> = ({ data }) => {
    const { contentData, headData, summaryData, version } = data
    return (
        <Layout name="Nguyên Lưu" version={version} headData={headData}>
            <StyledMain>
                <div className="row">
                    <StyledInfo>
                        <StyledWrapperInfo>
                            <StyledWrapperContent>
                                <StyledBanner className="row" id="summary">
                                    <StyledBannerContent>
                                        <StyledTitleContent>Discoverd my Amazing Art Space!</StyledTitleContent>
                                        <StyledSubTitleContent>
                                            &lt;
                                            <span className="code">code</span>
                                            &gt; {summaryData} &lt;/
                                            <span className="code">code</span>
                                            &gt;
                                        </StyledSubTitleContent>
                                    </StyledBannerContent>
                                </StyledBanner>

                                <Achievement achieve={contentData.achieves} />

                                <StyledContainerEducation id="education">
                                    <StyledTitleItems>EDUCATION</StyledTitleItems>
                                    <Education educations={contentData.educations} />
                                </StyledContainerEducation>

                                <StyledContainerService id="service">
                                    <StyledTitleItems>WORKS EXPERIENCE</StyledTitleItems>
                                    <ServiceList service={contentData.services} />
                                </StyledContainerService>
                            </StyledWrapperContent>
                        </StyledWrapperInfo>
                    </StyledInfo>
                </div>
            </StyledMain>
        </Layout>
    )
}
