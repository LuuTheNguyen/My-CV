import { TypoComponent } from '@components/Typo'
import { useCount } from '@hooks'
import type { ProcessBarProps } from './interface'

export const ProcessBar: React.FC<ProcessBarProps> = ({ className, label = '-', percent = 100, height = 10 }) => {
    const count = useCount(percent)

    return (
        <div className={className}>
            <div className="label">
                <TypoComponent type="content1">{label}</TypoComponent>
                <TypoComponent type="content5">{count}%</TypoComponent>
            </div>
            <div className="progress">
                <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                />
            </div>
        </div>
    )
}
