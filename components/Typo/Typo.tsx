import type { Props } from './interface'
import { StyledContent1, StyledContent2, StyledTitle1, StyledTitle2, StyledContent3, StyledContent4, StyledContent5 } from './styles'
export const TypoComponent: React.FC<Props> = ({ type, children }) => {
    switch (type) {
        case 'title1':
            return <StyledTitle1>{children}</StyledTitle1>;            
        case 'title2':
            return <StyledTitle2>{children}</StyledTitle2>;
        case 'content1':
            return <StyledContent1>{children}</StyledContent1>;
        case 'content2':
            return <StyledContent2>{children}</StyledContent2>;
        case 'content3':
            return <StyledContent3>{children}</StyledContent3>;
        case 'content4':
            return <StyledContent4>{children}</StyledContent4>;
        case 'content5':
            return <StyledContent5>{children}</StyledContent5>;
        default:
            return <p>{children}</p>
    }
}
