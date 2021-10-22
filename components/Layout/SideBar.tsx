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
    StyledZoomIcon,
    StyledWrapperZoomImage,
    StyledContainerOpacity,
    StyledContainerZoomImage,
    StyledSkeletonImg,
} from './style'
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
import { useIsAmpAdapter } from 'hooks/useIsAMP'
import { useAmp } from 'next/amp'
import Head from "next/head"
import { TransitionEnum } from '@enum'

const handlePrint = () => {
    setTimeout(() => {
        window.print()
    }, 1000)
}

export const SideBar: React.FC<HeadProps> = ({ data }) => {
    const { theme } = useContext(ThemeContext)
    const currentTheme = Theme[theme]
    const isPrintMode = useIsPrintMode()
    const isAmpAdapter = useIsAmpAdapter()
    const isAmp = useAmp()

    const [isZoomIcon, setIsZoomIcon] = useState(false)
    const resizeImg = () => {
        document.body.style.overflow = isZoomIcon ? 'inherit' : 'hidden'
        setIsZoomIcon(!isZoomIcon)
    }
    const [isImageReady, setIsImageReady] = useState(false)
    const onHandleLoadImg = () => {
        setIsImageReady(true)
    }

    return (
        <>
            {isAmp && (
                <Head>
                    <style amp-custom>
                        {`amp-img.Sidbar_Icon{
                            border-radius: 80px;
                        }
                        amp-img.Tool_Icon{
                            filter: ${currentTheme.images.git.filter};
                            transition: ${TransitionEnum.DURATION};
                        }
                        `}
                    </style>
                </Head>
            )}
            <StyledAboutHead>
                <StyledWrapperImage onClick={resizeImg}>
                    {isAmpAdapter.imgAdapter(
                        {
                            src: '/logo.jpg',
                            layout: 'fixed',
                            width: '160px',
                            height: '160px',
                            class: 'Sidbar_Icon',
                        },
                        <StyledIcon
                            src="/logo.jpg"
                            layout="fill"
                            objectFit="cover"
                            onLoadingComplete={onHandleLoadImg}
                        />
                    )}
                    {!isImageReady && !isAmp && <StyledSkeletonImg />}
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
                            {isAmpAdapter.imgAdapter(
                                {
                                    src: currentTheme.images.git.src,
                                    layout: 'fixed',
                                    width: '13px',
                                    height: '13px',
                                    class: 'Tool_Icon',
                                },
                                <StyledImageGit
                                    src={currentTheme.images.git.src}
                                    alt="gitIcon"
                                    width={13}
                                    height={13}
                                />
                            )}
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
                            {!isAmp && (
                                <StyledZoomIcon
                                    src="/logo.jpg"
                                    layout="responsive"
                                    objectFit="cover"
                                    width="30vw"
                                    height="30vh"
                                    sizes="32w"
                                />
                            )}
                        </StyledWrapperZoomImage>
                    </StyledContainerZoomImage>
                </>
            )}
        </>
    )
}
