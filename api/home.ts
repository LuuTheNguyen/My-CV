import axios from 'axios'

export const getUserData = async () => {
    const response = await axios.post(
        `${process.env.API_ENDPOINT}/user`,
        {
            userPhrase: 'nguyenluu',
        },
        {
            headers: {
                etag: process.env.E_TAG,
            },
        }
    )
    return response.data
}
