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

export const Layout: React.FC<Props> = ({ children, name, version, headData }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const isPrintMode = useIsPrintMode()
    return (
        <StyledContainerLayout>
            <Head>
                <title>{name}</title>
                <meta name="description" content={name} />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <StyledContainer>
                <div className="container-xxl">
                    <StyledWrapper className="row">
                        <>
                            {!isPrintMode && (
                                <StyledNavBar className="col-12">
                                    <StyledWrapperBtnNavBar>
                                        <button
                                            className="btn text-reset"
                                            type="button"
                                            data-bs-toggle="offcanvas"
                                            data-bs-target="#offcanvasRight"
                                            aria-controls="offcanvasRight">
                                            <span className="material-icons">menu</span>
                                        </button>
                                    </StyledWrapperBtnNavBar>
                                    <div
                                        className="offcanvas offcanvas-start"
                                        tabIndex={-1}
                                        id="offcanvasRight"
                                        aria-labelledby="offcanvasRightLabel">
                                        <StyledWrapperCloseButtonOffCanvasRight>
                                            <button
                                                type="button"
                                                className="btn text-reset"
                                                data-bs-dismiss="offcanvas"
                                                aria-label="Close">
                                                <span className="material-icons">close</span>
                                            </button>
                                        </StyledWrapperCloseButtonOffCanvasRight>
                                        <MenuList />
                                    </div>
                                </StyledNavBar>
                            )}
                            <StyledWrapperHead className="col-sm-12 col-lg-3">
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
