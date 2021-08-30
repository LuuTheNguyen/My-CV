import { PropsProcessBar } from './interface'

export const ProcessBar: React.FC<PropsProcessBar> = ({
    className,
    label = '-',
    percent = 100,
    height = 10,
}) => {
    return (
        <div className={className}>
            <div className="label">
                <span>{label}</span>
                <span>{percent}</span>
            </div>
            <div className="progress">
                <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                ></div>
            </div>
        </div>
    )
}
