import { useEffect, useState } from 'react'
import { useIsBrowser } from './useIsBrowser'

export const useIsPrintMode = () => {
    const [isPrintMode, setIsPrintMode] = useState<boolean>(false)
    const isBrowser = useIsBrowser()

    const printModeEventHandler = (ev: MediaQueryListEvent) =>
        setIsPrintMode(!!ev.matches)

    useEffect(() => {
        if (!isBrowser) {
            return
        }
        const printingEvent = window.matchMedia('print')
        printingEvent.addListener(printModeEventHandler)
        return () => printingEvent.removeListener(printModeEventHandler)
    }, [isBrowser])
    return isPrintMode
}
