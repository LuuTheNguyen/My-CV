import {
    StyledMenuList,
    StyledWrapperMenuList,
    StyledHeaderMenu,
    StyledContainerMenuList,
    StyledMenuItem,
} from './styles'
export const Menu: React.FC = () => {
    return (
        <StyledMenuList className="col-1">
            <StyledContainerMenuList>
                <StyledHeaderMenu>
                    <i className="bi bi-list"></i>
                </StyledHeaderMenu>
                <StyledWrapperMenuList>
                    <StyledMenuItem href="/" text="HOME" />
                </StyledWrapperMenuList>
            </StyledContainerMenuList>
        </StyledMenuList>
    )
}
