import { Layout } from '@components/Layout'
import {
    StyledMain,
    StyledInfo,
    StyledWrapperInfo,
    StyledWrapperContent,
    StyledBanner,
    StyledBannerContent,
    StyledSubTitleContent,
    StyledContainerService,
    StyledContainerEducation,
} from './styles'

import { Achievement } from './Achievement'
import { Service } from './Service'
import { Education } from './Education'
import { useIsPrintMode } from 'hooks'
import type { HomeProps } from './interface'
import { TypoComponent } from '@components/Typo'

export const HomePage: React.FC<HomeProps> = ({ data }) => {
    const isPrintMode = useIsPrintMode()
    const { contentData, headData, summaryData, version } = data
    return (
        <Layout name="Nguyên Lưu" version={version} headData={headData}>
            <StyledMain className="col-sm-12 col-lg-9">
                <div className="row">
                    <StyledInfo className="col-12">
                        <StyledWrapperInfo>
                            <StyledWrapperContent>
                                <StyledBanner className="row" id="summary">
                                    <StyledBannerContent className="col-sm-12 col-lg-12">
                                        <TypoComponent type="title1">Discoverd my Amazing Art Space!</TypoComponent>
                                        <StyledSubTitleContent>
                                            &lt;
                                            <span className="code">code</span>
                                            &gt;
                                            <TypoComponent type="content1">{summaryData}</TypoComponent>
                                            &lt;/
                                            <span className="code">code</span>
                                            &gt;
                                        </StyledSubTitleContent>
                                    </StyledBannerContent>
                                </StyledBanner>

                                <Achievement achieve={contentData.achieves} />

                                <StyledContainerEducation id="education">
                                    <TypoComponent type="title2">EDUCATION</TypoComponent>
                                    <Education educations={contentData.educations} />
                                </StyledContainerEducation>

                                <StyledContainerService id="service">
                                    <TypoComponent type="title2">WORKS EXPERIENCE</TypoComponent>
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
