import { useEffect, useState } from 'react'

export const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false)

    useEffect(() => {
        const handleIsMobile = () => {
            if (window.innerWidth <= 1024) {
                setIsMobile(true)
            } else {
                setIsMobile(false)
            }
        }
        window.addEventListener('resize', handleIsMobile)
        handleIsMobile()
        return () => window.removeEventListener('resize', handleIsMobile)
    }, [])

    return isMobile
}
