import { HomePage } from '@containers/Home'
import { HomeProps } from '@containers/Home'
import { getUserData } from '@api/home'
import { ErrorPage } from '@components/ErrorPage'
import { useAmp } from 'next/amp'
import Head from 'next/head'

export const config = { amp: 'hybrid' }

const Home: React.FC<HomeProps> = ({ data }) => {
    const isAmp = useAmp()

    return (
        <>
            {!isAmp ? (
                <Head>
                    <link
                        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                        rel="stylesheet"
                        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                        crossOrigin="anonymous"
                        key={'boostrap'}
                    />
                    <link
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/modern-normalize@1.1.0/modern-normalize.min.css"
                        key={'normalize'}
                    />
                    <script
                        defer
                        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
                        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
                        crossOrigin="anonymous"
                    />                    
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${process.env.GA_MEASUREMENT_ID}', {
                        page_path: window.location.pathname,
                        });
                    `
                        }}
                    />
                </Head>
            ) : (
                <Head>
                    <style amp-custom>
                        {`
                                * {
                                    margin: 0;
                                    padding: 0;
                                    box-sizing: border-box;
                                    font-family: Source Sans Pro;
                                }
                                hr{
                                    margin: 10px 0;
                                    border: none;
                                    height: 1px;
                                    background: #fff;
                                }
                                h1, h2, h3, h4, h5{
                                    margin: 20px 0;
                                }
                        `}
                    </style>
                    <script
                        async
                        custom-element="amp-analytics"
                        src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"></script>
                </Head>
            )}
            { isAmp && 
                <amp-analytics type="gtag" data-credentials="include">
                    <script
                        type='application/json'
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                "vars" : {
                                    "gtag_id": "${process.env.GA_MEASUREMENT_ID}",
                                    "config" : {
                                    "${process.env.GA_MEASUREMENT_ID}": { "groups": "default" }
                                    }
                                }
                            }),
                        }}
                    />
                </amp-analytics>}
            <HomePage data={data} />
        </>
    )
}

export const getServerSideProps = async () => {
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
