import { Layout } from "@components/Layout/Layout"
import { 
    StyledMain, StyledContainer,
    StyledInfo, StyledWrapperInfo,    
    StyledAboutHead, StyledWrapperImage, StyledIcon, StyledWrapperHead,
    StyledName, StyledDescription, StyledAboutBody,
    StyledDownloadCV, StyledAboutFooter, StyledNavBar,
    StyledWrapperContent, StyleBanner, StyledBannerContent,
    StyledTitleContent, StyledSubTitleContent, StyledContainerService,
    StyledContainerEducation, StyledEducations, StyledEducationItem
 } from './styles/styles'

import { Menu } from '@components/Menu/Menu'

import { Achieve } from '@containers/Home/Achieve/Achieve'
import { Service } from '@containers/Home/Service/Service'
import { About } from '@containers/Home/About/About'
import { Language } from '@containers/Home/Language/Language'
import { Skill } from '@containers/Home/Skill/Skill'
import { Lib } from '@containers/Home/Lib/Lib'
import { Contact } from '@containers/Home/Contact/Contact'

import { DataHeadProps, HeadProps, DataContentProps, ContentProps } from './interface'

export const HomePage: React.FC = () => {    
    const achieveData = [
        { label: '2 +', content: 'Years Experience' },
        { label: '9', content: 'Complete Projects' }
    ]
    
    const serviceData = [
        {
            time: 'April 2017 - February 2018',
            project: 'Saddlier Connect',
            responsibilities: 'Frontend Developer',
            tech: 'JQuery',
            description: 'A leading e-learning platform in US, my responsibility was to ensure the front-office match the template and content',
            company: 'Ban Vien Company',
            companyHref: 'https://banvien.com/',
        },
        // {
        //     time: 'February 2018 - January 2020',
        //     project: 'Perform military service',
        // },
        {
            time: 'May 2020 - June 2021',
            project: 'TikTik',
            responsibilities: 'Frontend Developer',
            tech: 'BEM, Material UI, React Core UI, Jira, Git Kraken, Slack',
            description: 'Website manage store and cards discount of store, with many package service, my responsibility was to ensure the front-office match the template and content, make sure correct flow and functional of web',
            company: 'Intelin Company',
            companyHref: 'https://www.intelin.vn/',
        },
        {
            time: 'March 2021 - April 2021',
            project: 'Web builder for real estate agency',
            responsibilities: 'Frontend Developer',
            tech: 'Material UI, React Core UI, Trello, Git Kraken',
            description: 'A system support real estate agency to build their own website. Based on Next.JS and ReactJS we delivered a handy system support user to manage their estate as well as content with built-in themes. My responsibility is to create and maintenance the built-in theme, ensure pixel-to-pixel match with Figma design',
            companyHref: '',
        }
    ]

    const languageData = [{label: 'Viet Nam', percent:100}, {label:'City', percent:50}]
    const contactData = [{label: 'Phone', content:'(+84)829549118'}, {label:'Skype', content:'nguyenluu121094'}]
    const libData = [{label: 'Boostrap'}, {label:'SCSS'}, {label:'Webpack'}, {label:'Git knowledge'}, {label:'Nextjs'}, {label:'Reactjs/ React Native'}]
    const aboutData = [{label: 'Residence', content:'Viet Nam'}, {label:'City', content:'Ho Chi Minh'}, {label:'Age', content:'27'}]
    const skillData = [{label: 'HTML', percent:80}, {label:'CSS', percent:70}, {label:'JS', percent:70}, {label:'TS', percent:60}]

    const data={        
        achieves: achieveData,
        services: serviceData,
        languages: languageData,
        contacts: contactData,
        libs: libData,
        abouts: aboutData,
        skills: skillData
    }

    const contentData = {
        achieves: data.achieves,
        services: data.services,
    }
    const headData = {
        languages: data.languages,
        contacts: data.contacts,
        libs: data.libs,
        abouts: data.abouts,
        skills: data.skills
    }

    
    const ViewSideBar: React.FC<HeadProps> = ({data}) => (
        <>
            <StyledAboutHead>
                <StyledWrapperImage>
                    <StyledIcon src="/logo.jpg" layout="fill" objectFit="cover" />
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

    return <Layout name="Home">
        <StyledContainer>
            <StyledMain className="container-xxl">
                <div className="row">
                    <StyledInfo 
                        className="col-12"
                    >
                        <StyledWrapperInfo className="row">
                            <>
                                <StyledNavBar className="col-12">
                                    <button className="btn text-reset" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
                                        <span className="material-icons">
                                            more_vert
                                        </span>
                                    </button>

                                    <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasTop" aria-labelledby="offcanvasTopLabel">                    
                                            <button type="button" className="btn text-reset" data-bs-dismiss="offcanvas" aria-label="Close">
                                                <span className="material-icons">
                                                    more_vert
                                                </span>
                                            </button>
                                            <ViewSideBar data={headData}/>                
                                    </div>
                                </StyledNavBar>
                                <StyledWrapperHead className="col-sm-12 col-lg-3">
                                    <ViewSideBar data={headData}/>
                                </StyledWrapperHead>
                            </>
                            <StyledWrapperContent className="col-sm-12 col-lg-9">
                                <StyleBanner className="row">
                                    <StyledBannerContent className="col-sm-12 col-lg-12">
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

                                <Achieve achieves={contentData.achieves} />

                                <StyledContainerEducation id="education">
                                    <p>EDUCATION</p>
                                    <StyledEducations>
                                        <StyledEducationItem>October 2013 - April 2017</StyledEducationItem>
                                        <StyledEducationItem>University Ho Chi Minh City - University of Science</StyledEducationItem>
                                        <StyledEducationItem>Information Technology</StyledEducationItem>
                                    </StyledEducations>
                                </StyledContainerEducation>

                                <StyledContainerService id="service">
                                    <p>WORKS EXPERIENCE</p>
                                    <Service services={contentData.services} />
                                </StyledContainerService>
                            </StyledWrapperContent>
                        </StyledWrapperInfo>
                    </StyledInfo>
                    {/* <Menu /> */}
                </div>
            </StyledMain>
        
        </StyledContainer>
    </Layout>
}