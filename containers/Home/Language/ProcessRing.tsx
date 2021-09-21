import { useEffect, useState } from 'react'
import { useCount } from '../Achievement/util'

import type { ProcessRingProps } from './interface'
import { utilProcessCircle } from './util'

export const ProcessRing: React.FC<ProcessRingProps> = ({
    width = 10,
    strokeWidth = 10,
    percent,
    className,
    stroke = '10',
    strokeBackground,
    fontColor,
}) => {
    /**TODO: link for example processRing */
    /* https://codepen.io/jeremenichelli/pen/vegymB */
    const { radius, circumference, percentValue, offset } = utilProcessCircle({
        width,
        strokeWidth,
        percent,
        className,
        stroke,
        strokeBackground,
        fontColor,
    })
    const [perValue, setPerValue] = useState(0)
    const count = useCount(percentValue)

    useEffect(() => {
        setPerValue(count)
    }, [count])

    return (
        <svg className={className} width={width} height={width}>
            <text x={width / 2} y={width / 2 + width / 10} fontSize={width / 4} fill={fontColor}>
                {perValue}%
            </text>

            <circle
                stroke={strokeBackground}
                strokeWidth={strokeWidth}
                fill="transparent"
                r={radius}
                cx={width / 2}
                cy={width / 2}
            />

            <circle
                className="processCircle"
                stroke={stroke}
                strokeWidth={strokeWidth}
                fill="transparent"
                r={radius}
                cx={width / 2}
                cy={width / 2}
                strokeDasharray={`${circumference} ${circumference}`}
                strokeDashoffset={`${offset}`}
            />
        </svg>
    )
}
