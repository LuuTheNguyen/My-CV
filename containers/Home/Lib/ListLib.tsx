import { TypoComponent } from '@components/Typo'
import type { ListLibProps } from './interface'
import { useIsPrintMode } from '@hooks'

export const ListLib: React.FC<ListLibProps> = ({ className, text = '-' }) => {
    const isPrintMode = useIsPrintMode()
    return (
        <div className={className}>
            {!isPrintMode && <span className="material-icons">done</span>}
            <TypoComponent type="content5">{text}</TypoComponent>
        </div>
    )
}
