import axios from 'axios'

export const getUserData = async (id = 1) => {   

    const response = await axios.post(
        'https://nguyenluu.devcoin.ml/user',
        {
            userPhrase: 'nguyenluu-cv',
        },
        {
            headers: {
                etag: 'add94b30605d0a4fbb86c1e6b03b2455',
            },
        }
    )
    return response.data
}
