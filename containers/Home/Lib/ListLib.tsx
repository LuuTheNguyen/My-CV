import { TypoComponent } from '@components/Typo'
import type { ListLibProps } from './interface'

export const ListLib: React.FC<ListLibProps> = ({ className, text = '-' }) => {
    return (
        <div className={className}>
            <span className="material-icons">done</span>
            <TypoComponent type="content5">{text}</TypoComponent>
        </div>
    )
}
