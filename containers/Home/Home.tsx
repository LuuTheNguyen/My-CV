import { Layout } from '@components/Layout/Layout'
import {
    StyledMain,
    StyledContainer,
    StyledInfo,
    StyledWrapperInfo,
    StyledAboutHead,
    StyledWrapperImage,
    StyledIcon,
    StyledWrapperHead,
    StyledName,
    StyledDescription,
    StyledAboutBody,
    StyledDownloadCV,
    StyledAboutFooter,
    StyledNavBar,
    StyledWrapperContent,
    StyleBanner,
    StyledBannerContent,
    StyledTitleContent,
    StyledSubTitleContent,
    StyledContainerService,
    StyledContainerEducation,
    StyledEducations,
    StyledEducationItem,
} from './styles'

import { Menu } from '@components/Menu/Menu'

import {
    Achievement,
    Service,
    About,
    Language,
    Skill,
    Lib,
    Contact,
} from './index'

import { HeadProps } from './interface'

import { contentData, headData } from './mock'

export const HomePage: React.FC = () => {
    const ViewSideBar: React.FC<HeadProps> = ({ data }) => (
        <>
            <StyledAboutHead>
                <StyledWrapperImage>
                    <StyledIcon
                        src="/logo.jpg"
                        layout="fill"
                        objectFit="cover"
                    />
                </StyledWrapperImage>
                <StyledName>Nguyen Luu</StyledName>
                <StyledDescription>Frontend Dev</StyledDescription>
            </StyledAboutHead>
            <StyledAboutBody>
                <About abouts={data.abouts} />
                <hr />
                <Language languages={data.languages} />
                <hr />
                <Skill skills={data.skills} />
                <hr />
                <Lib libs={data.libs} />
                {/** TODO: Add donwload action */}
                {/* <hr/> */}
                {/* <StyledDownloadCV>
                <span>Download CV</span>&nbsp;<i className="bi bi-triangle-fill"></i>
                </StyledDownloadCV> */}
            </StyledAboutBody>
            <StyledAboutFooter>
                <Contact contacts={data.contacts} />
            </StyledAboutFooter>
        </>
    )

    return (
        <Layout name="Home">
            <StyledContainer>
                <StyledMain className="container-xxl">
                    <div className="row">
                        <StyledInfo className="col-12">
                            <StyledWrapperInfo className="row">
                                <>
                                    <StyledNavBar className="col-12">
                                        <button
                                            className="btn text-reset"
                                            type="button"
                                            data-bs-toggle="offcanvas"
                                            data-bs-target="#offcanvasTop"
                                            aria-controls="offcanvasTop"
                                        >
                                            <span className="material-icons">
                                                more_vert
                                            </span>
                                        </button>

                                        <div
                                            className="offcanvas offcanvas-start"
                                            tabIndex={-1}
                                            id="offcanvasTop"
                                            aria-labelledby="offcanvasTopLabel"
                                        >
                                            <button
                                                type="button"
                                                className="btn text-reset"
                                                data-bs-dismiss="offcanvas"
                                                aria-label="Close"
                                            >
                                                <span className="material-icons">
                                                    more_vert
                                                </span>
                                            </button>
                                            <ViewSideBar data={headData} />
                                        </div>
                                    </StyledNavBar>
                                    <StyledWrapperHead className="col-sm-12 col-lg-3">
                                        <ViewSideBar data={headData} />
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
                                                    {' '}
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
                                                <button
                                                    type="button"
                                                    className="btn"
                                                >
                                                    <a href="#service">
                                                        Explore Now
                                                    </a>
                                                </button>
                                            </StyledSubTitleContent>
                                        </StyledBannerContent>
                                    </StyleBanner>

                                    <Achievement
                                        achieves={contentData.achieves}
                                    />

                                    <StyledContainerEducation id="education">
                                        <p>EDUCATION</p>
                                        <StyledEducations>
                                            <StyledEducationItem>
                                                October 2013 - April 2017
                                            </StyledEducationItem>
                                            <StyledEducationItem>
                                                University Ho Chi Minh City -
                                                University of Science
                                            </StyledEducationItem>
                                            <StyledEducationItem>
                                                Information Technology
                                            </StyledEducationItem>
                                        </StyledEducations>
                                    </StyledContainerEducation>

                                    <StyledContainerService id="service">
                                        <p>WORKS EXPERIENCE</p>
                                        <Service
                                            services={contentData.services}
                                        />
                                    </StyledContainerService>
                                </StyledWrapperContent>
                            </StyledWrapperInfo>
                        </StyledInfo>
                        /**TODO: Refactor Menu */
                        {/* <Menu /> */}
                    </div>
                </StyledMain>
            </StyledContainer>
        </Layout>
    )
}
