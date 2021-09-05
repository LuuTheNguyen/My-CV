import {
    StyledAboutHead,
    StyledWrapperImage,
    StyledIcon,
    StyledName,
    StyledDescription,
    StyledAboutBody,
    StyledDownloadCV,
    StyledAboutFooter,
} from '.'

import { About } from './About'
import { Contact } from './Contact'
import { Language } from './Language'
import { Lib } from './Lib'
import { Skill } from './Skill'
import type { HeadProps } from '.'

import { useIsPrintMode } from 'hooks'

export const SideBar: React.FC<HeadProps> = ({ data }) => (
    <>
        <StyledAboutHead>
            <StyledWrapperImage>
                <StyledIcon src="/logo.jpg" layout="fill" objectFit="cover" />
            </StyledWrapperImage>
            <StyledName>Nguyen Luu</StyledName>
            <StyledDescription>Frontend Dev</StyledDescription>
        </StyledAboutHead>
        <StyledAboutBody>
            <About about={data.abouts} />

            <Language language={data.languages} />

            <Skill skill={data.skills} />

            <Lib lib={data.libs} />
            {/** TODO: Add donwload action */}

            {!useIsPrintMode() && (
                <StyledDownloadCV>
                    <a
                        href="https://docs.google.com/document/d/14X8C4riPiht4rjOFozMJyHOeDnpRsScCYbLD8gY-rYA/edit?usp=sharing"
                        target="_blank"
                        rel="noreferrer">
                        <span>Download CV</span>
                        &nbsp;
                        <span className="material-icons">file_download</span>
                    </a>
                    <a
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                        href="#"
                        onClick={() => {
                            setTimeout(() => {
                                window.print()
                            }, 0)
                        }}>
                        <span>Print</span>
                        &nbsp;
                        <span className="material-icons">print</span>
                    </a>
                </StyledDownloadCV>
            )}
        </StyledAboutBody>
        <StyledAboutFooter>
            <Contact contact={data.contacts} />
        </StyledAboutFooter>
    </>
)
