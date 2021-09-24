
type GTagEvent = {
    eventName: string
    eventParams: Gtag.EventParams
}
// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL): void => {
    const targetId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || ''
    window.gtag('config', targetId, {
        page_path: url,
    })
}
// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ eventName, eventParams }: GTagEvent): void => {
    window.gtag('event', eventName, eventParams)
}
