import React from 'react'
import { StyledMenuList, StyledHeaderMenu, StyledContainerMenuList } from './styles'

import { MenuList } from './MenuList'
export const Menu: React.FC = () => {
    return (
        <StyledMenuList>
            <StyledContainerMenuList>
                {/** TO DO: Refactor Menu */}
                <StyledHeaderMenu>{/* <span className="material-icons">menu</span> */}</StyledHeaderMenu>
                <MenuList />
            </StyledContainerMenuList>
        </StyledMenuList>
    )
}
