import { useEffect, useState } from 'react'

export const ultiCountDown = (counts: number) => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        const countDown = setTimeout(() => {
            setCount(count + 1)
        }, 1000 / counts)
        if (count === counts) {
            clearTimeout(countDown)
        }
    }, [count])
    return count
}
