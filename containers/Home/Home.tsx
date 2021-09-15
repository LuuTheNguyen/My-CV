import { Layout } from '@components/Layout'
import {
    StyledMain,
    StyledContainer,
    StyledInfo,
    StyledWrapperInfo,
    StyledWrapperHead,
    StyledNavBar,
    StyledWrapperContent,
    StyleBanner,
    StyledBannerContent,
    StyledTitleContent,
    StyledSubTitleContent,
    StyledContainerService,
    StyledContainerEducation,
    StyledWrapperCloseButtonOffCanvasLeft,
    StyledWrapperBtnNavBar,
    StyledWrapperCloseButtonOffCanvasRight,
    StyledTitleItems,
} from './styles'

import { Menu, MenuList } from '@components/Menu'

import { Achievement } from './Achievement'
import { Service } from './Service'
import { Education } from './Education'
import { SideBar } from './SideBar'
import { useIsPrintMode } from 'hooks'
import type { HomeProps } from './interface'

export const HomePage: React.FC<HomeProps> = ({ data }) => {
    const { contentData, headData, summaryData } = data
    const isPrintMode = useIsPrintMode()
    return (
        <Layout name="Home">
            <StyledContainer>
                <StyledMain className="container-xxl">
                    <div className="row">
                        <StyledInfo className="col-11">
                            <StyledWrapperInfo className="row">
                                <>
                                    {!isPrintMode && (
                                        <StyledNavBar className="col-12">
                                            <StyledWrapperBtnNavBar>
                                                <button
                                                    className="btn text-reset"
                                                    type="button"
                                                    data-bs-toggle="offcanvas"
                                                    data-bs-target="#offcanvasRight"
                                                    aria-controls="offcanvasRight">
                                                    <span className="material-icons">menu</span>
                                                </button>
                                            </StyledWrapperBtnNavBar>
                                            <div
                                                className="offcanvas offcanvas-start"
                                                tabIndex={-1}
                                                id="offcanvasRight"
                                                aria-labelledby="offcanvasRightLabel">
                                                <StyledWrapperCloseButtonOffCanvasRight>
                                                    <button
                                                        type="button"
                                                        className="btn text-reset"
                                                        data-bs-dismiss="offcanvas"
                                                        aria-label="Close">
                                                        <span className="material-icons">close</span>
                                                    </button>
                                                </StyledWrapperCloseButtonOffCanvasRight>
                                                <MenuList />
                                            </div>
                                        </StyledNavBar>
                                    )}
                                    <StyledWrapperHead className="col-sm-12 col-lg-3">
                                        <SideBar data={headData} />
                                    </StyledWrapperHead>
                                </>
                                <StyledWrapperContent className="col-sm-12 col-lg-9">
                                    <StyleBanner className="row">
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
                                    </StyleBanner>

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
                        {!isPrintMode && <Menu />}
                    </div>
                </StyledMain>
            </StyledContainer>
        </Layout>
    )
}
