import axios from 'axios'

export const getUserData = async (id = 1) => {   

    const response = await axios.post(
        `${process.env.API_ENDPOINT}/user`,
        {
            userPhrase: 'nguyenluu-cv',
        },
        {
            headers: {
                etag: process.env.E_TAG,
            },
        }
    )
    return response.data
}
