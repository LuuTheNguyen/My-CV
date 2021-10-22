import { useAmp } from 'next/amp'

export const useIsAmpAdapter = () => {
    const isAmp = useAmp()
    
    const imgAdapter = (ampProps: JSX.AmpImg, actualComponent: JSX.Element) => {
        return isAmp ? <amp-img {...ampProps}/> : actualComponent
    }

    return  {
        imgAdapter
    }
}


