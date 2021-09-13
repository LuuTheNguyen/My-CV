import React from 'react'
import {
    StyledMenuList,
    StyledHeaderMenu,
    StyledContainerMenuList,
} from './styles'

import { MenuList } from './MenuList'
export const Menu: React.FC = () => {
    return (
        <StyledMenuList className="col-1">
            <StyledContainerMenuList>
                <StyledHeaderMenu>
                    <span className="material-icons">menu</span>
                </StyledHeaderMenu>
                <MenuList />
            </StyledContainerMenuList>
        </StyledMenuList>
    )
}
