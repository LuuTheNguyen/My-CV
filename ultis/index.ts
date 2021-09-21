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
            if (event.keyCode == 123) {
                preventInspectElement(event)
            }
            if(event.ctrlKey && event.shiftKey){
                if (event.keyCode == 'I'.charCodeAt(0) || event.keyCode == 'C'.charCodeAt(0) || event.keyCode == 'J'.charCodeAt(0)) {
                    preventInspectElement(event)
                }
            }
            if (event.ctrlKey && event.keyCode == 'U'.charCodeAt(0)) {
                preventInspectElement(event)
            }
        },
        false
    )
}
