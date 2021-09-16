import axios from 'axios'

export const getUserData = async (id = 1) => {
    const devHeaders =
        process.env.NODE_ENV === 'development'
            ? {
                  headers: {
                      origin: 'http://localhost:3000',
                  },
              }
            : undefined

    const response = await axios.post(
        'https://nguyenluu.devcoin.ml/user',
        {
            userPhrase: 'nguyenluu-cv',
        },
        devHeaders
    )
    return response.data
}
