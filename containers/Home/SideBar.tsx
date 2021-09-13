import {
    StyledAboutHead,
    StyledWrapperImage,
    StyledIcon,
    StyledName,
    StyledDescription,
    StyledAboutFooter,
    StyledAboutBody,
    StyledDownloadCV,
} from './styles'
import { Contact } from './Contact'
import type { HeadProps } from './interface'
import { About } from './About'
import { Language } from './Language'
import { Lib } from './Lib'
import { Skill } from './Skill'
import { useIsPrintMode } from 'hooks'

export const SideBar: React.FC<HeadProps> = ({ data }) => {
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
                    <StyledDownloadCV>
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
}
