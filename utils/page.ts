const preventCopyCutContent = (event: MouseEvent | ClipboardEvent) => {
    event.preventDefault()
}

export const handlePreventCopyCutContent = (document: Document) => {
    document.addEventListener('copy', (event) => {
        preventCopyCutContent(event)
    })
    document.addEventListener('cut', (event) => {
        preventCopyCutContent(event)
    })
    document.addEventListener('contextmenu', (event) => {
        preventCopyCutContent(event)
    })
    document.addEventListener('dragstart', (event) => {
        preventCopyCutContent(event)
    })
}

const preventInspectElement = (event: KeyboardEvent) => {
    event.preventDefault()
    return false
}

export const handlePreventInspectElement = (document: Document) => {
    document.addEventListener(
        'keydown',
        (event) => {
            if (event.keyCode === 123) {
                preventInspectElement(event)
            }
            if (event.ctrlKey) {
                if (
                    (event.shiftKey && event.keyCode === 73) ||
                    (event.shiftKey && event.keyCode === 67) ||
                    (event.shiftKey && event.keyCode === 74)
                ) {
                    preventInspectElement(event)
                }
                if (event.keyCode === 85) {
                    preventInspectElement(event)
                }
            }
        },
        false
    )
}
