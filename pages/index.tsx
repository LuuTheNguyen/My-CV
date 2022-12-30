import { HomePage } from '@containers/Home'
import { HomeProps } from '@containers/Home'
import { getUserData } from '@api/home'
import { ErrorPage } from '@components/ErrorPage'
import data from '@containers/Home/mock.json'

const Home: React.FC<HomeProps> = ({ data }) => {
    return <HomePage data={data} />
}

export const getServerSideProps = async () => {
    let response = null

    // response = await getUserData()
    // if (!response) {
    //     return <ErrorPage />
    // }
    return {
        props: {
            // data: response,
            data,
        },
    }
}

export default Home
