export const handlePreventCopyCutContent = (document: Document) => {
    ['copy', 'cut', 'contextmenu', 'dragstart'].forEach((ev) => {
        document.addEventListener(ev, (event) => {
            event.preventDefault()
        })
    })
}

export const handlePreventInspectElement = (document: Document) => {
    document.addEventListener(
        'keydown',
        (event) => {
            if (
                event.keyCode === 123 ||
                (event.ctrlKey && (event.shiftKey ? [73, 76, 74].indexOf(event.keyCode) > -1 : event.keyCode === 85))
            ) {
                event.preventDefault()
            }
        },
        false
    )
}
