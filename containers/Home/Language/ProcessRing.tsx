import { useEffect, useState } from 'react'

import type { ProcessRingProp } from './interface'
import { utilProcessCircle } from './util'

export const ProcessRing: React.FC<ProcessRingProp> = ({
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
    const [count, setCount] = useState(0)

    useEffect(() => {
        setPerValue(count)

        const countDown = setTimeout(() => {
            setCount(count + 1)
        }, 1000 / percentValue)

        if (count == percentValue) {
            clearTimeout(countDown)
        }
    }, [count])

    // const temp = dynamicTheme(theme => theme.fontColor.third)
    return (
        <svg className={className} width={width} height={width}>
            <text
                x={width / 2}
                y={width / 2 + width / 10}
                fontSize={width / 4}
                fill={fontColor}>
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
