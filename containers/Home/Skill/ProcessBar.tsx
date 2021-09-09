import { useEffect, useState } from 'react'
import type { ProcessBarProps } from './interface'

export const ProcessBar: React.FC<ProcessBarProps> = ({
    className,
    label = '-',
    percent = 100,
    height = 10,
}) => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        const countDown = setTimeout(() => {
            setCount(count + 1)
        }, 1000 / percent)
        if (count === percent) {
            clearTimeout(countDown)
        }
    }, [count])
    return (
        <div className={className}>
            <div className="label">
                <span>{label}</span>
                <span>{count}</span>
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
