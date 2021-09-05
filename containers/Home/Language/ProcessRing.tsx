import { useEffect, useState } from 'react'
import { BackGroundColor, FontColor, GridBreakpoints } from 'style/Theme'

import type { ProcessRingProp } from '.'
import { utilProcessCircle } from '.'

export const ProcessRing: React.FC<ProcessRingProp> = ({
    width = 10,
    strokeWidth = 10,
    percent,
    className,
    stroke = '10',
    strokeBackground,
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
    })
    const [perValue, setPerValue] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {
        setPerValue(count)

        const countDown = setTimeout(() => {
            setCount(count + 1)
        }, 1000 / percentValue)

        if (count == percentValue) {
            console.log(`timeout = ${count} === ${percentValue}`)
            clearTimeout(countDown)
        }
    }, [count])

    return (
        <svg className={className} width={width} height={width}>
            <text
                x={width / 2}
                y={width / 2 + width / 10}
                fontSize={width / 4}
                fill={`${FontColor.primary}`}>
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
