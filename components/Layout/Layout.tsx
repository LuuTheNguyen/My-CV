import Head from 'next/head'
import { StyledContainerLayout } from './style'
import type { Props } from './interface'
import { useEffect } from 'react'
import {
    StyledWrapperHead,
    StyledNavBar,
    StyledWrapperBtnNavBar,
    StyledWrapperCloseButtonOffCanvasRight,
    StyledWrapper,
    StyledContainer,
} from './style'
import { Menu, MenuList } from '@components/Menu'
import { SideBar } from './SideBar'
import { useIsPrintMode } from 'hooks'
import { useAmp } from 'next/amp'

const MenuMobileButton: React.FC = ({ children }) => {
    const isAmp = useAmp()

    return isAmp ? (
        <button className="buttonMenu" on="tap:offcanvasRight.show">
            {children}
        </button>
    ) : (
        <button
            className="btn text-reset"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight">
            {children}
        </button>
    )
}

const MenuMobileMode: React.FC = ({ children }) => {
    const isAmp = useAmp()

    return isAmp ? (
        <div id="offcanvasRight" style={{width: '300px'}} className="offcanvas offcanvas-start">
            <StyledWrapperCloseButtonOffCanvasRight>
                <button className="buttonMenu" on="tap:offcanvasRight.hide" aria-label="Close">
                    {children}
                </button>
            </StyledWrapperCloseButtonOffCanvasRight>
            <MenuList />
        </div>
    ) : (
        <div
            className="offcanvas offcanvas-start"
            tabIndex={-1}
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel">
            <StyledWrapperCloseButtonOffCanvasRight>
                <button type="button" className="btn text-reset" data-bs-dismiss="offcanvas" aria-label="Close">
                    {children}
                </button>
            </StyledWrapperCloseButtonOffCanvasRight>
            <MenuList />
        </div>
    )
}

export const Layout: React.FC<Props> = ({ children, name, version, headData }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const isPrintMode = useIsPrintMode()
    const isAmp = useAmp()

    return (
        <StyledContainerLayout>
            <Head>
                <title>{name}</title>
                <meta name="description" content={name} />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                {isAmp && (
                    <style amp-custom>
                        {`
                        .buttonMenu {
                                background: transparent;
                                border: none;
                        }
                        #offcanvasRight{
                            position: fixed;
                            top: 0;
                        }
                        `}
                    </style>
                )}
            </Head>
            <StyledContainer>
                <div className="container-xxl">
                    <StyledWrapper className="row">
                        <>
                            {!isPrintMode && (
                                <StyledNavBar>
                                    <StyledWrapperBtnNavBar>
                                        <MenuMobileButton>
                                            <span className="material-icons">menu</span>
                                        </MenuMobileButton>
                                    </StyledWrapperBtnNavBar>
                                    <MenuMobileMode>
                                        <span className="material-icons">close</span>
                                    </MenuMobileMode>
                                </StyledNavBar>
                            )}
                            <StyledWrapperHead>
                                <SideBar data={headData} />
                            </StyledWrapperHead>
                        </>

                        {children}

                        {!isPrintMode && <Menu />}
                    </StyledWrapper>
                </div>
            </StyledContainer>
            <footer>
                <p style={{ display: 'none' }}>Version: {version}</p>
            </footer>
        </StyledContainerLayout>
    )
}
