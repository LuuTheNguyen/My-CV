import { useEffect, useState } from 'react'
import { useCount } from '@hooks'

import type { ProcessRingProps } from './interface'
import { utilProcessCircle } from './util'
import { useAmp } from 'next/amp'

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
    const isAmp = useAmp()

    const [perValue, setPerValue] = useState(0)
    const count = useCount(percentValue)

    useEffect(() => {
        if (!isAmp) {
            setPerValue(count)
        }
    }, [count, isAmp])

    return (
        <>
            {isAmp ? (
                <amp-script width="60" height="60" script="process-ring">
                    <svg className={className} width={width} height={width}>
                        <text
                            x={width / 2}
                            y={width / 2 + width / 10}
                            fontSize={width / 4}
                            fill={fontColor}
                            className="countProcessRing">
                            {percentValue}
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
                    <script
                        id="process-ring"
                        type="text/plain"
                        target="amp-script"
                        dangerouslySetInnerHTML={{
                            __html: `
                    const btn = document.querySelector('.countProcessRing');
                    const value = Number(btn.innerHTML)
                    btn.addEventListener('click', () => {
                        let count = 0;
                        const countDown = setInterval(() => {
                            count += 1;
                            btn.innerHTML = count + '%';
                            if (count === value) {
                                clearInterval(countDown)
                            }
                        }, 1000 / value)
                    });
                    btn.click();
                `,
                        }}
                    />
                </amp-script>
            ) : (
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
            )}
        </>
    )
}
