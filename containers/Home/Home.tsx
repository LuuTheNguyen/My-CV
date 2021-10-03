import { Layout } from '@components/Layout'
import {
    StyledMain,
    StyledContainer,
    StyledInfo,
    StyledWrapperInfo,
    StyledWrapperHead,
    StyledNavBar,
    StyledWrapperContent,
    StyledBanner,
    StyledBannerContent,
    StyledSubTitleContent,
    StyledContainerService,
    StyledContainerEducation,
    StyledWrapperBtnNavBar,
    StyledWrapperCloseButtonOffCanvasRight,
} from './styles'

import { Menu, MenuList } from '@components/Menu'

import { Achievement } from './Achievement'
import { Service } from './Service'
import { Education } from './Education'
import { SideBar } from '@components/Layout/SideBar'
import { useIsPrintMode } from 'hooks'
import type { HomeProps } from './interface'
import { TypoComponent } from '@components/Typo'

export const HomePage: React.FC<HomeProps> = ({ data }) => {
    const { contentData, headData, summaryData, version } = data
    const isPrintMode = useIsPrintMode()
    return (
        <Layout name="Nguyên Lưu" version={version} headData={headData}>
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
                                    <StyledBanner className="row">
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
                        {!isPrintMode && <Menu />}
                    </div>
                </StyledMain>
            </StyledContainer>
        </Layout>
    )
}
