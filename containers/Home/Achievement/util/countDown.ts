import { useEffect, useState } from 'react'

export const useCount = (counts: number = 1) => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        const countDown = setTimeout(() => {
            setCount(count + 1)
        }, 1000 / counts)
        if (count === counts) {
            clearTimeout(countDown)
        }
        return () => clearTimeout(countDown)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [count])
    return count
}
