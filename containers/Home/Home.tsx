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
} from './styles'

import { Menu, MenuList } from '@components/Menu'

import { Achievement } from './Achievement'
import { Service } from './Service'
import { Education } from './Education'
import { SideBar } from './SideBar'

import type { HeadProps } from './interface'

import { contentData, headData } from './mock'
import { useIsPrintMode } from 'hooks'

export const HomePage: React.FC = () => {
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
                                                    data-bs-target="#offcanvasLeft"
                                                    aria-controls="offcanvasLeft">
                                                    <span className="material-icons">
                                                        more_vert
                                                    </span>
                                                </button>

                                                <button
                                                    className="btn text-reset"
                                                    type="button"
                                                    data-bs-toggle="offcanvas"
                                                    data-bs-target="#offcanvasRight"
                                                    aria-controls="offcanvasRight">
                                                    <span className="material-icons">
                                                        menu
                                                    </span>
                                                </button>
                                            </StyledWrapperBtnNavBar>

                                            <div
                                                className="offcanvas offcanvas-start"
                                                tabIndex={-1}
                                                id="offcanvasLeft"
                                                aria-labelledby="offcanvasLeftLabel">
                                                <StyledWrapperCloseButtonOffCanvasLeft>
                                                    <button
                                                        type="button"
                                                        className="btn text-reset"
                                                        data-bs-dismiss="offcanvas"
                                                        aria-label="Close">
                                                        <span className="material-icons">
                                                            more_vert
                                                        </span>
                                                    </button>
                                                </StyledWrapperCloseButtonOffCanvasLeft>
                                                <SideBar data={headData} />
                                            </div>

                                            <div
                                                className="offcanvas offcanvas-end"
                                                tabIndex={-1}
                                                id="offcanvasRight"
                                                aria-labelledby="offcanvasRightLabel">
                                                <StyledWrapperCloseButtonOffCanvasRight>
                                                    <button
                                                        type="button"
                                                        className="btn text-reset"
                                                        data-bs-dismiss="offcanvas"
                                                        aria-label="Close">
                                                        <span className="material-icons">
                                                            close
                                                        </span>
                                                    </button>
                                                </StyledWrapperCloseButtonOffCanvasRight>
                                                <MenuList />
                                            </div>
                                        </StyledNavBar>
                                    )}
                                    <StyledWrapperHead
                                        className={`col-sm-12 col-lg-3 ${
                                            isPrintMode && 'show'
                                        }`}>
                                        <SideBar data={headData} />
                                    </StyledWrapperHead>
                                </>
                                <StyledWrapperContent className="col-sm-12 col-lg-9">
                                    <StyleBanner className="row">
                                        <StyledBannerContent className="col-sm-12 col-lg-12">
                                            <StyledTitleContent>
                                                Discoverd my Amazing Art Space!
                                            </StyledTitleContent>
                                            <StyledSubTitleContent>
                                                <p>
                                                    &lt;
                                                    <span className="code">
                                                        code
                                                    </span>
                                                    &gt; I build website &lt;/
                                                    <span className="code">
                                                        code
                                                    </span>
                                                    &gt;
                                                </p>
                                                {!isPrintMode && (
                                                    <button
                                                        type="button"
                                                        className="btn">
                                                        <a href="#service">
                                                            Explore Now
                                                        </a>
                                                    </button>
                                                )}
                                            </StyledSubTitleContent>
                                        </StyledBannerContent>
                                    </StyleBanner>

                                    <Achievement
                                        achieve={contentData.achieve}
                                    />

                                    <StyledContainerEducation id="education">
                                        <p>EDUCATION</p>
                                        <Education
                                            education={contentData.education}
                                        />
                                    </StyledContainerEducation>

                                    <StyledContainerService id="service">
                                        <p>WORKS EXPERIENCE</p>
                                        <Service
                                            service={contentData.service}
                                        />
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
