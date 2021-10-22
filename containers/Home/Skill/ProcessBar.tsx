import { useCount } from '@hooks'
import type { ProcessBarProps } from './interface'
import { useAmp } from 'next/amp'

export const ProcessBar: React.FC<ProcessBarProps> = ({ className, label = '-', percent = 100, height = 10 }) => {
    const count = useCount(percent)
    const isAmp = useAmp()

    return (
        <div className={className}>
            <div className="label">
                <span>{label}</span>
                {isAmp ? (
                    <amp-script width="30" height="20" script="process-bar">
                        <span className='countProcessBar'>{percent}</span>
                        <script
                            id="process-bar"
                            type="text/plain"
                            target="amp-script"
                            dangerouslySetInnerHTML={{
                                __html: `
                    const btn = document.querySelector('.countProcessBar');
                    const value = Number(btn.innerHTML)
                    btn.addEventListener('click', () => {
                        let countValue = 0;
                        const countDown = setInterval(() => {
                            countValue += 1;
                            btn.innerHTML = countValue + '%';
                            if (countValue === value) {
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
                    <span>{count}%</span>
                )}
            </div>
            <div className="progressBar" />
        </div>
    )
}
