import { useEffect, useState } from 'react'

const extractWindowType = () => typeof window !== 'undefined'

export const useIsBrowser = () => {
    const [isBrowser, setIsBrowser] = useState<boolean>(extractWindowType())
    const typeofWindow = typeof window
    useEffect(() => {
        setIsBrowser(extractWindowType())
    }, [typeofWindow])

    return isBrowser
}
