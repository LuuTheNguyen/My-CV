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
import { Service } from './Service'
import { Education } from './Education'
import { useIsPrintMode } from 'hooks'
import type { HomeProps } from './interface'

export const HomePage: React.FC<HomeProps> = ({ data }) => {
    const { contentData, headData, summaryData, version } = data
    const isPrintMode = useIsPrintMode()
    return (
        <Layout name="Nguyên Lưu" version={version} headData={headData}>
            <StyledMain className="col-sm-12 col-lg-9">
                <div className="row">
                    <StyledInfo className="col-12">
                        <StyledWrapperInfo>
                            <StyledWrapperContent>
                                <StyledBanner className="row" id="summary">
                                    <StyledBannerContent className="col-sm-12 col-lg-12">
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
                                    <Service service={contentData.services} />
                                </StyledContainerService>
                            </StyledWrapperContent>
                        </StyledWrapperInfo>
                    </StyledInfo>
                </div>
            </StyledMain>
        </Layout>
    )
}
