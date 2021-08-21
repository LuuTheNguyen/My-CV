import { Layout } from "@components/Layout"
import { StyledMain, StyledContainer } from '@containers/home/styles'

import { Info } from '@components/info/Info'
import { Menu } from '@components/menu/Menu'

export const HomePage: React.FC = () => {
    return <Layout name="Home">
        <StyledContainer>
            <StyledMain className="container">
                <div className="row">
                    <Info />
                    <Menu />
                </div>
            </StyledMain>
        
        </StyledContainer>
    </Layout>
}