import { useEffect, useState } from 'react'

const extractWindowType = () => typeof window !== 'undefined'

export const useIsBrowser = () => {
    const [isBrowser, setIsBrowser] = useState<boolean>(extractWindowType())

    useEffect(() => {
        setIsBrowser(extractWindowType())
    }, [typeof window])

    return isBrowser
}
