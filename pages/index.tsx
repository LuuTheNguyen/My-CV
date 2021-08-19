import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import * as Styled from "../styles/style"

const Home: React.FC = () => {
  return (
    <Styled.StyledContainer>
      <Head>
        <title>CV Nguyen Luu</title>
        <meta name="description" content="Nguyen Luu CV" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Styled.StyledMain>
        <div className="container">
          <Styled.StyledWrapperMain className="row">
            <Styled.StyledInfo className="col-11">
              <Styled.StyledWrapperInfo className="container">
              <Styled.StyledWrapperHead className="col-3">
                <Styled.StyledAboutHead>
                  <Styled.StyledWrapperImage>
                    <Styled.StyledIcon src="/logo.png" width="80px" height="80px" />
                  </Styled.StyledWrapperImage>
                  <Styled.StyledName>Nguyen Luu</Styled.StyledName>
                  <Styled.StyledDescription>Frontend Dev</Styled.StyledDescription>
                </Styled.StyledAboutHead>
                <Styled.StyledAboutBody>
                  <Styled.StyledAbout>
                    <span>Residence</span> <span>Viet Nam</span>
                    <br />
                    <span>City</span> <span>Ho Chi Minh</span>
                    <br></br>
                    <span>Age</span> <span>27</span>
                  </Styled.StyledAbout>
                  <hr />
                  <Styled.StyledLanguage>
                    <Styled.StyledWrapperProcessRing>
                      <Styled.StlyedProcessRing width={40} stroke={Styled.FontColor.secondary} strokeWidth={2} />
                      <Styled.StlyedTitleProcessRing>VietNamese</Styled.StlyedTitleProcessRing>
                    </Styled.StyledWrapperProcessRing>
                    <Styled.StyledWrapperProcessRing>
                      <Styled.StlyedProcessRing width={40} stroke={Styled.FontColor.secondary} strokeWidth={2} percent={50} />
                      <Styled.StlyedTitleProcessRing>English</Styled.StlyedTitleProcessRing>
                    </Styled.StyledWrapperProcessRing>
                  </Styled.StyledLanguage>
                  <hr/>
                  <Styled.StyledSkill>
                    <Styled.StyledProcessBar label='HTML' percent={80} height={5} />
                    <Styled.StyledProcessBar label='CSS' percent={70} height={5} />
                    <Styled.StyledProcessBar label='JS' percent={75} height={5} />
                    <Styled.StyledProcessBar label='TS' percent={60} height={5} />
                  </Styled.StyledSkill>
                  <hr/>
                  <Styled.StyledLib>
                    <Styled.StyledListLib text="Boostrap"/>
                    <Styled.StyledListLib text="SCSS"/>
                    <Styled.StyledListLib text="Webpack"/>
                    <Styled.StyledListLib text="Git knowledge"/>
                    <Styled.StyledListLib text="Reactjs/ React Native"/>
                    <Styled.StyledListLib text="Nextjs"/>
                  </Styled.StyledLib>
                  <hr/>
                  <Styled.StyledDownloadCV>
                    <span>Download CV</span>&nbsp;<i className="bi bi-triangle-fill"></i>
                  </Styled.StyledDownloadCV>
                </Styled.StyledAboutBody>
                <Styled.StyledAboutFooter>
                  <i className="bi-github" role="img" aria-label="GitHub"></i>
                  <i className="bi bi-twitter" aria-label="twitter"></i>
                </Styled.StyledAboutFooter>
              </Styled.StyledWrapperHead>
              
              <Styled.StyledWrapperContent  className="col-9">
              <Styled.StyleBanner className="row">
                <Styled.StyledBannerContent className="col-6">
                  <Styled.StyledTitleContent>
                    Discoverd my Amazing Art Space!
                  </Styled.StyledTitleContent>
                  <Styled.StyledSubTitleContent>
                    <p> &lt;<span className="code">code</span>&gt; I build website &lt;/<span className="code">code</span>&gt;</p>
                    <button type="button" className="btn">
                      <a href="#service">Explore Now</a>
                    </button>
                  </Styled.StyledSubTitleContent>                
                </Styled.StyledBannerContent>
              </Styled.StyleBanner>
              
              <Styled.StyledContainerAchievement>
                  <Styled.StyledAchievement>
                    <span>2 +</span>
                    <span>Years Experience</span>
                  </Styled.StyledAchievement>
                  <Styled.StyledAchievement>
                    <span>9</span>
                    <span>Complete Projects</span>
                  </Styled.StyledAchievement>
              </Styled.StyledContainerAchievement>

              <Styled.StyledContainerService id="service">
                <p>WORKS EXPERIENCE</p>
                <Styled.StyledWrapperService>
                  <Styled.StyledService>
                    <Styled.StyledHeaderService>
                      <Styled.StyledHeaderTitleService>
                        April 2017 - February 2018
                      </Styled.StyledHeaderTitleService>
                      <Styled.StyledHeaderSubTitleService>
                        Saddlier Connect
                      </Styled.StyledHeaderSubTitleService>
                    </Styled.StyledHeaderService>
                    <Styled.StyledContentService>
                      <div><span>Main responsibilities:</span> <span>Frontend Developer</span></div>
                      <div><span>Tech stack:</span> <span>JQuery</span></div>
                      <div><span>Description:</span> <span>A leading e-learning platform in US, my responsibility was to ensure
                        the front-office match the template and content</span>
                      </div>
                    </Styled.StyledContentService>
                    <Styled.StyledFooterService>
                      <span>Ban Vien Company</span>
                    </Styled.StyledFooterService>
                  </Styled.StyledService>

                  <Styled.StyledService>
                    <Styled.StyledHeaderService>
                      <Styled.StyledHeaderTitleService>
                        February 2018 - January 2020
                      </Styled.StyledHeaderTitleService>
                      <Styled.StyledHeaderSubTitleService>
                        Perform military service
                      </Styled.StyledHeaderSubTitleService>
                    </Styled.StyledHeaderService>
                  </Styled.StyledService>

                  <Styled.StyledService>
                    <Styled.StyledHeaderService>
                      <Styled.StyledHeaderTitleService>
                        May 2020 - June 2021
                      </Styled.StyledHeaderTitleService>
                      <Styled.StyledHeaderSubTitleService>
                        TikTik
                      </Styled.StyledHeaderSubTitleService>
                    </Styled.StyledHeaderService>
                    <Styled.StyledContentService>
                      <div><span>Main responsibilities:</span> <span>Frontend Developer</span></div>
                      <div><span>Tech stack:</span> <span>BEM, Material UI, React Core UI, Jira, Git Kraken, Slack</span></div>
                      <div><span>Description:</span> <span>Website manage store and cards discount of store, with many
                        package service, my responsibility was to ensure the front-office match the template and content, make sure correct flow and functional of web</span>
                      </div>
                    </Styled.StyledContentService>
                    <Styled.StyledFooterService>
                      <span>Intelin Company</span>
                    </Styled.StyledFooterService>
                  </Styled.StyledService>

                  <Styled.StyledService>
                    <Styled.StyledHeaderService>
                      <Styled.StyledHeaderTitleService>
                        March 2021 - April 2021
                      </Styled.StyledHeaderTitleService>
                      <Styled.StyledHeaderSubTitleService>
                        Web builder for real estate agency
                      </Styled.StyledHeaderSubTitleService>
                    </Styled.StyledHeaderService>
                    <Styled.StyledContentService>
                      <div><span>Main responsibilities:</span> <span>Frontend Developer</span></div>
                      <div><span>Tech stack:</span> <span>Material UI, React Core UI, Trello, Git Kraken</span></div>
                      <div><span>Description:</span> <span>A system support real estate agency to build their own website.
                        Based on Next.JS and ReactJS we delivered a handy system support user to manage their estate as well as content with built-in themes. My responsibility is to create and maintenance the built-in theme, ensure pixel-to-pixel match with Figma design
                      </span>
                      </div>
                    </Styled.StyledContentService>
                    <Styled.StyledFooterService>
                      <span></span>
                    </Styled.StyledFooterService>
                  </Styled.StyledService>

                </Styled.StyledWrapperService>
              </Styled.StyledContainerService>
            </Styled.StyledWrapperContent>
              </Styled.StyledWrapperInfo>
            </Styled.StyledInfo>
            <Styled.StyledMenuList className="col-1">
              <Styled.StyledContainerMenuList>
                <Styled.StyledHeaderMenu>
                  <i className="bi bi-list"></i>
                </Styled.StyledHeaderMenu>
                <Styled.StyledWrapperMenuList>
                <Styled.StyledMenuItem href="/" text="HOME" />
                </Styled.StyledWrapperMenuList>
              </Styled.StyledContainerMenuList>
            </Styled.StyledMenuList>
          
          </Styled.StyledWrapperMain>
        </div>
      </Styled.StyledMain>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </Styled.StyledContainer>
  )
}

export default Home
