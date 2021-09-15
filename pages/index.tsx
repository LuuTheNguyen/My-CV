import { HomePage } from '@containers/Home'
import { contentData, headData, summaryData } from '@containers/Home/mock'
import { HomeProps } from '@containers/Home'
// Fake API request
const fetchData = async (id = 1) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ contentData, headData, summaryData })
        }, 200)
    })
}

const ErrorPage: React.FC = () => {
    return <div> Error when get user data </div>
}

const Home: React.FC<HomeProps> = ({ data }) => {
    return <HomePage data={data} />
}

export const getStaticProps = async () => {
    let response = undefined

    response = await fetchData()
    if (!response) {
        return <ErrorPage />
    }
    return {
        props: {
            data: response,
        },
    }
}

export default Home
