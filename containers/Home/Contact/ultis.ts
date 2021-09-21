export const propsBuilder = {
    phone(content: string) {
        return { href: `tel:${decodePhoneNumber(content)}` }
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

const reverseChunkArry = (array: string[], chunk = 2) => {
    let i,
        j,
        arrayChunk = []        
    for (i = 0, j = array.length; i < j; i += chunk) {
        arrayChunk.push(array.slice(i, i + chunk).reverse())
    }
    return arrayChunk
}

export const decodePhoneNumber = (phoneNumber: string) => {
    const arr = phoneNumber.split('')
    const arrReverse = arr.reverse()
    const arrChunk = reverseChunkArry(arrReverse, 2)
    const result = arrChunk.join('').replace(/\,/g, '')
    return result
}
