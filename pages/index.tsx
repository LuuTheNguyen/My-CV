import { HomePage } from '@containers/Home'
import { HomeProps } from '@containers/Home'
import { getUserData } from '@api/home'
import { ErrorPage } from '@components/ErrorPage'

const Home: React.FC<HomeProps> = ({ data }) => {
    return <HomePage data={data} />
}

export const getStaticProps = async () => {
    let response = null

    response = await getUserData()
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
