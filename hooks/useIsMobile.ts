import { useEffect, useState } from 'react'

export const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false)

    useEffect(() => {
        const handleIsMobile = () => {
            setIsMobile(window.innerWidth <= 1024)
        }
        handleIsMobile()
        if (process.env.NODE_ENV === 'development') {
            window.addEventListener('resize', handleIsMobile)
            return () => window.removeEventListener('resize', handleIsMobile)
        }
    }, [])

    return isMobile
}
