import {
    StyledAboutHead,
    StyledWrapperImage,
    StyledIcon,
    StyledAboutFooter,
    StyledAboutBody,
    StyledContainerTool,
    StyledImageGit,
    StyledZoomIcon,
    StyledWrapperZoomImage,
    StyledContainerOpacity,
    StyledContainerZoomImage,
    StyledSkeletonImg,
} from './styles'
import { Contact } from '@containers/Home/Contact'
import type { HeadProps } from '@containers/Home/interface'
import { About } from '@containers/Home/About'
import { Language } from '@containers/Home/Language'
import { Lib } from '@containers/Home/Lib'
import { Skill } from '@containers/Home/Skill'
import { useIsPrintMode } from 'hooks'
import { useContext, useState } from 'react'
import { ThemeContext } from '@context/ThemeContext'
import { Theme } from 'style/Theme'
import { TypoComponent } from '@components/Typo'

const handlePrint = () => {
    setTimeout(() => {
        window.print()
    }, 1000)
}

export const SideBar: React.FC<HeadProps> = ({ data }) => {
    const { theme } = useContext(ThemeContext)
    const currentTheme = Theme[theme]
    const isPrintMode = useIsPrintMode()

    const [isZoomIcon, setIsZoomIcon] = useState(false)
    const resizeImg = () => {
        document.body.style.overflow = isZoomIcon ? 'inherit' : 'hidden'
        setIsZoomIcon(!isZoomIcon)
    }
    const [isImageReady, setIsImageReady] = useState(false)
    const onHandleLoadImg = () => {
        setIsImageReady(true)
    }
    const about = isPrintMode ? data.abouts.filter((item) => item.label !== 'Age') : data.abouts

    return (
        <>
            <StyledAboutHead>
                {!isPrintMode && (
                    <StyledWrapperImage onClick={resizeImg}>
                        <StyledIcon
                            src="/logo.jpg"
                            layout="fill"
                            objectFit="cover"
                            onLoadingComplete={onHandleLoadImg}
                        />
                        {!isImageReady && <StyledSkeletonImg />}
                    </StyledWrapperImage>
                )}
                <TypoComponent type="content2">Luu The Nguyen</TypoComponent>
                <TypoComponent type="content5">Frontend Dev</TypoComponent>
                {isPrintMode && <About about={about} />}
            </StyledAboutHead>
            <StyledAboutBody>
                {!isPrintMode && (
                    <>
                        <About about={data.abouts} />
                        <Language language={data.languages} />
                        <Skill skill={data.skills} />
                    </>
                )}
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
            {!!isZoomIcon && (
                <>
                    <StyledContainerOpacity onClick={resizeImg} />
                    <StyledContainerZoomImage onClick={resizeImg}>
                        <StyledWrapperZoomImage>
                            <StyledZoomIcon
                                src="/logo.jpg"
                                layout="responsive"
                                objectFit="cover"
                                width="30vw"
                                height="30vh"
                                sizes="32w"
                            />
                        </StyledWrapperZoomImage>
                    </StyledContainerZoomImage>
                </>
            )}
        </>
    )
}
