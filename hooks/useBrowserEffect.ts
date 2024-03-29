import { useIsBrowser } from 'hooks'
import { DependencyList, EffectCallback, useEffect } from 'react'

export const useBrowserEffect = (callback: EffectCallback, deps: DependencyList | undefined) => {
    const isBrowser = useIsBrowser()
    useEffect(() => {
        if (isBrowser) {
            callback()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps)
}
