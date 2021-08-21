import {
    StyledAboutHead, StyledWrapperImage, StyledIcon, StyledWrapperHead,
    StyledName, StyledDescription, StyledAboutBody, StyledAbout, StyledContact,
    StyledLanguage, StlyedProcessRing, StyledWrapperProcessRing, StlyedTitleProcessRing,
    StyledSkill, StyledProcessBar, StyledLib, StyledListLib, StyledDownloadCV, StyledAboutFooter,
} from './styles'

import { BackGroundColor, FontColor, GridBreakpoints } from '@components/style'

export const Head: React.FC = () => {
    return(
        <StyledWrapperHead className="col-sm-3">
                                <StyledAboutHead>
                                    <StyledWrapperImage>
                                        <StyledIcon src="/logo.jpg" layout="fill" objectFit="cover" />
                                    </StyledWrapperImage>
                                    <StyledName>Nguyen Luu</StyledName>
                                    <StyledDescription>Frontend Dev</StyledDescription>
                                </StyledAboutHead>
                                <StyledAboutBody>
                                    <StyledAbout>
                                        <span>Residence</span> <span>Viet Nam</span>
                                        <br />
                                        <span>City</span> <span>Ho Chi Minh</span>
                                        <br></br>
                                        <span>Age</span> <span>27</span>
                                    </StyledAbout>
                                    <hr />
                                    <StyledLanguage>
                                        <StyledWrapperProcessRing>
                                            <StlyedProcessRing width={40} stroke={FontColor.secondary} strokeWidth={2} />
                                            <StlyedTitleProcessRing>VietNamese</StlyedTitleProcessRing>
                                        </StyledWrapperProcessRing>
                                        <StyledWrapperProcessRing>
                                            <StlyedProcessRing width={40} stroke={FontColor.secondary} strokeWidth={2} percent={50} />
                                            <StlyedTitleProcessRing>English</StlyedTitleProcessRing>
                                        </StyledWrapperProcessRing>
                                    </StyledLanguage>
                                    <hr />
                                    <StyledSkill>
                                        <StyledProcessBar label='HTML' percent={80} height={5} />
                                        <StyledProcessBar label='CSS' percent={70} height={5} />
                                        <StyledProcessBar label='JS' percent={75} height={5} />
                                        <StyledProcessBar label='TS' percent={60} height={5} />
                                    </StyledSkill>
                                    <hr />
                                    <StyledLib>
                                        <StyledListLib text="Boostrap" />
                                        <StyledListLib text="SCSS" />
                                        <StyledListLib text="Webpack" />
                                        <StyledListLib text="Git knowledge" />
                                        <StyledListLib text="Reactjs/ React Native" />
                                        <StyledListLib text="Nextjs" />
                                    </StyledLib>
                                    {/* <hr/> */}
                                    {/* <StyledDownloadCV>
                    <span>Download CV</span>&nbsp;<i className="bi bi-triangle-fill"></i>
                  </StyledDownloadCV> */}
                                </StyledAboutBody>
                                <StyledAboutFooter>
                                    <StyledContact>
                                        <span>Phone:</span>
                                        <span>(+84)829549118</span>
                                    </StyledContact>
                                    <StyledContact>
                                        <span>Skype:</span>
                                        <span>nguyenluu121094</span>
                                    </StyledContact>
                                </StyledAboutFooter>
                            </StyledWrapperHead>

    )
}