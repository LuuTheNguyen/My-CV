import { StyledInfo, StyledWrapperInfo } from './styles'

import { BackGroundColor, FontColor, GridBreakpoints } from '@components/style'
import {Head} from './head/Head'
import {Content} from './content/Content'

export const Info: React.FC = () => {
    return(
        <StyledInfo className="col-11">
                        <StyledWrapperInfo className="container">
                            <Head/>
                            <Content/>                        
                        </StyledWrapperInfo>

                    </StyledInfo>
                    
    )
}