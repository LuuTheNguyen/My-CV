import { useCount } from '@hooks'
import type { ProcessBarProps } from './interface'

export const ProcessBar: React.FC<ProcessBarProps> = ({ className, label = '-', percent = 100, height = 10 }) => {
    const count = useCount(percent)

    return (
        <div className={className}>
            <div className="label">
                <span>{label}</span>
                <span>{count}%</span>
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
