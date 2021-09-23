import {
    StyledAboutHead,
    StyledWrapperImage,
    StyledIcon,
    StyledName,
    StyledDescription,
    StyledAboutFooter,
    StyledAboutBody,
    StyledContainerTool,
    StyledImageGit,
} from './styles'
import { Contact } from './Contact'
import type { HeadProps } from './interface'
import { About } from './About'
import { Language } from './Language'
import { Lib } from './Lib'
import { Skill } from './Skill'
import { useIsPrintMode } from 'hooks'
import { useContext } from 'react'
import { ThemeContext } from '@context/ThemeContext'
import { Theme } from 'style/Theme'

const handlePrint = () => {
    setTimeout(() => {
        window.print()
    }, 1000)
}

export const SideBar: React.FC<HeadProps> = ({ data }) => {
    const { theme } = useContext(ThemeContext)
    const currentTheme = Theme[theme]

    const isPrintMode = useIsPrintMode()
    return (
        <>
            <StyledAboutHead>
                <StyledWrapperImage>
                    <StyledIcon src="/logo.jpg" layout="fill" objectFit="cover" />
                </StyledWrapperImage>
                <StyledName>Luu The Nguyen</StyledName>
                <StyledDescription>Frontend Dev</StyledDescription>
            </StyledAboutHead>
            <StyledAboutBody>
                <About about={data.abouts} />
                <Language language={data.languages} />
                <Skill skill={data.skills} />
                <Lib lib={data.libs} />
                {!isPrintMode && (
                    <StyledContainerTool>
                        <a
                            data-bs-dismiss="offcanvas"
                            aria-label="Print"
                            href="#"
                            rel="noreferrer"
                            onClick={handlePrint}>
                            <span>Print</span>
                            &nbsp;
                            <span className="material-icons">print</span>
                        </a>
                        <a
                            data-bs-dismiss="offcanvas"
                            aria-label="Print"
                            href="https://github.com/LuuTheNguyen/My-CV"
                            rel="noreferrer"
                            target="_blank">
                            <span>GitHub</span>
                            &nbsp;
                            <StyledImageGit src={currentTheme.images.git.src} alt="gitIcon" width={13} height={13} />
                        </a>
                    </StyledContainerTool>
                )}
            </StyledAboutBody>
            <StyledAboutFooter>
                <Contact contact={data.contacts} />
            </StyledAboutFooter>
        </>
    )
}
