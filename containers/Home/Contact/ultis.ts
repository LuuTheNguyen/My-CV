export const propsBuilder = {
    phone(content: string) {
        return { href: `tel:${handlePhoneNumber(content)}` }
    },
    mail(content: string) {
        return {
            href: `mailto:${content}`,
            target: '_blank',
            rel: 'noreferrer',
        }
    },
    skype(content: string) {
        return {
            href: `skype:${content}?chat`,
        }
    },
}

const handleReverseChunkArry = (array: string[]) => {
    let i,
        j,
        arrayChunk = [],
        chunk = 2
    for (i = 0, j = array.length; i < j; i += chunk) {
        arrayChunk.push(array.slice(i, i + chunk).reverse())
    }
    return arrayChunk
}

export const handlePhoneNumber = (phoneNumber: string) => {
    const arr = phoneNumber.split('')
    const arrReverse = arr.reverse()
    const arrChunk = handleReverseChunkArry(arrReverse)
    const result = arrChunk.join('').replace(/\,/g, '')
    return result
}
